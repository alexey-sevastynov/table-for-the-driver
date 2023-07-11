import React from "react";
import * as S from "./styles";

import { Icon } from "../Icon";
import theme from "../../styles/theme";
import { useLocation } from "react-router-dom";

interface IButttonLinkProps {
  icon: string; // assets/svg/ " name ".svg
  title: string;

  link: string;
}

const ButttonLink: React.FC<IButttonLinkProps> = ({
  icon,
  title,

  link,
}) => {
  const location = useLocation().pathname;
  const isPageActive = location === link;

  return (
    <S.Root
      to={link}
      //@ts-ignore
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? theme.colors.violet : null,
          color: isActive ? theme.colors.white : null,
        };
      }}
    >
      <Icon iconName={icon} className={isPageActive ? "active" : ""} />
      {title}
    </S.Root>
  );
};

export default ButttonLink;
