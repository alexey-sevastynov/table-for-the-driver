import React from "react";
import * as S from "./styles";

import SidePanel from "../../componets/side-panel/SidePanel";
import { Icon } from "../../componets/Icon";
import ItemMain from "../../componets/item-main/ItemMain";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <S.Root>
      <SidePanel />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <div className="header">
            <h3>Jule, 2023 year</h3>
            <div className="header__input">
              <input type="text" placeholder="find data..." />
              <Icon iconName="find" />
            </div>
          </div>
          <div className="overflow">
            <ItemMain />
            <ItemMain />
            <ItemMain />
            <ItemMain />
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Home;
