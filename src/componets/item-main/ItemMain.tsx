import React from "react";

import * as S from "./styles";
import { dayNames, tableHadeNames } from "../../constants";
import Data from "../Data/Data";
import { showCurrentDate } from "../../helpers/showCurrentDate";
import { showDate } from "../../helpers/showDate";
import { getWeekDay } from "../../helpers/getWeekDay";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IWork, fetchWorks } from "../../redux/slices/worksSlice";

const array = [
  {
    id: 1,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 1,
  },
  {
    id: 2,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 2,
  },
  {
    id: 3,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 3,
  },
  {
    id: 4,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 4,
  },
];

interface IItemMainProps {
  day: number;
  month: number;
  year: number;
}

const ItemMain: React.FC<IItemMainProps> = ({ day, month, year }) => {
  const items = useAppSelector((props) => props.works.jobs.items);
  const date = new Date(year, month - 1, day);

  return (
    <S.Root>
      <S.Header>
        <h4>{showDate(day, month, year)}</h4>
        <h5>{getWeekDay(date)}</h5>
      </S.Header>

      <S.TableHead>
        {tableHadeNames.map((name) => (
          <div key={name} className={name}>
            <h4>{name}</h4>
          </div>
        ))}
      </S.TableHead>

      {items
        .filter((item: IWork) => item.day === day)
        .sort((a: IWork, b: IWork) => (a.id > b.id ? 1 : -1))
        .map((item: IWork) => {
          const amountWorks = items.filter(
            (item: IWork) => item.day === day
          ).length;

          return (
            <Data
              key={item.id}
              id={item.id}
              customer={item.customer}
              route={item.route}
              hours={item.hours}
              km={item.km}
              income={item.income}
              status={item.status}
              amountWorks={amountWorks}
            />
          );
        })}
    </S.Root>
  );
};

export default ItemMain;
