import * as React from "react";
import { useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome5";
import { Avatar, Input, Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AppointmentDetailStyles,
  BookingStyles,
} from "../../Styles/PostLoginStyles/AppointmentStyles";
import { getAppointmentDetails, getAppointments, getDoctorDetails } from "../firestore";
import { FlatList } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const AppointmentScreen = ({ navigation, route }) => {
  let [AppointmentList, setAppointmentList] = React.useState([]);
  let [isLoading, setLoading] = React.useState(true);
  useEffect(() => {
    getAppointments(setAppointmentList, setLoading);
    route.params.setTabBarHeight(null);
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true)
      getAppointments(setAppointmentList, setLoading);
    })
    return unsubscribe;
  }, []);


  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="blue" />
        <Text style={{ fontSize: 28 }}>Checking Appointments</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key={Math.random()}
        data={AppointmentList}
        style={{
          backgroundColor: "white",
        }}
        keyExtractor={(data, index) => index.toString()}
        renderItem={(x) => (
          <Booking
            data={x.item}
            setTabBarHeight={route.params.setTabBarHeight}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};
const Booking = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.setTabBarHeight(0);
        props.navigation.navigate("Appointment Details", {
          setTabBarHeight: props.setTabBarHeight,
          Appointment_Data: props.data
        });
      }}
      style={BookingStyles.container}
    >
      <View style={BookingStyles.DrDetails}>
        <View>
          <Text style={BookingStyles.DrName}>{props.data.Doctor_Name}</Text>
          <Text style={BookingStyles.DrDesignation}>
            {props.data.Doctor_Designation}
          </Text>
        </View>
        <Avatar rounded size={64} source={{ uri: props.data.Doctor_Img }} />
      </View>

      <View style={BookingStyles.Problem}>
        <View>
          <Text style={BookingStyles.ProblemHeading}>Problem</Text>
          <Text style={BookingStyles.ProblemText}>{props.data.Problem}</Text>
        </View>
        <TouchableOpacity
          style={[BookingStyles.ChatButton, { zIndex: 1 }]}
          onPress={() => alert("Go To Chats")}
        >
          <Text style={BookingStyles.ChatButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export const Appointments = ({ route }) => {
  return (
    <Stack.Navigator initialRouteName="Appointments">
      <Stack.Screen
        name="Appointments"
        options={{
          headerTitleAlign: "center",
          title: "Appointment",
          headerStyle: {
            borderBottomWidth: 0.55,
          },
        }}
        initialParams={{ setTabBarHeight: route.params.setTabBarHeight }}
        component={AppointmentScreen}
      />
      <Stack.Screen
        name="Appointment Details"
        options={{
          headerTitleAlign: "center",
          title: "Details",
          headerStyle: {
            borderBottomWidth: 0.55,
          },
        }}
        initialParams={{ setTabBarHeight: route.params.setTabBarHeight }}
        component={Appointment_Details}
      />
    </Stack.Navigator>
  );
};
const Appointment_Details = ({ navigation, route }) => {
  let [DocData, setDocData] = React.useState([]);
  let [gigData, setgigData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  navigation.setOptions({
    headerLeft: () => (
      <Icon
        name="chevron-left"
        type="feather"
        color={"#5D19FC"}
        size={32}
        onPress={() => {
          route.params.setTabBarHeight(null), navigation.goBack();
        }}
      />
    ),
  });

  React.useEffect(() => {
    route.params.setTabBarHeight(0);
    getAppointmentDetails(route.params.Appointment_Data.Doctor_id,
      route.params.Appointment_Data.Gig_id, setDocData, setgigData, setLoading)
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
        <ActivityIndicator size="large" color="green" />
        <Text style={{ fontSize: 32 }}>Loading Please Wait</Text>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={AppointmentDetailStyles.container}>
        <Avatar
          rounded
          style={{ width: "100%", aspectRatio: 1.75 / 1 }}
          source={{ uri: DocData.profileurl }}
        />
        <View style={AppointmentDetailStyles.DrDetails}>
          <View>
            <Text style={AppointmentDetailStyles.DrName}>
              Dr. {DocData.Name}
            </Text>
            <Text style={AppointmentDetailStyles.DrDesignation}>
              {DocData.Designation}
            </Text>
          </View>

          <Icon
            name="direction"
            type="entypo"
            size={42}
            color={"blue"}
            onPress={() => openmaps()}
          />
        </View>

        <View style={AppointmentDetailStyles.Achievements_Container}>
          <View style={AppointmentDetailStyles.Achievements}>
            <Icon name="user" type="entypo" size={28} color="blue" />
            <Text>Patients</Text>
            <Text style={AppointmentDetailStyles.Achievement_Text}>{DocData.Patient}+</Text>
          </View>
          <View style={AppointmentDetailStyles.Achievements}>
            <Icon name="medal" type="font-awesome-5" size={28} color="blue" />
            <Text>Experience</Text>
            <Text style={AppointmentDetailStyles.Achievement_Text}> {DocData.Experience} Y+</Text>
          </View>
          <View style={AppointmentDetailStyles.Achievements}>
            <Icon name="star" type="feather" size={28} color="blue" />
            <Text>Rating</Text>
            <Text style={AppointmentDetailStyles.Achievement_Text}>
              Avg {route.params.Problem}
            </Text>
          </View>
        </View>
        <View style={AppointmentDetailStyles.GigDescriptionContainer}>
          <Text style={AppointmentDetailStyles.Headings_Text}>Problem</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            {route.params.Appointment_Data.Problem}
          </Text>
        </View>
        <View style={AppointmentDetailStyles.GigDescriptionContainer}>
          <Text style={AppointmentDetailStyles.Headings_Text}>Desciption</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            {route.params.Appointment_Data.Description}
          </Text>
        </View>

        <View style={AppointmentDetailStyles.GigDescriptionContainer}>
          <Text style={AppointmentDetailStyles.Headings_Text}>Gig Details</Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            {gigData.Description}
          </Text>
        </View>

        <View style={AppointmentDetailStyles.CostContainer}>
          <Text style={AppointmentDetailStyles.CostText}>Cost</Text>
          <Text style={AppointmentDetailStyles.CostPrice}>{gigData.Cost}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    backgroundColor: "white",
    padding: 8,
  },
});
