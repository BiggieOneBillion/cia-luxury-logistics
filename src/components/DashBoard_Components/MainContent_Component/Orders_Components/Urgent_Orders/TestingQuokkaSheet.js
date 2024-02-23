const arrData = [
  {
    _id: "65d45a1f4e79ce40697713bc",
    firstName: "Samuel",
    lastName: "Oyebuchi",
    email: "samdadacunt@gmail.com",
    pickupLocation: "igbo-etche",
    dropoffLocation: "oko polytechnic",
    startDate: "2/21/2024",
    endDate: "2/23/2024",
    carsSelected: ["TOYOTA PRADO", "TOYOTA LANDCRUISER"],
    __v: 0,
  },
  {
    _id: "65c0cdafa984a9129a02495a",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu94opui@gmail.com",
    pickupLocation: "ada-geoge",
    dropoffLocation: "location ",
    startDate: "2/27/2024",
    endDate: "3/2/2024",
    carsSelected: ["TOYOTA LANDCRUISER", "TOYOTA PRADO"],
    __v: 0,
  },
  {
    _id: "65c0ccbc4a2babd69912d8ce",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu9mnh4@gmail.com",
    pickupLocation: "RUPOKWU",
    dropoffLocation: "ABIA STATE",
    startDate: "2/20/2024",
    endDate: "2/29/2024",
    carsSelected: ["TOYOTA PRADO", "LEXUS 570"],
    __v: 0,
  },
  {
    _id: "65c0cbf72765a37bf4bc3bd3",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwumap@gmail.com",
    pickupLocation: "ada",
    dropoffLocation: "locationhide",
    startDate: "2/13/2024",
    endDate: "2/27/2024",
    carsSelected: ["TOYOTA LANDCRUISER", "TOYOTA PRADO"],
    __v: 0,
  },
  {
    _id: "65c0caafda9486e8fa1f455b",
    firstName: "JOHN",
    lastName: "CHUKWU",
    email: "rchukwu0034@gmail.com",
    pickupLocation: "ada-geoge ",
    dropoffLocation: "police post",
    startDate: "2/20/2024",
    endDate: "2/29/2024",
    carsSelected: ["TOYOTA LANDCRUISER", "LEXUS 570"],
    __v: 0,
  },
  {
    _id: "65c0ca4eda9486e8fa1f4558",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu9004@gmail.com",
    pickupLocation: "ada-geoge",
    dropoffLocation: "location ",
    startDate: "2/13/2024",
    endDate: "2/22/2024",
    carsSelected: ["TOYOTA PRADO", "TOYOTA LANDCRUISER"],
    __v: 0,
  },
  {
    _id: "65b4bedb549c7555bd19b24f",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu9455@gmail.com",
    pickupLocation: "RUPOKWU",
    dropoffLocation: "police post",
    startDate: "1/28/2024",
    endDate: "1/30/2024",
    carsSelected: ["TOYOTA LANDCRUISER", "TOYOTA PRADO"],
    __v: 0,
  },
  {
    _id: "65b4b3e32b582f9f2db2b312",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu774@gmail.com",
    pickupLocation: "RUPOKWU",
    dropoffLocation: "location ",
    startDate: "1/28/2024",
    endDate: "1/30/2024",
    carsSelected: ["TOYOTA PRADO", "LEXUS 570"],
    __v: 0,
  },
  {
    _id: "65b4ae0fc68e69ef33d1789f",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu9784@gmail.com",
    pickupLocation: "RUPOKWU",
    dropoffLocation: "police post",
    startDate: "1/28/2024",
    endDate: "1/30/2024",
    carsSelected: ["TOYOTA PRADO", "TOYOTA LANDCRUISER"],
    __v: 0,
  },
  {
    _id: "65b485f99f0524e562424019",
    firstName: "SAMUEL",
    lastName: "CHUKWU",
    email: "rchukwu9400@gmail.com",
    pickupLocation: "RUPOKWU",
    dropoffLocation: "locationhide",
    startDate: "1/29/2024",
    endDate: "1/31/2024",
    carsSelected: ["TOYOTA PRADO", "TOYOTA LANDCRUISER"],
    __v: 0,
  },
  {
    _id: "65b484c1c6fe83b3da6cef75",
    firstName: "OSITA",
    lastName: "CHUKWU",
    email: "rchukwu00@gmail.com",
    pickupLocation: "RUPOKWU",
    dropoffLocation: "ABIA STATE",
    startDate: "1/28/2024",
    endDate: "1/30/2024",
    carsSelected: ["TOYOTA PRADO", "TOYOTA COROLLA"],
    __v: 0,
  },
  {
    _id: "65b3e8dd9a07e4b42fb4445b",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu90@gmail.com",
    pickupLocation: "ada-geoge ",
    dropoffLocation: "locationhide",
    startDate: "1/28/2024",
    endDate: "1/30/2024",
    carsSelected: ["LEXUS 570", "TOYOTA LANDCRUISER"],
    __v: 0,
  },
  {
    _id: "65b3df0c96dd5dd59c0b4145",
    firstName: "CHINWENDU",
    lastName: "CHUKWU",
    email: "rchukwu96@gmail.com",
    pickupLocation: "ada-geoge ",
    dropoffLocation: "locationhide",
    startDate: "1/28/2024",
    endDate: "1/30/2024",
    carsSelected: ["TOYOTA LANDCRUISER", "LEXUS 570"],
    __v: 0,
  },
];

const dates = [
  new Date("2023-05-29"),
  new Date("2023-06-15"),
  new Date("2023-04-20"),
  new Date("2023-04-12"),
  new Date("2023-04-12"),
  new Date("2023-04-12"),
  new Date("2023-10-12"),
  // Add more dates as needed
];
//   console.log(dates);
// Get the current date
const currentDate = new Date();

// Custom comparison function to sort dates in ascending order relative to the current date
arrData.sort((a, b) => {
  // console.log(new Date(a.startDate));
  // Calculate the difference in milliseconds between the two dates and the current date
  const diffA = new Date(a.startDate) - currentDate;
  const diffB = new Date(b.startDate) - currentDate;

  // Return the difference in milliseconds
  // console.log(diffB - diffA);
  return diffB - diffA;
});

console.log(arrData);

console.log(new Date("2/27/2024") - new Date());
console.log(new Date("2/20/2024") - new Date());
console.log(new Date("2/13/2024") - new Date());
console.log(new Date("1/29/2024") - new Date());

const newArr = [557343124, 457343124, -47490552, -652204302, -1948319539];

const result = newArr.sort((a, b) => b - a).filter((el) => el > 0);

console.log(newArr);
console.log(result);




