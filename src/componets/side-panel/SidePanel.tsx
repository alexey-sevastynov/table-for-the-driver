import React from "react";

import * as S from "./styles";

import ButttonLink from "../button-link/ButtonLink";
import User from "../user/User";

interface ISidePanelProps {}

const SidePanel: React.FC<ISidePanelProps> = () => {
  return (
    <S.Root>
      <h1>Dashboard</h1>
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
          <ButttonLink
            icon="home"
            title="setup"
            link="table-for-the-driver/setup"
          />
        </div>

        <div>
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

export default SidePanel;
