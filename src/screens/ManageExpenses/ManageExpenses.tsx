import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ManageExpenseScreenProp, RootStackParamList } from "src/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "ManageExpense">;

const ManageExpenses = ({ navigation, route }: Props) => {
  const {
    params: { expenseId },
  } = route;
  return (
    <View>
      <Text>ManageExpenses {expenseId}</Text>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({});
