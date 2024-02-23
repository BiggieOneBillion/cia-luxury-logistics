// const date = new Date('1/28/2024');
// const formattedDate = date.toISOString().split('T')[0];
// console.log(formattedDate);

const date = new Date("1/28/2024");
const offset = date.getTimezoneOffset() * 60000; // Offset in milliseconds
const localDate = new Date(date.getTime() - offset);
const formattedDate = localDate.toISOString().split("T")[0];

console.log(formattedDate);

const check = new Date("2024-01-28");

console.log(check.toISOString().split("T")[0]);

function handleChangeDateForm(dateString) {
  const date = new Date(dateString);
  const offset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() - offset);
  const formattedDate = localDate.toISOString().split("T")[0];
  return formattedDate;
}

const result = handleChangeDateForm("2024-02-22T23:00:00.000Z");
console.log(result);

("2024-01-30T00:00:00.000Z");
