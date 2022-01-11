import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useValidation } from "react-native-form-validator";
import { addWithRandomID, getdoctordata } from "../DataBase/firestore";

const NewGigScreen = ({ navigation, route }) => {
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [time, settime] = useState("");
  const [booking, setbooking] = useState("");

  const [isLoading, setLoading] = React.useState(true);
  const [doctor, setdoctor] = React.useState([]);

  useEffect(() => {
    getdoctordata(setdoctor, setLoading);
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
        <ActivityIndicator />
        <Text style={{ fontSize: 32 }}>Loading</Text>
      </View>
    );
  }

  const _onPressButton = () => {
    // if (validate) {
    // const data = {title:title,des:des,time:time,booking:booking}
    const data = {
      Doctor_id: getAuth().currentUser.email,
      Doctor_Name: doctor.Name,
      Doctor_Designation: doctor.Designation,
      Doctor_Image: doctor.profileurl,
      Title: title,
      Description: des,
      Time: time,
      Cost: booking,
    };
    addWithRandomID(data, navigation);

    // }
    // alert(JSON.stringify(doctor));
    // alert(JSON.stringify(data));
  };

  return (
    <ScrollView style={styles.maincontainer}>
      <SafeAreaView>
        <View>
          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>Gig Title</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={settitle}
                value={title}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>

          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>Description</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setdes}
                value={des}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>

          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>Timings</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={settime}
                value={time}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>

          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>Booking Details</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setbooking}
                value={booking}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>

          <Button title="Save " onPress={_onPressButton} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#FFFF",
    height: Dimensions.get("window").height,
  },
  container: {
    elevation: 2,
    height: 150,
    width: 150,
    backgroundColor: "#efefef",
    position: "relative",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textheading: {
    paddingTop: 10,
    height: 40,
    width: "30%",
  },
  textinput: {
    marginLeft: 6,
    padding: 10,
    width: "70%",
    height: 40,
  },
  inputcontainer: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  styleBottom: {
    backgroundColor: "#EBEBEB",
    width: "100%",
    height: 2,
  },
  savebtn: {
    width: 150,
    height: 50,
    alignSelf: "center",
    borderRadius: 15,
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#f50",
  },
  error: {
    alignSelf: "center",
    color: "red",
  },
});

export default NewGigScreen;
