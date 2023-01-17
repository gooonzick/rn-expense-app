import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseOutput from "src/components/ExpenseOutput/ExpenseOutput";

const RecentExpenses = () => {
  return (
    <View style={styles.screen}>
      <ExpenseOutput period="Recent" />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
