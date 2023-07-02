import React from "react";

import * as S from "./styles";

import ButttonLink from "../button-link/ButttonLink";
import User from "../user/User";

interface ISidePanelProps {}

const SidePanel: React.FC<ISidePanelProps> = () => {
  return (
    <S.Root>
      <h1>Dashboard</h1>

      <ButttonLink icon="home" title="current mounth" isActive />
      <ButttonLink icon="home" title="mounths" />

      <User
        image="user.png"
        name="User"
        description="Guest, has access to view"
      />
    </S.Root>
  );
};

export default SidePanel;
