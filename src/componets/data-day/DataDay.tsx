import React from "react";

import * as S from "./styles";

type IDataDayProps = {
  id: number;
  customer: string;
  route?: string;
  hours: number;
  km: number;
  income?: number;
  expenditure?: number;
  description?: string;
  status: number;
};

const DataDay: React.FC<IDataDayProps> = ({
  id,
  status,
  customer,
  route,
  hours,
  km,
  income,
  expenditure,
  description,
}) => {
  return (
    <S.Root tabIndex={status}>
      <div className="col__id">
        <p>{id}</p>
      </div>
      <div className="col__customer">
        <p>{customer}</p>
      </div>
      <div className="col__route">
        <p>{route}</p>
      </div>
      <div className="col__property">
        <p>hours:</p>
        <p>km:</p>
        <p>income:</p>
        <p>expenditure:</p>
        <p>description:</p>
      </div>
      <div className="col__value">
        <p>{hours ? hours : "-"}</p>
        <p>{km ? km : "-"}</p>
        <p>{income ? income : "-"}</p>
        <p>{expenditure ? expenditure : "-"}</p>
        <p>{description ? description : "-"}</p>
      </div>
    </S.Root>
  );
};

export default DataDay;
