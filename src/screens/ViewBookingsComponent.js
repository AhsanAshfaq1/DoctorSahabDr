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


const ViewBookingsComponent = ({route}) => {
  const data = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.ProfileName}>Patient Name:</Text>
        <Text style={styles.designation}>{data[2]}</Text>
        <Text style={styles.ProfileName}>Problem/Symptoms :</Text>
        <Text style={styles.designation}>{data[2]}</Text>
        <Text style={styles.ProfileName}>Booked Slot:</Text>
        <Text style={styles.designation}>{data[2]}</Text>
        <Text style={styles.ProfileName}>Payment:</Text>
        <Text style={styles.designation}>{data[2]}</Text>         
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#EBEBEB",
    backgroundColor: "#FFF",
    height:Dimensions.get("window").height
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

export default ViewBookingsComponent;
