import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";

// const handleRowClick = (rowData) => {
//   // Your custom logic here, using rowData as needed
//   console.log("Row clicked:", rowData);
// };

export const columnData = [
  // {
  //   id: "Ids",
  //   header: "ID",
  //   accessorKey: "_id",
  // },
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
  // {
  //   id: "Email--Address",
  //   header: "Email Address",
  //   accessorKey: "email",
  // },
  {
    id: "Pick-Up--Location",
    header: "Pick-Up Location",
    accessorKey: "pickupLocation",
  },
  {
    id: "Drop-off--Location",
    header: "Drop-off Location",
    accessorKey: "dropoffLocation",
  },
  {
    id: "Start--Date",
    header: "Start Date",
    accessorKey: "startDate",
  },
  {
    id: "End--Date",
    header: "End Date",
    accessorKey: "endDate",
    direction: "desc",
  },
  {
    id: "days",
    header: "Days",
    // accessorKey: "amount",
    accessorFn: (row) => {
      row.startDate.replaceAll("/", "-");
      row.endDate.replaceAll("/", "-");
      // Create two Date objects representing the start and end dates
      const startDate = new Date(row.startDate.replaceAll("/", "-"));
      const endDate = new Date(row.endDate.replaceAll("/", "-"));

      // Calculate the difference between the two dates in milliseconds
      const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

      // Convert milliseconds to days
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

      return `${differenceInDays} day(s)`;
    },
  },
  {
    id: "Car--Selected",
    header: "Car Selected",
    accessorKey: "carsSelected",
    cell: ({ row }) => (
      <div  className="flex flex-wrap gap-1">
        {row.original.carsSelected.map((car) => (
          <span key={v4()} className=" p-1 border uppercase text-xs">{car.vehicle}</span>
        ))}
      </div>
    ),
  },
  {
    id: "amount",
    header: "Amount",
    // accessorKey: "amount",
    accessorFn: (row) => {
      row.startDate.replaceAll("/", "-");
      row.endDate.replaceAll("/", "-");
      // Create two Date objects representing the start and end dates
      const startDate = new Date(row.startDate.replaceAll("/", "-"));
      const endDate = new Date(row.endDate.replaceAll("/", "-"));

      // Calculate the difference between the two dates in milliseconds
      const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

      // Convert milliseconds to days
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

      return `#${differenceInDays * 120000}`;
    },
  },
  {
    id: "payment-status",
    header: "Payment status",
    accessorKey: "paymentStatus",
    cell: ({ row }) => (
      <span
        key={v4()}
        className={`px-3 rounded-lg py-1 text-white font-medium ${
          row.original.paymentStatus == false ? "bg-red-800" : "bg-green-800"
        }`}
      >
        {`${row.original.paymentStatus}`}
      </span>
    ),
  },
];
