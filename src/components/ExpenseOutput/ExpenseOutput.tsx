import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesList from "../ExpensesList";
import ExpensesSummary from "../ExpensesSummary/";
import { Expense } from "src/types";
import { Theme } from "src/utils/theme";

type Props = {
  // expenses: Expense[];
  period: string;
};

const DUMMY_EXPENSES: Expense[] = [
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
];

const ExpenseOutput = ({ period }: Props) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Theme.colors.primary700,
  },
});
