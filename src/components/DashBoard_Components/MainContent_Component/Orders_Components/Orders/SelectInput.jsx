
const SelectInput = () => {
    const carData = [
      {
        vehicleType: "Suv",
        options: ["Toyota Prado", "Toyota Landcruiser", "Lexus 570"],
      },
      {
        vehicleType: "Sedan",
        options: ["Toyota Corolla", "Toyota Camry", "Benz c300"],
      },
      {
        vehicleType: "Bus",
        options: ["Toyota Coaster", "Toyota Hiace", "Nissian Civilian"],
      },
    ];

    const [infoData, setInfoData] = useState({ ...data });

    console.log(infoData);

    const allOptions = [
      ...carData[0].options,
      ...carData[1].options,
      ...carData[2].options,
    ];
    // console.log(allOptions);
    const [vehicleSelect, setVehicleSelected] = useState("Suv");
    return (
      <div className="space-y-4">
        <h2>Cars Selected</h2>
        <div className="space-y-2">
          <div className="flex justify-start items-center gap-4">
            {infoData.carsSelected.map((cars) => (
              <p key={v4()} className="px-2 py-1 border relative">
                <span>{cars}</span>
                <span className="text-base bg-white border flex justify-center hover:scale-[.96] active:scale-[.93] cursor-pointer transition-transform duration-300 ease-in-out items-center rounded-full size-5 absolute top-[-50%] right-[-8px]">
                  x
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-center gap-4">
          {carData.map((car) => (
            <button
              key={v4()}
              className="border bg-white text-sm uppercase px-2"
              onClick={() => setVehicleSelected(car.vehicleType)}
            >
              {car.vehicleType}
            </button>
          ))}
        </div>
        <div className="border p-1 w-fit rounded-md">
          <select>
            {vehicleSelect == "Suv" &&
              carData[0].options.map((opt) => (
                <option key={v4()} value={opt}>
                  {opt}
                </option>
              ))}
            {vehicleSelect == "Sedan" &&
              carData[1].options.map((opt) => (
                <option key={v4()} value={opt}>
                  {opt}
                </option>
              ))}
            {vehicleSelect == "Bus" &&
              carData[2].options.map((opt) => (
                <option key={v4()} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        </div>
        <div></div>
      </div>
    );
  };