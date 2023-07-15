import React from "react";

import * as S from "./styles";
import Button from "../button/Button";

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
    <S.Root inlist={status}>
      <div className="head">
        <div className="col__id">
          <p>{`Delivery № ${id}`}</p>
        </div>
        <div className="col__customer">
          <p>customer: {customer}</p>
        </div>
      </div>

      {route && (
        <div className="col__route">
          <p>{`Route: ${route}`}</p>
        </div>
      )}
      <div className="col__property">
        <p>hours:</p>
        <p>km:</p>
        <p>income:</p>
        {expenditure && <p>expenditure:</p>}
        {description && <p>description:</p>}
      </div>
      <div className="col__value">
        <p>{hours ? hours : 0}</p>
        <p>{km ? km : 0}</p>
        <p>{status === 1 || status === 4 ? `+${income}` : income}</p>
        {expenditure && <p>{expenditure ? expenditure : "-"}</p>}
        {description && <p>{description ? description : "-"}</p>}
      </div>
    </S.Root>
  );
};

export default DataDay;
