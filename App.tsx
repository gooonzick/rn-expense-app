import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "src/navigation";
import { ExpenseContextProvider } from "src/store/expenseContext";

export default function App() {
  return (
    <ExpenseContextProvider>
      <SafeAreaProvider>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
    </ExpenseContextProvider>
  );
}
