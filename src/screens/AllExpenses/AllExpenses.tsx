import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import ExpenseOutput from "src/components/ExpenseOutput/ExpenseOutput";
import { ExpenseContext } from "src/store/expenseContext";

const AllExpenses = () => {
  const { data } = useContext(ExpenseContext);

  return (
    <View style={styles.screen}>
      <ExpenseOutput expenses={data} period="Total" />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
