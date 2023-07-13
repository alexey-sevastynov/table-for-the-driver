import React from "react";
import * as S from "./styles";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getOneSalary } from "../../redux/slices/customerSlice";

type IStatisticsDayProps = {};

const StatisticsDay: React.FC<IStatisticsDayProps> = () => {
  const dispatch = useAppDispatch();

  const {
    totalHours,
    totalKm,
    totalIncome,
    totalUknownIncome,
    totalMeIncome,
    totalOtherIncome,
    totalDebt,
    totalExpenditure,
  } = useAppSelector((props) => props.statistic);

  const { percent, rate } = useAppSelector((props) => props.customer);

  const checkPercent = percent ? percent : 0;
  const checkRate = rate ? rate : 0;

  const salaryDay =
    ((totalIncome - totalOtherIncome) * checkPercent) / 100 + checkRate;

  React.useEffect(() => {
    dispatch(getOneSalary());
  }, []);

  return (
    <S.Root>
      <p className="col_1">Statistics Day:</p>
      <div className="table">
        <div className="table__block">
          <p className="table__block-title">hours:</p>
          <p className="table__block-data">{totalHours} hours</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">kilometers:</p>
          <p className="table__block-data">{totalKm} km</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">total income:</p>
          <p className="table__block-data">{totalIncome} UAH</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">me income:</p>
          <p className="table__block-data">{totalMeIncome} UAH</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">uknown income:</p>
          <p className="table__block-data">{totalUknownIncome} UAH</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">total debt:</p>
          <p className="table__block-data">{totalDebt} UAH</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">other income:</p>
          <p className="table__block-data">{totalOtherIncome} UAH</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">expenditure:</p>
          <p className="table__block-data">{totalExpenditure} UAH</p>
        </div>
        <div className="table__block">
          <p className="table__block-title">salary day:</p>
          <p className="table__block-data">
            {`${
              totalIncome - totalOtherIncome
            } uah * ${percent} % + ${rate} uah = ${salaryDay} UAH`}
          </p>
        </div>
      </div>
    </S.Root>
  );
};

export default StatisticsDay;
