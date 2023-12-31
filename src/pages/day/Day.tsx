import React from "react";
import * as S from "./styles";
import SidePanel from "../../componets/side-panel/SidePanel";
import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import DataDay from "../../componets/data-day/DataDay";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useLocation } from "react-router-dom";

import { IWork } from "../../redux/slices/worksSlice";
import { showCurrentDay } from "../../helpers/showCurrentDay";
import StatisticsDay from "../../componets/statistics-day/StatisticsDay";
import {
  setCurrentDay,
  getTotalStaticsDay,
} from "../../redux/slices/statisticSlice";
import Button from "../../componets/button/Button";

interface IDayProps {}

const Day: React.FC<IDayProps> = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isShowCalendar = false;

  const stateLocation = location.state; //{"day": 7, "month": 7,"year": 2023}

  const { items } = useAppSelector((props) => props.works.jobs);
  const isAuth = useAppSelector((props) => props.works.isAuth);

  const itemsDay = items.filter(
    (item: IWork) =>
      item.day === stateLocation.day &&
      item.month === stateLocation.month &&
      item.year === stateLocation.year
  );

  React.useEffect(() => {
    dispatch(setCurrentDay(itemsDay));
    dispatch(getTotalStaticsDay());
  }, []);

  return (
    <S.Root>
      <SidePanel isShowCalendar={isShowCalendar} />
      <HeaderMobile isShowCalendar={isShowCalendar} />
      <div className="colum_2">
        <h2>{isAuth ? "Hello, driver!" : "Hello, world!"}</h2>
        <main>
          <h3>
            {showCurrentDay(
              stateLocation.day,
              stateLocation.month,
              stateLocation.year
            )}
          </h3>

          <div className="overflow">
            {itemsDay.map((item: IWork) => (
              <DataDay
                key={item.id}
                id={item.id}
                customer={item.customer}
                route={item.route}
                hours={item.hours}
                km={item.km}
                income={item.income}
                status={Number(item.status)}
                expenditure={item.expenditure}
                description={item.description}
              />
            ))}

            {isAuth && <StatisticsDay />}

            <div className="btns">
              <Button label="back" click={() => window.history.back()} />
            </div>
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Day;
