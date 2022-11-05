import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PlatformNavigator from "./src/navigation/PlatformNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <PlatformNavigator />
    </NavigationContainer>
  );
}
