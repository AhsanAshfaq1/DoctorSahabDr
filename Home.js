import * as React from "react";
import { Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";

import GigsScreen from "./src/screens/GigsScreen";
import NewGigScreen from "./src/screens/NewGigScreen";
import ViewGigComponent from "./src/screens/ViewGigComponent";
import ProfileScreen from "./src/screens/ProfileScreen";
import BookingsScreen from "./src/screens/BookingsScreen";
import { SignOut } from "./src/DataBase/firestore";
import EditProfile from "./src/screens/EditProfile";
import { Chats } from "./Components/PostLogin/Chats";

const GigStack = createStackNavigator();
function GigStackScreen() {
  return (
    <GigStack.Navigator>
      <GigStack.Screen
        name="Gigs"
        component={GigsScreen}
        options={({ navigation, route }) => ({
          title: "Gigs",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 23,
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("CreateGig")}
              title="New"
            />
          ),
        })}
      />
      <GigStack.Screen
        name="CreateGig"
        component={NewGigScreen}
        options={({ navigation, route }) => ({
          title: "Create Gig",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 23,
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
        options={({ navigation, route }) => ({
          title: "Bookings",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 23,
          },
        })}
      />
    </BookingStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen({ navigation, route }) {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{
          MyDetails: route.params.MyDetails,
        }}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                SignOut();
                navigation.replace("Login");
              }}
            >
              <Icon
              style={{ marginRight: "5%" }}
              name="sign-out-alt"
              type="font-awesome"
              color={"blue"}
              size={32}
            />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false
        }}
      />
    </ProfileStack.Navigator>
  );
}

const Bottom_Tab = createBottomTabNavigator();

export function Tabs({ navigation, route }) {
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
        component={Chats}
        initialParams={{
          MyDetails: route.params.MyDetails,
        }}
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
        name="Profile"
        component={ProfileStackScreen}
        initialParams={{ navigation: navigation, MyDetails: route.params.MyDetails }}
        options={{
          tabBarLabel: "Profile",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Bottom_Tab.Navigator>
  );
}
