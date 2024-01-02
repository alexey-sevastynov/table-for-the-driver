import React from "react";

import { Link } from "react-router-dom";

import * as S from "./styles";
import { Icon } from "../Icon";

import ButttonLink from "../button-link/ButtonLink";

import User from "../user/User";
import { useAppSelector } from "../../redux/hook";
interface IHeaderMobileProps {
  isShowCalendar: boolean;
}

const HeaderMobile: React.FC<IHeaderMobileProps> = ({ isShowCalendar }) => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);

  const isAuth = useAppSelector((props) => props.works.isAuth);

  const clickToggleMenu = () => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  };

  const clickCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <S.Root className={toggleMenu ? "top__80" : ""}>
      <div className={toggleMenu ? "wallpaper" : "wallpaper__active"}>
        <nav className="buttons">
          <div>
            <ButttonLink
              icon="month"
              title="current month"
              link="/table-for-the-driver/"
            />
            <ButttonLink icon="months" title="months" link="/months" />
            {isShowCalendar && (
              <ButttonLink
                icon="google-calendar"
                title="events"
                link="/calendar"
                sizeIcon_25
              />
            )}
          </div>

          {isAuth && (
            <div>
              <ButttonLink icon="setup" title="setup" link="/setup" />
              <ButttonLink icon="add" title="add item" link="/add" />
            </div>
          )}
        </nav>

        <div className={toggleMenu ? "" : "hidden"}>
          {isAuth ? (
            <User
              image="driver.png"
              name="Driver"
              description="Driver, has access to edit"
            />
          ) : (
            <User
              image="user.png"
              name="User"
              description="Guest, has access to view"
            />
          )}
        </div>
      </div>

      <Link
        to={"/table-for-the-driver/"}
        className={toggleMenu ? "fixed" : ""}
        onClick={clickCloseMenu}
      >
        <h1>For driver</h1>
      </Link>

      <Icon
        iconName="menu"
        className={toggleMenu ? "icon fixed" : "icon"}
        onClick={clickToggleMenu}
      />
    </S.Root>
  );
};

export default HeaderMobile;
