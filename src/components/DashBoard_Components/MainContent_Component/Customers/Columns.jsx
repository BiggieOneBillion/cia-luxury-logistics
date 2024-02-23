import { RiDeleteBin6Line } from "react-icons/ri";
import EditDialog from "./EditDialog";

// const handleRowClick = (rowData) => {
//   // Your custom logic here, using rowData as needed
//   console.log("Row clicked:", rowData);
// };


export const columnData = [
  {
    id: "Ids",
    header: "S/No",
    accessorKey: "serialNumber",
  },
  {
    id: "First--Name",
    header: "First Name",
    accessorKey: "firstName",
    accessorFn: (row) => `${row.firstName.toUpperCase()}`,
  },
  {
    id: "Last--Name",
    header: "Last Name",
    accessorKey: "lastName",
    accessorFn: (row) => `${row.lastName.toUpperCase()}`,
  },
  {
    id: "Email--Address",
    header: "Email Address",
    accessorKey: "email",
  },
  {
    header: "Edit",
    accessorKey: "id",
    cell: ({ row }) => <EditDialog data={row.original} />,
  },
];
