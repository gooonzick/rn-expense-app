import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { Expense, ProfileScreenNavigationProp } from "src/types";
import ExpenseItem from "../ExpenseItem";
import { useNavigation } from "@react-navigation/native";

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
