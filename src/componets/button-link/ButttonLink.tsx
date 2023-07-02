import React from "react";
import * as S from "./styles";

import { Icon } from "../Icon";

interface IButttonLinkProps {
  icon: string; // assets/svg/ " name ".svg
  title: string;
  isActive?: boolean;
}

const ButttonLink: React.FC<IButttonLinkProps> = ({
  icon,
  title,
  isActive,
}) => {
  return (
    <S.Root color={isActive ? "active" : ""}>
      <Icon iconName={icon} />
      <h3>{title}</h3>
    </S.Root>
  );
};

export default ButttonLink;
