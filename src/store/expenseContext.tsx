import { createContext, useMemo, useReducer } from "react";
import { Expense } from "src/types";
import { DUMMY_EXPENSES } from "./constants";
import { ExpenseAction } from "./types";

export const ExpenseContext = createContext({
  data: DUMMY_EXPENSES,
  addExpense: (payload: Expense) => {},
  deleteExpense: (id: string) => {},
  editExpense: (id: string, payload: Partial<Expense>) => {},
});

type Props = {
  children: React.ReactNode;
};

const expensesReducer = (
  state: Expense[],
  action: ExpenseAction
): Expense[] => {
  switch (action.type) {
    case "add":
      const { payload: newExpense } = action;

      const newId = `e${state.length}`;

      return [...state, { ...newExpense, id: newId }];
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

export const ExpenseContextProvider = ({ children }: Props) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const contextValue = useMemo(() => {
    return {
      data: expensesState,
      addExpense: (payload: Expense) => dispatch({ type: "add", payload }),
      deleteExpense: (payload: string) => dispatch({ type: "delete", payload }),
      editExpense: (id: string, payload: Expense) =>
        dispatch({ type: "edit", payload: { id, item: payload } }),
    };
  }, [expensesState, dispatch]);

  return (
    <ExpenseContext.Provider value={contextValue}>
      {children}
    </ExpenseContext.Provider>
  );
};
