import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { showLocation } from "react-native-map-link";


const openmaps = () => {
  showLocation({
    latitude: 33.7028,
    longitude: 73.0533,
    sourceLatitude: 33.6518, // optionally specify starting location for directions
    sourceLongitude: 73.1566, // not optional if sourceLatitude is specified
    title: "PIMS Hospital", // optional
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

const ViewGigComponent= ({route}) => {
  
  const {data,docdata} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Image style={styles.profilepicture} source={data} /> */}
        <Text style={styles.ProfileName}>{docdata.Name}</Text>
        <Text style={styles.designation}>{docdata.Designation}</Text>

        <View style={styles.profileview}>
          <View style={styles.achievements}>
            <Icon
              style={{ alignSelf: "center" }}
              raised
              name="user-injured"
              type="font-awesome"
              color="#f50"
              size={30}
            />
            <Text style={styles.achievementtext}>Patients</Text>
            <Text style={styles.achievementtext2}>{docdata.Patient}+</Text>
          </View>
          <View style={styles.achievements}>
            <Icon
              style={{ alignSelf: "center" }}
              raised
              name="medal"
              type="font-awesome"
              color="#f50"
              size={30}
            />
            <Text style={styles.achievementtext}>Experience</Text>
            <Text style={styles.achievementtext2}>{docdata.Experience}yrs+</Text>
          </View>
          <View style={styles.achievements}>
            <Icon
              style={{ alignSelf: "center" }}
              raised
              name="star"
              type="font-awesome"
              color="#f50"
              size={30}
            />
            <Text style={styles.achievementtext}>Rating</Text>
            <Text style={styles.achievementtext2}>Avg.{docdata.Ratings}</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 20,
            }}
          >
            <Icon
              style={styles.infoicons}
              raised
              name="address-card"
              type="font-awesome"
              color="#f50"
              size={25}
            />
            <Text style={styles.ProfileName}>About Doctor</Text>
          </View>
          <Text style={styles.designation}>{docdata.About}</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 20,
            }}
          >
            <Icon
              style={styles.infoicons}
              raised
              name="calendar-day"
              type="font-awesome"
              color="#f50"
              size={25}
            />
            <Text style={styles.ProfileName}>Timings</Text>
          </View>
          <Text style={styles.designation}>{data.data.Time}</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 20,
            }}
          >
            <Icon
              style={styles.infoicons}
              raised
              name="location-arrow"
              type="font-awesome"
              color="#f50"
              size={25}
            />
            <Text style={styles.ProfileName}>Address</Text>
          </View>
          <Text style={styles.designation}>{data.data.Cost}</Text>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              alignSelf: "center",
              borderRadius: 15,
              justifyContent: "center",
              marginVertical: 10,
              backgroundColor: "#f50",
            }}
            onPress={() => openmaps()}
          >
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              Open Location
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingHorizontal: 20,
            }}
          >
            <Icon
              style={styles.infoicons}
              raised
              name="bookmark"
              type="font-awesome"
              color="#f50"
              size={25}
            />
            <Text style={styles.ProfileName}>Bookings</Text>
          </View>
          <Text style={styles.designation}>{data.data.Cost}</Text>    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#EBEBEB",
    backgroundColor: "#FFF",
  },
  backgroundimage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  profilepicture: {
    marginTop: 20,
    width: 300,
    height: 200,
    borderRadius: 15,
    alignSelf: "center",
  },

  profileview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  achievements: {
    backgroundColor: "#FFFF",
    marginTop: 10,
    width: 100,
    height: 120,
    // borderWidth: 1,
    // borderColor: "#FFFF",
    borderRadius: 15,
    justifyContent: "center",
  },

  achievementtext: {
    alignSelf: "center",
  },

  achievementtext2: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  infoicons: {
    marginTop: 10,
    alignSelf: "flex-start",
    marginRight: -10,
  },
  ProfileName: {
    paddingTop: 10,
    paddingHorizontal: 20,
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  designation: {
    fontWeight: "300",
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 20,
    alignSelf: "flex-start",
  },
});

export default ViewGigComponent;
