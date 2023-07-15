import React from "react";

import { Link } from "react-router-dom";

import * as S from "./styles";
import { Icon } from "../Icon";

import ButttonLink from "../button-link/ButtonLink";

import User from "../user/User";
interface IHeaderMobileProps {}

const HeaderMobile: React.FC<IHeaderMobileProps> = () => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);

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
          </div>

          <div>
            <ButttonLink icon="setup" title="setup" link="/setup" />
            <ButttonLink icon="add" title="add item" link="/add" />
          </div>
        </nav>

        <div className={toggleMenu ? "" : "hidden"}>
          <User
            image="user.png"
            name="User"
            description="Guest, has access to view"
          />
        </div>
      </div>

      <Link
        to={"/table-for-the-driver/"}
        className={toggleMenu ? "fixed" : ""}
        onClick={clickCloseMenu}
      >
        <h1>Dashboard</h1>
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
