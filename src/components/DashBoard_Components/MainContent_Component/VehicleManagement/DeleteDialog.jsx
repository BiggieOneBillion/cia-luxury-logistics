import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import EditDialogForm from "./EditDialogForm";
import DeleteModal from "./DeleteModal";
import { MdOutlineDelete } from "react-icons/md";

const DeleteDialog = ({ data }) => {
  const [toggleModal, setToogleModal] = useState(false);

  const handleModalOpen = () => {
    setToogleModal(true);
  };

  const handleModalClose = () => {
    setToogleModal(false);
  };

  return (
    <div>
      <button className="text-xl text-black" onClick={handleModalOpen}>
        <MdOutlineDelete />
      </button>

      {toggleModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center">
          <div className="bg-white">
            <div className="p-10 space-y-5">
              <DeleteModal data={data} close={handleModalClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteDialog;
