import React from "react";

import * as S from "./styles";

import ButttonLink from "../button-link/ButtonLink";
import User from "../user/User";
import { useAppSelector } from "../../redux/hook";

interface ISidePanelProps {}

const SidePanel: React.FC<ISidePanelProps> = () => {
  const isAuth = useAppSelector((props) => props.works.isAuth);

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
          {isAuth && (
            <ButttonLink icon="months" title="calendar" link="/calendar" />
          )}
          {isAuth && <ButttonLink icon="setup" title="setup" link="/setup" />}
        </div>

        {isAuth && (
          <div>
            <ButttonLink icon="add" title="add item" link="/add" />
          </div>
        )}
      </nav>
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
    </S.Root>
  );
};

export default SidePanel;
