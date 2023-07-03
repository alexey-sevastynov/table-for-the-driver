import React from "react";

import * as S from "./styles";
import { tableHadeNames } from "../../constants";
import Data from "../Data/Data";

const array = [
  {
    id: 1,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 1,
  },
  {
    id: 2,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 2,
  },
  {
    id: 3,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 3,
  },
  {
    id: 4,
    customer: "perrezd",
    route: "",
    hours: 2,
    km: 22,
    income: 700,
    status: 4,
  },
];

interface IItemMainProps {}

const ItemMain: React.FC<IItemMainProps> = () => {
  return (
    <S.Root>
      <S.Header>
        <h4>1.06.23</h4>
        <h5>Saturday</h5>
      </S.Header>

      <S.TableHead>
        {tableHadeNames.map((name) => (
          <div key={name} className={name}>
            <h4>{name}</h4>
          </div>
        ))}
      </S.TableHead>

      {array.map((item) => {
        const amountWorks = array.length;

        return (
          <Data
            key={item.id}
            id={item.id}
            customer={item.customer}
            route={item.route}
            hours={item.hours}
            km={item.km}
            income={item.income}
            status={item.status}
            amountWorks={amountWorks}
          />
        );
      })}
    </S.Root>
  );
};

export default ItemMain;
