import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import MButton from "../Button";
import { Expense } from "src/types";

type Props = {
  isEditing: boolean;
  initialData?: Expense;
  onCancel: VoidFunction;
  onConfirm: (data: Expense) => void;
};

const ExpenseForm = ({
  initialData,
  onConfirm,
  onCancel,
  isEditing,
}: Props) => {
  const [form, setForm] = useState({
    id: initialData.id,
    date: `${initialData?.date.getDate()}.${
      initialData?.date.getMonth() + 1
    }.${initialData?.date.getFullYear()}`,
    amount: `${initialData?.amount}`,
    description: `${initialData?.description}`,
  });

  const onChange = useCallback((text: string, field: string) => {
    setForm((prev) => ({ ...prev, [field]: text }));
  }, []);

  const onSubmit = useCallback(
    (form: { date?: string; description?: string; amount?: string }) => {
      const { amount, date, description } = form;
      const [day, month, year] = date.split(".").map(Number);

      const newDate = new Date(year, month, day);

      const isAmountValid = Number(amount) > 0;
      const isDateValid = newDate.toString() !== "Invalid Date";
      const isDescriptionIsValid = description && description.length > 0;

      const isFormValid = isAmountValid && isDateValid && isDescriptionIsValid;

      if (!isFormValid) {
        Alert.alert("Invalid data", "Please check data");
        return;
      }

      onConfirm({
        amount: Number(amount),
        date: new Date(year, month, day),
        description,
        id: initialData.id,
      });
    },
    []
  );

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputContainer}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputProps={{
            keyboardType: "decimal-pad",
            onChangeText: (txt) => onChange(txt, "amount"),
            value: form.amount,
          }}
        />

        <Input
          label="Date"
          style={styles.rowInput}
          textInputProps={{
            placeholder: "DD.MM.YYYY",
            maxLength: 10,
            onChangeText: (txt) => onChange(txt, "date"),
            value: form.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputProps={{
          multiline: true,
          autoCorrect: false,
          onChangeText: (txt) => onChange(txt, "description"),
          value: form.description,
        }}
      />
      <View style={styles.buttonsContainer}>
        <MButton onPress={onCancel} mode="flat" style={styles.button}>
          Cancel
        </MButton>
        <MButton style={styles.button} onPress={() => onSubmit(form)}>
          {isEditing ? "Confirm" : "Add"}
        </MButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
  },
  rowInput: {
    flex: 1,
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
});
