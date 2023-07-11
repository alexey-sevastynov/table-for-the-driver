import React from "react";

import * as S from "./styles";

import ButttonLink from "../button-link/ButtonLink";
import User from "../user/User";

interface IMenuMobileProps {}

const MenuMobile: React.FC<IMenuMobileProps> = () => {
  return (
    <S.Root>
      <nav className="buttons">
        <div>
          <ButttonLink
            icon="home"
            title="current month"
            link="table-for-the-driver/"
          />
          <ButttonLink
            icon="home"
            title="months"
            link="table-for-the-driver/months"
          />
        </div>

        <div>
          <ButttonLink
            icon="home"
            title="setup"
            link="table-for-the-driver/setup"
          />
          <ButttonLink
            icon="home"
            title="add item"
            link="table-for-the-driver/add"
          />
        </div>
      </nav>

      <User
        image="user.png"
        name="User"
        description="Guest, has access to view"
      />
    </S.Root>
  );
};

export default MenuMobile;
