import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditDialog from "./EditDialog";
import { v3, v4 } from "uuid";
import DeleteDialog from "./DeleteDialog";

// const handleRowClick = (rowData) => {
//   // Your custom logic here, using rowData as needed
//   console.log("Row clicked:", rowData);
// };

export const columnData = [
  {
    id: "Brand--Name",
    header: "Brand Name",
    accessorKey: "brandName",
    // accessorFn: (row) => `${row.firstName.toUpperCase()}`,
  },
  {
    id: "Model--Name",
    header: "Model Name",
    accessorKey: "modelName",
    // accessorFn: (row) => `${row.lastName.toUpperCase()}`,
  },
  {
    id: "Seat--Capacity",
    header: "Seat Capacity",
    accessorKey: "seatCapacity",
  },
  {
    id: "Fuel--Capacity",
    header: "Fuel Capacity",
    accessorKey: "fuelCapacity",
  },
  {
    id: "Drive--Train",
    header: "Drive Train",
    accessorKey: "driveTrain",
  },
  {
    id: "Amount",
    header: "Amount",
    accessorKey: "amount",
  },
  {
    id: "Category",
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Edit",
    accessorKey: "id",
    cell: ({ row }) => <EditDialog data={row.original} key={v4()} />,
  },
  {
    header: "Del",
    accessorKey: "id",
    cell: ({ row }) => <DeleteDialog data={row.original} key={v4()} />,
  },
];
