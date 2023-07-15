import React from "react";

import * as S from "./styles";

import ButttonLink from "../button-link/ButtonLink";
import User from "../user/User";

interface ISidePanelProps {}

const SidePanel: React.FC<ISidePanelProps> = () => {
  return (
    <S.Root>
      <h1>For driver</h1>
      <nav className="buttons">
        <div>
          <ButttonLink
            icon="month"
            title="current month"
            link="/table-for-the-driver/"
          />
          <ButttonLink icon="months" title="months" link="/months" />
          <ButttonLink icon="setup" title="setup" link="/setup" />
        </div>

        <div>
          <ButttonLink icon="add" title="add item" link="/add" />
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
