import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpenseOutput from "src/components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "src/store/expenseContext";

const RecentExpenses = () => {
  const { data } = useContext(ExpenseContext);

  const recentExpenses = data?.filter(({ date }) => {
    const today = new Date();
    const date7DaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );

    return date > date7DaysAgo;
  });

  return (
    <View style={styles.screen}>
      <ExpenseOutput expenses={recentExpenses} period="Recent" />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
