import React from "react";
import * as S from "./styles";

import { Icon } from "../Icon";
import theme from "../../styles/theme";
import { useLocation } from "react-router-dom";

interface IButttonLinkProps {
  icon: string; // assets/svg/ " name ".svg
  title: string;

  link: string;
  sizeIcon_25?: boolean;
}

const ButttonLink: React.FC<IButttonLinkProps> = ({
  icon,
  title,
  link,
  sizeIcon_25,
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
      <Icon
        iconName={icon}
        className={isPageActive ? "active" : ""}
        height={sizeIcon_25 ? 25 : 25}
        width={sizeIcon_25 ? 25 : 25}
      />
      {title}
    </S.Root>
  );
};

export default ButttonLink;
