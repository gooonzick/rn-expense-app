import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import React from "react";
import { Expense } from "src/types";
import ExpenseItem from "../ExpenseItem";

type Props = {
  expenses: Expense[];
};

const renderExpenseItem = ({
  item: { id, amount, date, description },
}: ListRenderItemInfo<Expense>) => {
  return (
    <ExpenseItem
      id={id}
      amount={amount}
      date={date}
      description={description}
    />
  );
};

const ExpensesList = ({ expenses }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
