import React from "react";

import * as S from "./styles";
import { tableHadeNames } from "../../constants";
import Data from "../Data/Data";

import { showDate } from "../../helpers/showDate";
import { getWeekDay } from "../../helpers/getWeekDay";
import { useAppSelector } from "../../redux/hook";
import { IWork } from "../../redux/slices/worksSlice";

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
        .filter(
          (item: IWork) =>
            item.day === day && item.month === month && item.year === year
        )
        .sort((a: IWork, b: IWork) => (a.id > b.id ? 1 : -1))
        .map((item: IWork) => {
          const amountWorks = items.filter(
            (item: IWork) =>
              item.day === day && item.month === month && item.year === year
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
              expenditure={item.expenditure}
              amountWorks={amountWorks}
            />
          );
        })}
    </S.Root>
  );
};

export default ItemMain;
