import React from "react";

import * as S from "./styles";

import ButttonLink from "../button-link/ButtonLink";
import User from "../user/User";
import { Link, NavLink } from "react-router-dom";

interface ISidePanelProps {}

const SidePanel: React.FC<ISidePanelProps> = () => {
  return (
    <S.Root>
      <h1>Dashboard</h1>
      <nav className="buttons">
        <div>
          <ButttonLink icon="home" title="current mounth" link="/" />
          <ButttonLink icon="home" title="mounths" link="/mounths" />
        </div>

        <div>
          <ButttonLink icon="home" title="add item" link="/add" />
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
