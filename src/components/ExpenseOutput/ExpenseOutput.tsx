import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "../ExpensesList";
import ExpensesSummary from "../ExpensesSummary/";
import { Expense } from "src/types";
import { Theme } from "src/utils/theme";

type Props = {
  expenses: Expense[];
  period: string;
  fallbackText?: string;
};

const ExpenseOutput = ({
  period,
  expenses,
  fallbackText = "No data",
}: Props) => {
  const content = useMemo(() => {
    if (expenses.length === 0) {
      return <Text style={styles.infoText}>{fallbackText}</Text>;
    } else {
      return <ExpensesList expenses={expenses} />;
    }
  }, [expenses, fallbackText]);

  return (
    <View style={styles.container}>
      <ExpensesSummary period={period} expenses={expenses} />
      {content}
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
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
