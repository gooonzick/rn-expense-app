import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { Theme } from "src/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { ManageExpenseScreenProp } from "src/types";

type Props = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

const ExpenseItem = ({ id, amount, date, description }: Props) => {
  const navigation = useNavigation<ManageExpenseScreenProp>();

  const onItemPress = useCallback(() => {
    navigation.navigate("ManageExpense", { expenseId: id, type: "edit" });
  }, []);

  return (
    <Pressable
      onPress={onItemPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toLocaleDateString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)} $</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Theme.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: Theme.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 4,
  },
  textBase: {
    color: Theme.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: Theme.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
