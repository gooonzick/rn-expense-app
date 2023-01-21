import { StyleSheet, View } from "react-native";
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
} from "react";
import { Expense, RootStackParamList } from "src/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Theme } from "src/utils/theme";
import IconButton from "src/components/IconButton";
import { ExpenseContext } from "src/store/expenseContext";
import ExpenseForm from "src/components/ExpenseForm";

type Props = NativeStackScreenProps<RootStackParamList, "ManageExpense">;

const ManageExpenses = ({ navigation, route }: Props) => {
  const {
    params: { expenseId, type },
  } = route;

  const { data, deleteExpense, addExpense, editExpense } =
    useContext(ExpenseContext);

  const isEditing = type === "edit";
  const editData = isEditing && data.find(({ id }) => id === expenseId);

  useLayoutEffect(() => {
    const title = !isEditing ? "Add Expense" : "Edit Expense";
    navigation.setOptions({ title });
  }, [type]);

  const onDelete = useCallback(
    (id: string) => {
      deleteExpense(id);
      navigation.goBack();
    },
    [navigation]
  );

  const onCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onConfirm = useCallback(
    (payload: Expense) => {
      if (isEditing) {
        editExpense(payload.id, payload);
      } else {
        addExpense(payload);
      }
      navigation.goBack();
    },
    [navigation, isEditing]
  );

  const deleteButton = useMemo(() => {
    if (isEditing) {
      return (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={Theme.colors.error500}
            size={24}
            onPress={() => onDelete(expenseId)}
          />
        </View>
      );
    } else {
      return null;
    }
  }, [isEditing, onDelete, expenseId]);

  return (
    <View style={styles.screen}>
      <ExpenseForm
        initialData={editData}
        isEditing={isEditing}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
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
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: Theme.colors.primary200,
    alignItems: "center",
  },
});
