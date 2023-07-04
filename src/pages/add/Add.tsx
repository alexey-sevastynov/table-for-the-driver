import React from "react";

import * as S from "./styles";
import SidePanel from "../../componets/side-panel/SidePanel";
import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import Button from "../../componets/button/Button";

interface IAddProps {}

const Add: React.FC<IAddProps> = () => {
  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <h3>Form to fill:</h3>
          <div className="overflow">
            <form>
              <div className="items__input_date">
                <div className="flex">
                  <div>
                    <h5>date day *</h5>
                    <input type="text" placeholder="Day..." />
                  </div>
                  <div>
                    <h5>date month *</h5>
                    <input type="text" placeholder="Month..." />
                  </div>
                  <div>
                    <h5>date year *</h5>
                    <input type="text" placeholder="Year..." />
                  </div>
                </div>
                <Button label="current month" />
              </div>
              <div className="items__input_data">
                <div>
                  <h5>customer *</h5>
                  <input type="text" placeholder="select customer..." />
                </div>
                <div>
                  <h5>hour *</h5>
                  <input type="text" placeholder="hour..." />
                </div>
                <div>
                  <h5>km *</h5>
                  <input type="text" placeholder="km..." />
                </div>
              </div>
              <div className="items__input_route">
                <div>
                  <h5>route *</h5>
                  <input type="text" placeholder="write route..." />
                </div>
              </div>

              <div className="items__input_money">
                <div className="income">
                  <h5>income *</h5>
                  <input type="text" placeholder="income..." />
                </div>
                <div className="expenditure">
                  <h5>expenditure *</h5>
                  <input type="text" placeholder="expenditure..." />
                </div>
              </div>

              <div className="items__input_status">
                <div>
                  <h5>
                    select status * ( green color: paid ; yellow color: unknown
                    ; red color: debt; gray color: other money )
                  </h5>
                  <input className="paid" type="checkbox" />
                  <input className="unknown" type="checkbox" />
                  <input className="debt" type="checkbox" />
                  <input className="other" type="checkbox" />
                </div>
              </div>
              <div className="btns">
                <Button label="back" isUnActive />
                <Button label="add item" />
              </div>
            </form>
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Add;
