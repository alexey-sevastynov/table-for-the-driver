import React from "react";

import * as S from "./styles";
import { tableHadeNames } from "../../constants";
import Data from "../Data/Data";

import { showDate } from "../../helpers/showDate";
import { getWeekDay } from "../../helpers/getWeekDay";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  IWork,
  deleteDayWork,
  fetchWorks,
} from "../../redux/slices/worksSlice";
import { Icon } from "../Icon";
import { Link } from "react-router-dom";

interface IItemMainProps {
  day: number;
  month: number;
  year: number;
}

const ItemMain: React.FC<IItemMainProps> = ({ day, month, year }) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((props) => props.works.isAuth);
  const items = useAppSelector((props) => props.works.jobs.items);
  const date = new Date(year, month - 1, day);

  const removeDay = async (day: number, month: number, year: number) => {
    console.log(day, month, year);
    if (confirm("are you really want to delete work day?")) {
      await dispatch(deleteDayWork({ day, month, year })).finally(() =>
        dispatch(fetchWorks())
      );
    }
  };

  return (
    <S.Root>
      <S.Header>
        <Link to={`/day`} state={{ day, month, year }}>
          <h4>{showDate(day, month, year)}</h4>
        </Link>

        <h6>{getWeekDay(date)}</h6>

        {isAuth && (
          <Icon
            iconName="close"
            className="close"
            onClick={() => removeDay(day, month, year)}
          />
        )}

        {isAuth && (
          <Link
            to={"/edit"}
            state={{ day, month, year }}
            className="edit__link"
          >
            <Icon iconName="edit" className="edit" />
          </Link>
        )}
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
              status={Number(item.status)}
              expenditure={item.expenditure}
              amountWorks={amountWorks}
            />
          );
        })}
    </S.Root>
  );
};

export default ItemMain;
