import React from "react";

import { Link } from "react-router-dom";

import * as S from "./styles";
import { Icon } from "../Icon";
import MenuMobile from "../menu-mobile/MenuMobile";

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
    <S.Root className={toggleMenu ? "active" : ""}>
      <Link to={"/table-for-the-driver/"} onClick={clickCloseMenu}>
        <h1>Dashboard</h1>
      </Link>

      <Icon iconName="menu" className="icon" onClick={clickToggleMenu} />
      {toggleMenu && <MenuMobile />}
    </S.Root>
  );
};

export default HeaderMobile;
