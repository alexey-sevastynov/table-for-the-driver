import React from "react";
import * as S from "./styles";
import SidePanel from "../../componets/side-panel/SidePanel";
import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import DataDay from "../../componets/data-day/DataDay";
import { useAppSelector } from "../../redux/hook";
import { useLocation } from "react-router-dom";

import { IWork } from "../../redux/slices/worksSlice";
import { showCurrentDay } from "../../helpers/showCurrentDay";

interface IDayProps {}

const Day: React.FC<IDayProps> = () => {
  const location = useLocation();

  const stateLocation = location.state; //{"day": 7, "month": 7,"year": 2023}

  const { items } = useAppSelector((props) => props.works.jobs);

  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <h3>
            {showCurrentDay(
              stateLocation.day,
              stateLocation.month,
              stateLocation.year
            )}
          </h3>

          <div className="overflow">
            {items
              .filter(
                (item: IWork) =>
                  item.day === stateLocation.day &&
                  item.month === stateLocation.month &&
                  item.year === stateLocation.year
              )
              .map((item: IWork) => (
                <DataDay
                  key={item.id}
                  id={item.id}
                  customer={item.customer}
                  route={item.route}
                  hours={item.hours}
                  km={item.km}
                  income={item.income}
                  status={item.status}
                  expenditure={item.expenditure}
                  description={item.description}
                />
              ))}

            {/* id, status, customer, route, hours, km, income, expenditure,
            description,
            <DataDay status={1}  /> */}
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Day;
