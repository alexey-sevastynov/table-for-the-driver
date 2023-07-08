// console.log(Math.max(1, 4, 2, 1)); // 4

// const obj = [
//   { name: "one", id: 1 },
//   { name: "two", id: 5 },
//   { name: "three", id: 3 },
// ];

// console.log(Math.max(...obj.map((item) => item.id)));

const obj_1 = [
  { year: "2023", month: 7, day: 5, id: 1 },
  { year: "2023", month: 7, day: 5, id: 2 },
  { year: "2023", month: 7, day: 5, id: 3 },
  { year: "2023", month: 8, day: 5, id: 1 },
  { year: "2023", month: 5, day: 6, id: 1 },
  { year: "2024", month: 6, day: 6, id: 1 },
  { year: "2024", month: 6, day: 4, id: 1 },
  { year: "2024", month: 1, day: 3, id: 1 },
  { year: "2023", month: 3, day: 6, id: 3 },
  { year: "2025", month: 2, day: 7, id: 1 },
  { year: "2025", month: 2, day: 7, id: 2 },
  { year: "2025", month: 9, day: 7, id: 3 },
  { year: "2023", month: 7, day: 7, id: 2 },
];

// uniq key "year"
// month NOT repeat

// the result must be such (out in console)
// [
//   { year: 2023, month: [7, 8, 5, 3] },
//   { year: 2024, month: [6, 1] },
//   { year: 2025, month: [2, 9] },
// ];

const arrayAllYears = obj_1.map((item, id) => item.year);
console.log(arrayAllYears); // ['2023', '2023', '2023','2023', '2023', '2024','2024', '2024', '2023','2025', '2025', '2025','2023']

const arrayUniqYear = arrayAllYears.filter(
  (el, id) => arrayAllYears.indexOf(el) === id
);
console.log(arrayUniqYear); // [ '2023', '2024', '2025' ]

const newObj = arrayUniqYear.map((year) =>
  obj_1.filter((item) => item.year === year)
);
console.log(newObj); // =>
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

const arrayMonths = arrayUniqYear.map((year, id) =>
  newObj[id].map((item) => item.month)
);
console.log(arrayMonths); // =>
// [
//   [7, 7, 7, 8, 5, 3, 7],
//   [6, 6, 1],
//   [2, 2, 9],
// ];

const resultObj = arrayUniqYear
  .map((year, idYear) =>
    arrayMonths.map((month, idMonth) => {
      if (idYear === idMonth) {
        return { year, month };
      }
    })
  )
  .flat()
  .filter((item) => item !== undefined);

console.log(resultObj); //=>
// [
//   {
//     year: '2023',
//     month: [
//       7, 7, 7, 8,
//       5, 3, 7
//     ]
//   },
//   { year: '2024', month: [ 6, 6, 1 ] },
//   { year: '2025', month: [ 2, 2, 9 ] }
// ]

//______________________________________________
// console.log(
//   resultObj.map((item) =>
//     item.month.filter((el, id) => {
//       console.log(":item.month", item.month);
//       console.log("id", id);
//       console.log("el:", el);
//       return item.month.indexOf(id) === el;
//     })
//   )
// );
