import * as React from "react";
import { useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  SearchStyles,
  GigStyles,
  ServiceStyles,
} from "../../Styles/PostLoginStyles/Search";
import { Avatar, Icon, Input } from "react-native-elements";

import { createStackNavigator } from "@react-navigation/stack";
import { SaveAppointment, SearchGigs, getDoctorDetails } from "../firestore";
import { showLocation } from "react-native-map-link";


const openmaps = () => {
  showLocation({
    latitude: 33.7028,
    longitude: 73.0533,
    sourceLatitude: 33.6518, // optionally specify starting location for directions
    sourceLongitude: 73.1566, // not optional if sourceLatitude is specified
    title: "Comsats", // optional
    googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
    googlePlaceId: "ChIJGVtI4by3t4kRr51d_Qm_x58", // optionally specify the google-place-id
    alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
    dialogTitle: "This is the dialog Title", // optional (default: 'Open in Maps')
    dialogMessage: "This is the amazing dialog Message", // optional (default: 'What app would you like to use?')
    cancelText: "This is the cancel button text", // optional (default: 'Cancel')
    appsWhiteList: ["google-maps"], // optionally you can set which apps to show (default: will show all supported apps installed on device)
    naverCallerName: "com.example.myapp", // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
    // appTitles: { 'google-maps': 'My custom Google Maps title' }, // optionally you can override default app titles
    // app: 'uber',  // optionally specify specific app to use
    directionsMode: "walk", // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
  });
};

const Stack = createStackNavigator();

