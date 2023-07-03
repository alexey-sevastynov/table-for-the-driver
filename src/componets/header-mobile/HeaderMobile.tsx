import React from "react";

import * as S from "./styles";
import { Icon } from "../Icon";

interface IHeaderMobileProps {}

const HeaderMobile: React.FC<IHeaderMobileProps> = () => {
  return (
    <S.Root>
      <h1>Dashboard</h1>
      <Icon iconName="menu" />
    </S.Root>
  );
};

export default HeaderMobile;
