import * as React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";

import GigsScreen from "./src/screens/GigsScreen";
import NewGigScreen from "./src/screens/NewGigScreen";
import EditGigScreen from "./src/screens/EditGigScreen";
import ChatScreen from "./src/screens/ChatScreen";
import CallScreen from "./src/screens/CallScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import BookingsScreen from "./src/screens/BookingsScreen";

const GigStack = createStackNavigator();

function GigStackScreen() {
  return (
    <GigStack.Navigator>
      <GigStack.Screen name="Gigs" component={GigsScreen} />
      <GigStack.Screen name="NewGig" component={NewGigScreen} />
      <GigStack.Screen name="Gig" component={ProfileScreen} />
      <GigStack.Screen name="EditGig" component={EditGigScreen} />
    </GigStack.Navigator>
  );
}

const Bottom_Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Bottom_Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Bottom_Tab.Screen
        name="Gigs"
        component={GigStackScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Bottom_Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />

      <Bottom_Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Bottom_Tab.Screen
        name="Calls"
        component={CallScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabel: "Calls",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
        }}
      />

      {/* <Bottom_Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Button
                onPress={() => alert("This is a button!")}
                title="Edit"
                color="#000"
              />
            </View>
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <Button
                onPress={() => alert("This is a button!")}
                title="< Gigs"
                color="#000"
              />
            </View>
          ),
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Bottom_Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
