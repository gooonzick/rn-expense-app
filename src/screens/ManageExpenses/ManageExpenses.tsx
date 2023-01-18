import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useLayoutEffect, useMemo } from "react";
import { ManageExpenseScreenProp, RootStackParamList } from "src/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Theme } from "src/utils/theme";
import IconButton from "src/components/IconButton";
import MButton from "src/components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "ManageExpense">;

const ManageExpenses = ({ navigation, route }: Props) => {
  const {
    params: { expenseId, type },
  } = route;

  const isEditing = type === "edit";

  useLayoutEffect(() => {
    const title = !isEditing ? "Add Expense" : "Edit Expense";
    navigation.setOptions({ title });
  }, [type]);

  const onDelete = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onConfirm = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const deleteButton = useMemo(() => {
    if (isEditing) {
      return (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={Theme.colors.error500}
            size={24}
            onPress={onDelete}
          />
        </View>
      );
    } else {
      return null;
    }
  }, [isEditing, onDelete]);

  return (
    <View style={styles.screen}>
      <View style={styles.buttonsContainer}>
        <MButton onPress={onCancel} mode="flat" style={styles.button}>
          Cancel
        </MButton>
        <MButton style={styles.button} onPress={onConfirm}>
          {isEditing ? "Confirm" : "Add"}
        </MButton>
      </View>
      {deleteButton}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: Theme.colors.primary800,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 20,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: Theme.colors.primary200,
    alignItems: "center",
  },
});
