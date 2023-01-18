import { createContext, useReducer } from "react";
import { Expense } from "src/types";

const ExpensesActionType = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
} as const;

type ExpenseAction =
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

type ExpenseState = Expense[];

const ExpenseContext = createContext({
  data: [] as Expense[],
  addExpense: (payload: Expense) => {},
  deleteExpense: (id: string) => {},
  editExpense: (id: string, payload: Partial<Expense>) => {},
});

type Props = {
  children: React.ReactNode;
};

const expensesReducer = (
  state: ExpenseState,
  action: ExpenseAction
): ExpenseState => {
  switch (action.type) {
    case "add":
      const { payload: newExpense } = action;

      return [...state, newExpense];
    case "edit":
      const { id, item } = action.payload;

      return state.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            ...item,
          };
        }
        return e;
      });
    case "delete":
      const { payload: itemToDete } = action;

      return state.filter((e) => e.id !== itemToDete);
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }: Props) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  return (
    <ExpenseContext.Provider
      value={{
        data: expensesState,
        addExpense: (payload) => dispatch({ type: "add", payload }),
        deleteExpense: (payload) => dispatch({ type: "delete", payload }),
        editExpense: (id, payload) =>
          dispatch({ type: "edit", payload: { id, item: payload } }),
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
