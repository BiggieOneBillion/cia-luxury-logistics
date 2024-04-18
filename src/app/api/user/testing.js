

const nums = [2,3,4,5,6,7,8]

const result = nums.filter(el => el==2 || el == 4);

console.log(result);

const userInfo = {
    
    firstName: 'reynold',
    lastName: 'duke',
    email: 'chukwuchinwendu94@gmail.com',
    pickupLocation: 'peter-odili',
    dropoffLocation: 'woji',
    startDate: '2024-04-07',
    endDate: '2024-04-19',
    carsSelected: [
      { vehicle: 'Toyota Landcruiser', quantity: 2 },
      { vehicle: 'TOYOTA PRADO', quantity: 5 },
      { vehicle: 'Honda Accord', quantity: 5 }
    ],
    paymentStatus: false,
    phoneNumber: 7038677709,
}

const vehicleInfo = [
    {
      brandName: 'Toyota',
      modelName: 'Landcruiser',
      seatCapacity: 8,
      fuelCapacity: 70,
      driveTrain: '4X4',
      amount: 50000,
      category: 'suv',
      __v: 0
    },
    {
      brandName: 'Toyota',
      modelName: 'Prado',
      seatCapacity: 6,
      fuelCapacity: 70,
      driveTrain: '4X4',
      amount: 60000,
      category: 'car',
      __v: 0
    },
    {
      brandName: 'Honda',
      modelName: 'Accord',
      seatCapacity: 4,
      fuelCapacity: 50,
      driveTrain: '2X2',
      amount: 70000,
      category: 'car',
      __v: 0
    }
]


 let cost = [];

 for (let i = 0; i < userInfo.carsSelected.length; i++) {
    let result = vehicleInfo.filter(el => userInfo.carsSelected[i].vehicle.toUpperCase().includes(el.modelName.toUpperCase()))
    console.log(result);
    if (result.length > 0) {
        result = result.map(el => el.amount * userInfo.carsSelected[i].quantity)
        cost = [...result, ...cost]
    }
 }

 console.log(cost);

 const totalCost = cost.reduce((prev, acc) => prev + acc, 0);

 console.log(totalCost);







