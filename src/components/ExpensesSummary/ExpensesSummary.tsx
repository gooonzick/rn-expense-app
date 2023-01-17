import { StyleSheet, Text, View } from "react-native";
import React, { useMemo } from "react";
import { Expense } from "src/types";
import { Theme } from "src/utils/theme";

type Props = {
  period: string;
  expenses: Expense[];
};

const ExpensesSummary = ({ period, expenses }: Props) => {
  const expensesSum = useMemo(() => {
    return expenses
      .reduce((sum, expense) => (sum + expense.amount) as number, 0)
      .toFixed(2);
  }, [expenses]);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>{expensesSum} $</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Theme.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: Theme.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Theme.colors.primary500,
  },
});
