import { Expense } from "src/types";

export const ExpensesActionType = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
} as const;

export const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    description: "Eda",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Voda",
    amount: 29.99,
    date: new Date("2021-12-20"),
  },
  {
    id: "e3",
    description: "Metro",
    amount: 9.99,
    date: new Date("2021-12-21"),
  },
  {
    id: "e4",
    description: "Metro",
    amount: 9.99,
    date: new Date("2023-01-12"),
  },
  {
    id: "e5",
    description: "Metro",
    amount: 9.99,
    date: new Date("2023-01-13"),
  },
  {
    id: "e6",
    description: "Metro",
    amount: 9.99,
    date: new Date("2023-01-19"),
  },
];
