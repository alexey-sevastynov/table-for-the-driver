import React from "react";

import * as S from "./styles";
import { showCurrentDate } from "../../helpers/showCurrentDate";
import { showTwoCharMonth } from "../../helpers/showTwoCharMonth";
import { showNameMonth } from "../../helpers/showNameMonth";

interface IItemMounthProps {
  year: number;
  month: number;
}

const ItemMounth: React.FC<IItemMounthProps> = ({ year, month }) => {
  console.log(month);
  return (
    <S.Root to="/" state={{ year, month }} key={month}>
      <div className={`icon__${month}`}>
        <h1>{showTwoCharMonth(showNameMonth(month - 1))}</h1>
      </div>
      <h5>{showCurrentDate(month - 1, year)}</h5>
    </S.Root>
  );
};

export default ItemMounth;
