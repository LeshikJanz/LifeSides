// @flow

import React from "react";
import "./styles/habitBackSide.scss";
import moment from "moment";

type Props = {
  repeatProgress: number,
  lastRepetitionTime: string,
  changeHabitSide: () => void
};

const HabitBackSide = ({
  repeatProgress,
  lastRepetitionDate,
  changeHabitSide
}: Props) => (
  <div className="habit-wrapper habit-back-side" onClick={changeHabitSide}>
    <span>Выполнено повторений: {repeatProgress}</span>
    {lastRepetitionDate && (
      <span>
        Последнее: {moment(lastRepetitionDate).lang('ru').format("DD MMM, hh:mm a")}
      </span>
    )}
  </div>
);

export default HabitBackSide;
