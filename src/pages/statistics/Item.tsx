import React from "react";
import { IWork } from "../../redux/slices/worksSlice";
import { showTextStatus } from "../../helpers/showTextStatus";

type ItemProps = {
  day: number;
  month: number;
  year: number;
  items: IWork[];
};

const Item: React.FC<ItemProps> = ({ day, month, year, items }) => {
  const showCurrentItem = items
    .filter(
      (item: IWork) =>
        item.day === day && item.month === month && item.year === year
    )
    .sort((a: IWork, b: IWork) => (a.id > b.id ? 1 : -1))
    .map((item: IWork) => {
      return (
        <div key={item._id} className="statistics__item">
          <p className="statistics__item-id">{item.id}</p>
          <p className="statistics__item-customer">{item.customer}</p>
          <div className="statistics__item-hours">
            <p>{item.hours}</p>
            <p>год,</p>
          </div>
          <div className="statistics__item-km">
            <p>{item.km}</p>
            <p>км,</p>
          </div>
          <div className="statistics__item-income">
            <p>
              {item.status === 1 || item.status === 4
                ? `+${item.income}`
                : item.income}
            </p>
            <p>грн,</p>
          </div>

          <p className="statistics__item-status">
            {showTextStatus(item.status || 0)}
          </p>
        </div>
      );
    });

  return (
    <>
      <p className="statistics__date">{`${day}.${month}.${year}:`}</p>
      {showCurrentItem}
    </>
  );
};

export default Item;
