import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  ManageExpense: {
    type: "add" | "edit";
    expenseId?: string;
  };
  ExpensesOverview: undefined;
};

export type RootBottomTabParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

export type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

export type ManageExpenseScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "ManageExpense"
>;
