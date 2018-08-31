'use strict';

module.exports = function (Habit) {
  Habit.observe('before save', function updateTimestamp (ctx, next) {
    if (ctx.instance) {
      if (!ctx.instance.creationDate) {
        ctx.instance.creationDate = new Date();
      } else {
        ctx.instance.lastRepetitionDate = new Date();
      }
    }

    next();
  });

  Habit.completeOneTime = function (habitId, cb) {
    Habit.findById(habitId,
      function (err, habit) {

        const updatedHabit = {
          ...habit,
          repeatProgress: habit.repeatProgress + 1,
          lastRepetitionDate: new Date()
        }

        Habit.updateAll(
          { id: habitId },
          updatedHabit,
          function (err, habitIdInstance) {
            cb(err, habitIdInstance)
          });
      });
  }

  Habit.remoteMethod('completeOneTime', {
    accepts: { arg: 'habitId', type: 'string' },
    returns: { arg: 'habitId', type: 'string' }
  });
};
