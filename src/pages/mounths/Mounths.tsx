import React from "react";

import * as S from "./styles";
import SidePanel from "../../componets/side-panel/SidePanel";

import HeaderMobile from "../../componets/header-mobile/HeaderMobile";
import ItemMounth from "../../componets/item-mounth/ItemMounth";
import { useAppSelector } from "../../redux/hook";
import { IWork } from "../../redux/slices/worksSlice";

type NewItemsTypes = {
  year: number;
  month: number[];
};

interface IMounthsProps {}

const Mounths: React.FC<IMounthsProps> = () => {
  const { items } = useAppSelector((props) => props.works.jobs);

  //________________________________
  const getListAllYears = items.map((item: IWork) => item.year); // [2023, 2023, 2023, 2023, 2023, 2024, 2024, 2024, 2023]

  const getListUniqYears = getListAllYears.filter(
    (el, id) => getListAllYears.indexOf(el) === id
  ); // NO repeat list! [ '2023', '2024', '2025' ]

  const newObjUniqArrays = getListUniqYears.map((year) =>
    items.filter((item: IWork) => item.year === year)
  ); // out =>
  // [
  //   [
  //     { year: '2023', month: 7, day: 5, id: 1 },
  //     { year: '2023', month: 7, day: 5, id: 2 },
  //     { year: '2023', month: 7, day: 5, id: 3 },
  //     { year: '2023', month: 8, day: 5, id: 1 },
  //     { year: '2023', month: 5, day: 6, id: 1 },
  //     { year: '2023', month: 3, day: 6, id: 3 },
  //     { year: '2023', month: 7, day: 7, id: 2 }
  //   ],
  //   [
  //     { year: '2024', month: 6, day: 6, id: 1 },
  //     { year: '2024', month: 6, day: 4, id: 1 },
  //     { year: '2024', month: 1, day: 3, id: 1 }
  //   ],
  //   [
  //     { year: '2025', month: 2, day: 7, id: 1 },
  //     { year: '2025', month: 2, day: 7, id: 2 },
  //     { year: '2025', month: 9, day: 7, id: 3 }
  //   ]
  // ]

  const getArrMonths = getListUniqYears.map((year, id) =>
    newObjUniqArrays[id].map((item: NewItemsTypes) => item.month)
  ); // out =>
  // [
  //   [7, 7, 7, 8, 5, 3, 7],
  //   [6, 6, 1],
  //   [2, 2, 9],
  // ];

  const newItems = getListUniqYears
    .map((year, idYear) =>
      getArrMonths.map((month, idMonth) => {
        if (idYear === idMonth) {
          return { year, month };
        }
      })
    )
    .flat()
    .filter((item) => item !== undefined);

  return (
    <S.Root>
      <SidePanel />
      <HeaderMobile />
      <div className="colum_2">
        <h2>Hello, world!</h2>
        <main>
          <h3>My working months</h3>
          <div className="overflow">
            {newItems.map((item: NewItemsTypes) => {
              const showMounths = item.month
                ?.filter((el, id) => item?.month?.indexOf(el) === id)
                .sort((a, b) => (a > b ? 1 : -1))
                .map((uniqMonth) => (
                  <ItemMounth year={item.year} month={uniqMonth} />
                ));

              return (
                <>
                  {item ? (
                    <>
                      <h4>Year {item.year}:</h4>
                      <div className="flex">{showMounths}</div>
                    </>
                  ) : (
                    <h4>NOT WORKING!</h4>
                  )}
                </>
              );
            })}
          </div>
        </main>
      </div>
    </S.Root>
  );
};

export default Mounths;
