import React from "react";

import * as S from "./styles";

interface IItemMounthProps {
  year: string;
  month: string;
}

const ItemMounth: React.FC<IItemMounthProps> = ({ year, month }) => {
  return (
    <S.Root>
      <div className="icon">
        <h1>JL</h1>
      </div>
      <h5>{`${month}, ${year}`}</h5>
    </S.Root>
  );
};

export default ItemMounth;
