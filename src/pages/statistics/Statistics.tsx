import React from "react";
import * as S from "./styles";
import Button from "../../componets/button/Button";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IWork } from "../../redux/slices/worksSlice";
import Item from "./Item";
import { getOneSalary } from "../../redux/slices/customerSlice";
import { showCurrentDate } from "../../helpers/showCurrentDate";

interface IStatisticsProps {}

const Statistics: React.FC<IStatisticsProps> = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const stateLocation = location.state;

  const { items } = useAppSelector((props) => props.works.jobs);
  const { percent, rate } = useAppSelector((props) => props.customer);

  const date = new Date();

  const currentMonth =
    stateLocation === null ? date.getMonth() + 1 : stateLocation.month;
  const currentYear =
    stateLocation === null ? date.getFullYear() : stateLocation.year;

  const showItemDays = items
    .filter(
      (item: IWork) =>
        currentMonth === item.month &&
        item.id === 1 &&
        currentYear === item.year
    )
    .map((data: IWork) => (
      <Item
        key={data._id}
        day={data.day}
        month={data.month}
        year={data.year}
        items={items}
      />
    ));

  const workDays = items.filter(
    (item: IWork) =>
      currentMonth === item.month && item.id === 1 && currentYear === item.year
  );

  const worksDay = items.filter(
    (item: IWork) => currentMonth === item.month && currentYear === item.year
  );

  const summWorkDays = workDays.length;

  const totalSumMoney = worksDay.reduce(
    //@ts-ignore
    (sum: number, current: IWork) => sum + current.income,
    0
  );

  const sumMoney = (status: number) => {
    return (
      worksDay
        .filter((item: IWork) => item.status === status)
        //@ts-ignore
        .reduce((sum: number, current: IWork) => sum + current.income, 0)
    );
  };

  const totalExpenditure = worksDay.reduce(
    //@ts-ignore
    (sum: number, current: IWork) =>
      sum +
      (current.expenditure === null || current.expenditure === undefined
        ? 0
        : current.expenditure),
    0
  );

  const salaryDays = summWorkDays * (rate || 1);

  const salaryPercent = (totalSumMoney - sumMoney(4)) * ((percent || 1) / 100);

  const salary = salaryDays + salaryPercent;

  const salaryReal = salary - sumMoney(1) - sumMoney(4);

  React.useEffect(() => {
    dispatch(getOneSalary());
  }, []);

  return (
    <S.Root>
      <div className="statistics">
        <p className="statistics__title">
          {showCurrentDate(currentMonth - 1, currentYear)}
        </p>

        {showItemDays}

        <div className="statistics__total">
          <p>Разом:</p>
          <ul className="statistics__total-list">
            <li>{`Робочих днів: ${summWorkDays} д.`}</li>
            <li>{`Загалальна кількість грошей: ${totalSumMoney} грн`}</li>
            <li>
              {`Загалальна кількість грошей, які мені сплатили: ${sumMoney(
                1
              )} грн`}
            </li>
            <li>
              {`Загалальна кількість грошей, які мені не сплатили: ${sumMoney(
                2
              )} грн`}
            </li>
            <li>{`Загалальна кількість грошей, борг: ${sumMoney(3)} грн`}</li>
            <li>
              {`Загалальна кількість грошей, які платили не за мою роботу: ${sumMoney(
                4
              )}`}
              грн
            </li>
            <li>
              {`Загалльні витрати: ${totalExpenditure}`}
              грн
            </li>
          </ul>
          <div className="statistics__total-salary">
            <p>Розрахунок зарплати: </p>
            <p>
              {`${summWorkDays} днів * ${rate} грн = ${salaryDays}
              грн ;`}
            </p>
            <p>
              {`(${totalSumMoney} грн
              ${
                sumMoney(4) === 0 ? "" : ` - ${sumMoney(4)} грн`
              }) * ${percent} %
              = ${salaryPercent} грн ;`}
            </p>
            <p>
              {`${salaryDays} грн + ${salaryPercent} грн = ${salary} грн (зарплата) ;`}
            </p>
            <p>{`${salary} грн (зарплата) ${
              sumMoney(1) === 0 ? "" : ` - ${sumMoney(1)} грн (гроші в мене)`
            } ${
              sumMoney(4) === 0 ? "" : ` - ${sumMoney(4)} грн (інші гроші)`
            } ${
              totalExpenditure === 0
                ? ""
                : ` + ${totalExpenditure} грн (витрати)`
            } = ${salaryReal} грн ${
              salaryReal > 0 ? "(мені повинні)" : "(я повинен)"
            }; `}</p>
          </div>
        </div>

        <div className="btns">
          <Link to="/table-for-the-driver/">
            <Button label="back" isUnActive />
          </Link>

          <Button label="print" click={() => window.print()} />
        </div>
      </div>
    </S.Root>
  );
};

export default Statistics;
