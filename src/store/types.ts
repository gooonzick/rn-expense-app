import { Expense } from "src/types";
import { ExpensesActionType } from "./constants";

export type ExpenseAction =
  | {
      type: typeof ExpensesActionType.DELETE;
      payload: string;
    }
  | {
      type: typeof ExpensesActionType.ADD;
      payload: Expense;
    }
  | {
      type: typeof ExpensesActionType.EDIT;
      payload: {
        id: string;
        item: Partial<Expense>;
      };
    };
