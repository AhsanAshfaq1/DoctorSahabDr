import * as React from "react";
import { Text, View, Button, useState } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import GigsScreen from "./PostLogin/GigsScreen";
import NewGigScreen from "./PostLogin/NewGigScreen";
import ChatScreen from "./PostLogin/Chats";
import CallScreen from "./PostLogin/CallHistoy";
import ViewGigComponent from "./PostLogin/ViewGigComponent";
import BookingsScreen from "./PostLogin/BookingsScreen";
import ViewBookings from "./PostLogin/ViewBookingsComponent";
import ProfileScreen from "./PostLogin/ProfileScreen";

const GigStack = createStackNavigator();
function GigStackScreen() {
  return (
    <GigStack.Navigator>
      <GigStack.Screen
        name="Gigs"
        component={GigsScreen}
        options={({navigation,route}) => ({
          title: "Gigs",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize:23
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('CreateGig')}
              title="New"

            />),
        })}
      />
      <GigStack.Screen name="CreateGig" component={NewGigScreen}
       options={({navigation,route}) => ({
        title: "Create Gig",
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize:23
        },
      })}
       />
      <GigStack.Screen name="ViewGig" component={ViewGigComponent} />
    </GigStack.Navigator>
  );
}

const BookingStack = createStackNavigator();
function BookingStackScreen() {
  return (
    <BookingStack.Navigator>
      <BookingStack.Screen
        name="Bookings"
        component={BookingsScreen}
        options={({navigation,route}) => ({
          title: "Bookings",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize:23
          },
        })}
      />
      <BookingStack.Screen name="ViewBookings" component={ViewBookings} />
    </BookingStack.Navigator>
  );
}

const Bottom_Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Bottom_Tab.Navigator
      initialRouteName="Bookings"
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
        component={BookingStackScreen}
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

      <Bottom_Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Bottom_Tab.Navigator>
  );
}

export default function Home() {
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
