import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { Home } from "./Components/Home";
import { Login } from "./Components/LoginScreen";
import { Signup } from "./Components/Signup";
import { SignOut } from "./Components/firestore";
import { ForgotPassword } from "./Components/ForgotPassword";
import { VerificationScreen } from "./Components/VerificationScreen";

import { getLogin } from "./Components/AsyncStorage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const InitializeSignin = (setCurrentUser, setLoading) => {
  // SignOut();
  getLogin(setCurrentUser, setLoading);
};

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [CurrentUser, setCurrentUser] = React.useState(null);
  React.useState(() => {
    InitializeSignin(setCurrentUser, setLoading);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="blue" />
        <Text style={{ fontSize: 32 }}>Signing In</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={
          CurrentUser == null
            ? "Login"
            : CurrentUser.emailVerified
            ? "Home"
            : "Login"
        }
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
