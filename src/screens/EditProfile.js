import { React, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Button
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useValidation } from "react-native-form-validator";

const EditProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [designation, setdesignation] = useState("");
  const [about, setabout] = useState("");
  const [exp, setexp] = useState("");
  const [patients, setpatients] = useState("");
  const [rate, setrate] = useState("");

  const { validate, getErrorMessages } = useValidation({
    state: { image, designation, about, exp, patients, rate },
  });

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


  const _onPressButton = () => {
    validate({
      image: { required: true },
      designation: { minlength: 3, maxlength: 25, required: true },
      about: { minlength: 5, maxlength: 100, required: true },
      experience: { required: true },
      patients: { required: true },
      rate: {required: true },
    });
  };


  return (
    <SafeAreaView>
      <ScrollView>
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
              <Text style={styles.textheading}>Designation</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setdesignation}
                value={designation}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>

          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>About</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setabout}
                value={about}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>

          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>Experience</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setexp}
                value={exp}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>

          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>Patients treated</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setpatients}
                value={patients}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>


          <View style={styles.inputcontainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textheading}>Board Rating</Text>
              <TextInput
                style={styles.textinput}
                onChangeText={setrate}
                value={rate}
              />
            </View>
            <View style={styles.styleBottom}></View>
          </View>
          <Text style={styles.error}>{getErrorMessages()}</Text>
          <Button title="Save " onPress={_onPressButton} />
        </View>
      </ScrollView>
    </SafeAreaView>
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


export default EditProfileScreen;
