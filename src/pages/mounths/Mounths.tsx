import React from "react";

import * as S from "./styles";
import SidePanel from "../../componets/side-panel/SidePanel";

import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import ItemMounth from "../../componets/item-mounth/ItemMounth";

interface IMounthsProps {}

const Mounths: React.FC<IMounthsProps> = () => {
  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <h3>My working months</h3>
          <div className="overflow">
            <h4>Year 2023: </h4>
            <div className="flex">
              <ItemMounth year="23" month="jule" />
              <ItemMounth year="23" month="august" />
            </div>
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Mounths;
