export const filterDateOptions = [
  { id: 1, name: "date", value: "week", checked: "", label: "Last Week" },
  { id: 2, name: "date", value: "month", checked: "", label: "Last Month" },
  { id: 3, name: "date", value: "year", checked: "", label: "Last Year" },
  {
    id: 4,
    name: "date",
    value: "all",
    checked: "defaultChecked",
    label: "All",
  },
];

export const filterStatusOptions = [
  { id: 1, name: "status", value: false, checked: "", label: "Failure" },
  { id: 2, name: "status", value: true, checked: "", label: "Success" },
  {
    id: 3,
    name: "status",
    value: "all",
    checked: "defaultChecked",
    label: "All",
  },
];
