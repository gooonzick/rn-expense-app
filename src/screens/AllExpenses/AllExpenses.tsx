import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ExpenseOutput from "src/components/ExpenseOutput/ExpenseOutput";

const AllExpenses = () => {
  return (
    <View style={styles.screen}>
      <ExpenseOutput period="Total" />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
