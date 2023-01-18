import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { Theme } from "src/utils/theme";
import IconButton from "src/components/IconButton/IconButton";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import {
  ManageExpenseScreenProp,
  RootBottomTabParamList,
  RootStackParamList,
} from "src/types";

export const bottomTabScreenOptions:
  | BottomTabNavigationOptions
  | ((props: {
      route: RouteProp<RootBottomTabParamList, keyof RootBottomTabParamList>;
      navigation: ManageExpenseScreenProp;
    }) => BottomTabNavigationOptions) = ({ navigation, route }) => ({
  headerStyle: {
    backgroundColor: Theme.colors.primary500,
  },
  headerTintColor: "white",
  tabBarStyle: {
    backgroundColor: Theme.colors.primary500,
  },
  tabBarActiveTintColor: Theme.colors.accent500,
  headerRight: ({ tintColor }) => {
    return (
      <IconButton
        name="add"
        size={24}
        color={tintColor}
        onPress={() => {
          navigation.navigate("ManageExpense", { type: "add" });
        }}
      />
    );
  },
});

export const stackScreenOption:
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<RootStackParamList, keyof RootStackParamList>;
      navigation: any;
    }) => NativeStackNavigationOptions) = {
  headerStyle: { backgroundColor: Theme.colors.primary500 },
  headerTintColor: "white",
};

export const recentExpensesScreenOptions: BottomTabNavigationOptions = {
  title: "Recent Expenses",
  tabBarLabel: "Recent",
  tabBarIcon: ({ color, size, focused }) => (
    <Ionicons name="hourglass" size={size} color={color} />
  ),
};

export const allExpencesScreenOptions: BottomTabNavigationOptions = {
  title: "All Expenses",
  tabBarLabel: "All",
  tabBarIcon: ({ color, size, focused }) => (
    <Ionicons name="calendar" size={size} color={color} />
  ),
};

export const manageExpensesScreenOptions: NativeStackNavigationOptions = {
  presentation: "modal",
};
