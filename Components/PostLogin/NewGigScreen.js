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
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useValidation } from "react-native-form-validator";
import {createnewgig } from "../firestore";



const NewGigScreen = ({ navigation }) => {

  const [image, setImage] = useState(null);
  const [title, settitle] = useState("");
  const [des, setdes] = useState("");
  const [time, settime] = useState("");
  const [booking, setbooking] = useState("");

  const { validate, getErrorMessages } = useValidation({
    state: { image, title, des, time, booking },
  });

  const _onPressButton = () => {
    validate({
      image: { image: true },
      title: { minlength: 3, maxlength: 25, required: true },
      des: { minlength: 3, maxlength: 100, required: true },
      time: { minlength: 3, maxlength: 25, required: true },
      booking: { minlength: 3, maxlength: 100, required: true },
    });
    if(validate){
      // const data = {title:title,des:des,time:time,booking:booking}
      const data = {title:title,des:des,time:time,booking:booking}
      createnewgig(data)
    }
  };


  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  return (
    <ScrollView style={styles.maincontainer}>
      <SafeAreaView>
        <View>
          <View style={styles.container}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 150, height: 150 }}
              />
            )}
            <View style={styles.uploadBtnContainer}>
              <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
                <Text>{image ? "Edit" : "Upload"} Image</Text>
                <AntDesign name="camera" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
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
          <Text style={styles.error}>{getErrorMessages()}</Text>

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
