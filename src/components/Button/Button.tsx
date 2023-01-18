import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Theme } from "src/utils/theme";

type Props = {
  children: React.ReactNode | string;
  onPress: VoidFunction;
  mode?: "flat";
  style?: StyleProp<ViewStyle>;
};

const MButton = ({ children, mode, onPress, style }: Props) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Theme.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: Theme.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Theme.colors.primary100,
    borderRadius: 4,
  },
});
