import React from "react";

import * as S from "./styles";
import { showCurrentDate } from "../../helpers/showCurrentDate";

interface IItemMounthProps {
  year: number;
  month: number;
}

const ItemMounth: React.FC<IItemMounthProps> = ({ year, month }) => {
  return (
    <S.Root to="/" state={{ year, month }} key={month}>
      <div className="icon">
        <h1>JL</h1>
      </div>
      <h5>{showCurrentDate(month - 1, year)}</h5>
    </S.Root>
  );
};

export default ItemMounth;
