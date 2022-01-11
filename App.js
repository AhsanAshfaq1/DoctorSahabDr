import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { Login } from "./Components/LoginScreen";
import { Signup } from "./Components/Signup";
import { ForgotPassword } from "./Components/ForgotPassword";
import { VerificationScreen } from "./Components/VerificationScreen";

import { getLogin } from "./Components/AsyncStorage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "./Home";

const InitializeSignin = (setCurrentUser, setLoading, setUserEmail) => {
  // SignOut();
  getLogin(setCurrentUser, setLoading, setUserEmail);
};

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [CurrentUser, setCurrentUser] = React.useState(null);
  const [UserEmail, setUserEmail] = React.useState(null);
  React.useState(() => {
    InitializeSignin(setCurrentUser, setLoading, setUserEmail);
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
        <Stack.Screen
          name="Home"
          component={Tabs}
          initialParams={{ Email: UserEmail, MyDetails: CurrentUser }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
