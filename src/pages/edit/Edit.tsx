import React from "react";
import * as S from "./styles";
import SidePanel from "../../componets/side-panel/SidePanel";
import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import DataEdit from "../../componets/data-edit/DataEdit";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useLocation } from "react-router-dom";
import { IWork } from "../../redux/slices/worksSlice";
import { showCurrentDay } from "../../helpers/showCurrentDay";
import { fetchAllOptions } from "../../redux/slices/customerSlice";

type IEditProps = {};

const Edit: React.FC<IEditProps> = () => {
  const dispatch = useAppDispatch();
  let idnew = 0;
  const location = useLocation();

  const stateLocation = location.state;

  const { items } = useAppSelector((props) => props.works.jobs);

  React.useEffect(() => {
    dispatch(fetchAllOptions());
  }, []);

  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <div className="header">
            <h3>Edit form</h3>
            <h3>
              {showCurrentDay(
                stateLocation.day,
                stateLocation.month,
                stateLocation.year
              )}
            </h3>
          </div>

          <div className="overflow">
            {items
              .filter(
                (item: IWork) =>
                  item.day === stateLocation.day &&
                  item.month === stateLocation.month &&
                  item.year === stateLocation.year
              )
              .map((item: IWork) => {
                return (
                  <DataEdit
                    key={item.id}
                    _id={item._id}
                    id={++idnew}
                    customer={item.customer}
                    route={item.route}
                    hours={item.hours}
                    km={item.km}
                    income={item.income}
                    status={Number(item.status)}
                    expenditure={item.expenditure}
                    description={item.description}
                  />
                );
              })}
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Edit;
