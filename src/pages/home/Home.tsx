import React from "react";
import * as S from "./styles";

import SidePanel from "../../componets/side-panel/SidePanel";
import { Icon } from "../../componets/Icon";
import ItemMain from "../../componets/item-main/ItemMain";
import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IWork, fetchWorks } from "../../redux/slices/worksSlice";
import { showCurrentDate } from "../../helpers/showCurrentDate";

import { RotatingLines } from "react-loader-spinner";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((props) => props.works.jobs);

  const date = new Date();

  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const apiWorks = async () => {
    await dispatch(fetchWorks());
  };

  React.useEffect(() => {
    apiWorks();
  }, []);

  const dataOnWorks = items
    .filter(
      (item: IWork) =>
        currentMonth === item.month &&
        item.id === 1 &&
        currentYear === item.year
    )
    .sort((a: IWork, b: IWork) => (a.day > b.day ? 1 : -1))
    .map((item: IWork) => (
      <ItemMain
        key={item._id}
        day={item.day}
        month={item.month}
        year={item.year}
      />
    ));

  const onLoader = (
    <div className="center">
      <RotatingLines
        strokeColor="#3A2070"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );

  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <div className="header">
            <h3>{showCurrentDate(date.getMonth(), date.getFullYear())}</h3>
            <div className="header__input">
              <input type="text" placeholder="find data..." />
              <Icon iconName="find" />
            </div>
          </div>
          <div className="overflow">
            {status === "loaded" ? dataOnWorks : onLoader}
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Home;