export const Search = ({ route }) => {
  return (
    <>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search "
          initialParams={{
            setTabBarHeight: route.params.setTabBarHeight,
            MyDetails: route.params.MyDetails,
          }}
          options={{
            headerTitleAlign: "center",
            title: "Search",
            headerStyle: {
              borderBottomWidth: 0.55,
            },
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="ServiceDetails"
          options={{
            headerTitleAlign: "center",
          }}
          initialParams={{ setTabBarHeight: route.params.setTabBarHeight }}
          component={ServiceDetails}
        />
      </Stack.Navigator>
    </>
  );
};

const SearchScreen = ({ navigation, route }) => {
  let [ServicesList, setServicesList] = React.useState([]);
  let [SearchName, setSearchName] = React.useState("");
  useEffect(() => {
    route.params.setTabBarHeight(null);
  }, []);
  return (
    <SafeAreaView style={SearchStyles.container}>
      <View style={SearchStyles.TopBar}>
        <Text style={SearchStyles.TopText}>
          Find a best doctor{"\n"}near you
        </Text>
        <Avatar size={64} rounded source={{ uri: route.params.MyDetails.Profile_Url }} />
      </View>
      <Input
        containerStyle={SearchStyles.InputContainer}
        inputContainerStyle={{ borderBottomWidth: 0, paddingLeft: 5 }}
        inputStyle={{ paddingLeft: 10 }}
        errorStyle={{ margin: 0, height: 0, borderWidth: 0 }}
        value={SearchName}
        onChangeText={(text) => setSearchName(text)}
        placeholder="Search Doctor"
        leftIcon={() => (
          <Icon name="search" type="font-awesome" size={16} color={"grey"} />
        )}
        rightIcon={() => (
          <TouchableOpacity
            onPress={() => SearchGigs(SearchName, setServicesList)}
          >
            <Icon
              name="doubleright"
              type="antdesign"
              size={28}
              style={{
                borderRadius: 10,
                justifyContent: "center",
              }}
              color={"blue"}
            />
          </TouchableOpacity>
        )}
      />
      <View style={SearchStyles.SearchResults}>
        <Text style={SearchStyles.SearchResultsHeading}>{"Services"}</Text>
        <FlatList
          key={Math.random()}
          data={ServicesList}
          style={{
            height: "65%",
            backgroundColor: "white",
          }}
          keyExtractor={(data, index) => index.toString()}
          renderItem={(x) => (
            <Gig
              data={x.item.data}
              id={x.item.id}
              setTabBarHeight={route.params.setTabBarHeight}
              navigation={navigation}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const Gig = (props) => {
  return (
    <View style={GigStyles.GigContainer}>
      <View>
        <Text style={GigStyles.GigName}>{props.data.Title}</Text>
      </View>
      <View style={GigStyles.DocDetailsContainer}>
        <View>
          <Text style={GigStyles.DocName}>Dr. {props.data.Doctor_Name}</Text>
          <Text style={GigStyles.DocDesignation}>
            {props.data.Doctor_Designation}
          </Text>
        </View>
        <Avatar rounded size={64} source={{ uri: `${props.data.Doctor_Image}` }} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Icon name="star" type="feather" size={28} color="blue" />
        <Text style={{ fontSize: 18 }}>4.5</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={GigStyles.AvailableForHire}>Available for Hire</Text>
        <TouchableOpacity
          style={GigStyles.Button}
          onPress={() => {
            props.setTabBarHeight(0);
            props.navigation.navigate("ServiceDetails", {
              setTabBarHeight: props.setTabBarHeight,
              Data: props.data,
              id: props.id
            });
          }}
        >
          <Text style={GigStyles.ButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ServiceDetails = ({ navigation, route }) => {
  let [DocData, setDocData] = React.useState([]);
  const [Problem, setProblem] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [errormsgProb, seterrormsgProb] = React.useState("");
  const [errormsgDes, seterrormsgDes] = React.useState("");
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

  const MakeAppointment = () => {
    if (Problem.length != 0 && Description.length != 0) {
      SaveAppointment(Description, DocData.Designation, DocData.profileurl, DocData.Name, route.params.Data.Doctor_id, Problem, route.params.id, navigation);
    }
    if (Problem.length == 0) {
      seterrormsgProb("Can't Be Empty");
    }
    if (Description.length == 0) {
      seterrormsgDes("Can't Be Empty");
    }
  };

  React.useEffect(() => {
    route.params.setTabBarHeight(0);
    getDoctorDetails(route.params.Data.Doctor_id, setDocData, setLoading)
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
      <ScrollView contentContainerStyle={ServiceStyles.container}>
        <Avatar
          rounded
          style={{ width: "100%", aspectRatio: 1.75 / 1 }}
          source={{ uri: DocData.profileurl }}
        />
        <View style={ServiceStyles.DrDetails}>
          <View>
            <Text style={ServiceStyles.DrName}>Dr. {DocData.Name}</Text>
            <Text style={ServiceStyles.DrDesignation}>{DocData.Designation}</Text>
          </View>

          <Icon
            name="direction"
            type="entypo"
            size={42}
            color={"blue"}
            onPress={() => openmaps()}
          />
        </View>

        <View style={ServiceStyles.Achievements_Container}>
          <View style={ServiceStyles.Achievements}>
            <Icon name="user" type="entypo" size={28} color="blue" />
            <Text>Patients</Text>
            <Text style={ServiceStyles.Achievement_Text}>{DocData.Patient}</Text>
          </View>
          <View style={ServiceStyles.Achievements}>
            <Icon name="medal" type="font-awesome-5" size={28} color="blue" />
            <Text>Experience</Text>
            <Text style={ServiceStyles.Achievement_Text}> {DocData.Experience} Y+</Text>
          </View>
          <View style={ServiceStyles.Achievements}>
            <Icon name="star" type="feather" size={28} color="blue" />
            <Text>Rating</Text>
            <Text style={ServiceStyles.Achievement_Text}>Avg {DocData.Ratings}</Text>
          </View>
        </View>

        <View style={ServiceStyles.GigDescriptionContainer}>
          <Text style={ServiceStyles.Headings_Text}>Gig Details</Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            {route.params.Data.Description}
          </Text>
        </View>

        <View style={ServiceStyles.CostContainer}>
          <Text style={ServiceStyles.CostText}>Cost</Text>
          <Text style={ServiceStyles.CostPrice}>{route.params.Data.Cost}</Text>
        </View>
        <View style={ServiceStyles.BookingDetails}>
          <Text style={{ fontSize: 16 }}>Want to Book? Enter the Details</Text>
          <Input
            placeholder="Problem"
            containerStyle={{ width: "90%" }}
            errorStyle={{ color: "red" }}
            errorMessage={errormsgProb}
            inputContainerStyle={{
              borderBottomWidth: 1,
            }}
            inputStyle={{ fontSize: 16, padding: 10 }}
            value={Problem}
            onChangeText={(text) => {
              setProblem(text), seterrormsgProb("");
            }}
          />
          <Input
            placeholder="Description"
            containerStyle={{ width: "90%" }}
            inputContainerStyle={{
              borderBottomWidth: 1,
              borderColor: "black",
            }}
            errorStyle={{ color: "red" }}
            errorMessage={errormsgDes}
            inputStyle={{ fontSize: 16, padding: 10 }}
            value={Description}
            onChangeText={(text) => {
              setDescription(text), seterrormsgDes("");
            }}
          />
        </View>
        <TouchableOpacity
          style={ServiceStyles.BookNow}
          onPress={() => MakeAppointment()}
        >
          <Text style={ServiceStyles.BookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
