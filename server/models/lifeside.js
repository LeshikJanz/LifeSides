'use strict';

module.exports = function (Lifeside) {
  Lifeside.observe('before save', function updateTimestamp (ctx, next) {
    if (ctx.instance) {
      if (!ctx.instance.creationDate) {
        ctx.instance.creationDate = new Date();
      }
    }

    next();
  });
};
