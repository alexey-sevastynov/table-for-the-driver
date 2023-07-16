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
import { Link, useLocation } from "react-router-dom";
import Button from "../../componets/button/Button";
import { dateSearch } from "../../helpers/dateSearch";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const [valueSearch, setValueSearch] = React.useState("");

  const location = useLocation();

  const stateLocation = location.state;

  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((props) => props.works.jobs);
  const isAuth = useAppSelector((props) => props.works.isAuth);

  const date = new Date();

  const currentMonth =
    stateLocation === null ? date.getMonth() + 1 : stateLocation.month;
  const currentYear =
    stateLocation === null ? date.getFullYear() : stateLocation.year;

  const showData =
    stateLocation === null
      ? `${date.getDate()} ${showCurrentDate(
          date.getMonth(),
          date.getFullYear()
        )}`
      : showCurrentDate(stateLocation.month - 1, stateLocation.year);

  const apiWorks = async () => {
    await dispatch(fetchWorks());
  };

  React.useEffect(() => {
    apiWorks();
  }, []);

  const searchWorks = dateSearch(items, valueSearch).map((item: IWork) => (
    <ItemMain
      key={item._id}
      day={item.day}
      month={item.month}
      year={item.year}
    />
  ));

  const dataOnWorks = items
    .filter((item: IWork) => {
      return (
        currentMonth === item.month &&
        item.id === 1 &&
        currentYear === item.year
      );
    })
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
        <h2>{isAuth ? "Hello, driver!" : "Hello, world!"}</h2>
        <main>
          <div className="header">
            <h3>{showData}</h3>
            <div className="header__input">
              <input
                type="text"
                placeholder="find data..."
                onChange={(e) => setValueSearch(e.target.value)}
              />
              <Icon iconName="find" />
            </div>
          </div>

          <div className="overflow">
            {status === "loaded" ? (
              valueSearch === "" ? (
                dataOnWorks
              ) : searchWorks.length === 0 ? (
                <p className="searchHelp">
                  "Поки ще не знайшов, напевно не має такого дня. Або Ви ввели
                  не правильно, перевірь будь ласка! Коректно писати:
                  дата.місяць.рік (01.01.2023)"
                </p>
              ) : (
                searchWorks
              )
            ) : (
              onLoader
            )}
            {valueSearch.length === 0 && isAuth && (
              <div className="btns">
                <Link to="/statistics" state={stateLocation}>
                  <Button label="statistics" />
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Home;
