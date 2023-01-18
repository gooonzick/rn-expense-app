import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ManageExpenses from "src/screens/ManageExpenses";
import AllExpenses from "src/screens/AllExpenses";
import RecentExpenses from "src/screens/RecentExpenses";

import { RootBottomTabParamList, RootStackParamList } from "src/types";

import * as options from "./helpers/screenOptions";

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator<RootBottomTabParamList>();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator screenOptions={options.bottomTabScreenOptions}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={options.recentExpensesScreenOptions}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={options.allExpencesScreenOptions}
      />
    </BottomTabs.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ExpensesOverview"
        screenOptions={options.stackScreenOption}
      >
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageExpense"
          component={ManageExpenses}
          options={options.manageExpensesScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
