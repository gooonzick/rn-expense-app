import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Theme } from "src/utils/theme";

type Props = {
  label: string;
  textInputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
};

const Input = ({ label, textInputProps = {}, style }: Props) => {
  const { multiline } = textInputProps;

  const inputStyles = multiline
    ? [styles.input, styles.inputMultiline]
    : styles.input;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputProps} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: Theme.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Theme.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Theme.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
