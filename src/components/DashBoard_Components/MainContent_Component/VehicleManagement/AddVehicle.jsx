import React, { useState } from "react";
import AddVehicleForm from "./AddVehicleForm";

const AddVehicle = () => {
  const [toggleModal, setToogleModal] = useState(false);

  const handleModalOpen = () => {
    setToogleModal(true);
  };

  const handleModalClose = () => {
    setToogleModal(false);
  };

  return (
    <div>
      <button
        className="text-sm rounded-sm active:scale-95 hover:scale-[0.98] transition-transform duration-300 ease-in-out px-4 py-1 text-white bg-black"
        onClick={handleModalOpen}
      >
        Add Vehicle
      </button>

      {toggleModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center">
          <div className="bg-white">
            <div className="p-10 space-y-5">
              <h2 className="font-semibold text-xl text-black">Add Vehicle</h2>
              <AddVehicleForm close={handleModalClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVehicle;
