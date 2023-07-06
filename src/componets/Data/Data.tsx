import React from "react";

import * as S from "./styles";

interface IDataProps {
  id: number;
  customer: string;
  route?: string;
  hours: number;
  km: number;
  income?: number;
  expenditure?: number;
  status: number;
  amountWorks: number;
}

const Data: React.FC<IDataProps> = ({
  id,
  customer,
  route,
  hours,
  km,
  income,
  expenditure,
  status,
  amountWorks,
}) => {
  return (
    <S.Root tabIndex={status} results={amountWorks} inlist={id}>
      <div className="id">
        <h5>{id}</h5>
      </div>
      <div className="customer">
        <h5>{customer}</h5>
      </div>
      <div className="route">
        <h5>{route}</h5>
      </div>
      <div className="hours">
        <h5>{hours}</h5>
      </div>
      <div className="km">
        <h5>{km}</h5>
      </div>
      <div className="income">
        <h5>{income}</h5>
      </div>
      <div className="expenditure">
        <h5>{expenditure}</h5>
      </div>
    </S.Root>
  );
};

export default Data;
