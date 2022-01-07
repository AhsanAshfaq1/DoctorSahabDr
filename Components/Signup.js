import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  View, Keyboard,
} from "react-native";
import {
  //   db,
  Create_Account,
  //   getUser,
  //   SignOut,
  //   verifyUser,
  //   resetPassword,
  //   deleteAccount,
} from "./firestore";

import { styles } from "../Styles/SignUpStyles";
import { Input, Icon, SocialIcon } from "react-native-elements";
import Top_design from "../assets/LoginSignup/Top_Design.svg";
import Bottom_design from "../assets/LoginSignup/Bottom_Design.svg";
import UserIcon from "../assets/LoginSignup/UserIcon.svg";
import SignupButton from "../assets/LoginSignup/SignupButton.svg";
import PasswordIcon from "../assets/LoginSignup/PasswordIcon.svg";
import { ModalPopUp } from "./Modal";

export const Signup = ({ navigation, route }) => {
  const [topIconHeight, settopIconHeight] = React.useState(500);
  const [bottomIconHeight, setbottomIconHeight] = React.useState(567);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      settopIconHeight(0);
      setbottomIconHeight(0)
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      settopIconHeight(500);
      setbottomIconHeight(567)
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const [userName, setuserName] = React.useState("");
  const [errormsgName, seterrormsgName] = React.useState("");
  const [userEmail, setuserEmail] = React.useState("");
  const [errormsgEmail, seterrormsgEmail] = React.useState("");
  const [userPass, setuserPass] = React.useState("");
  const [errormsgPass, seterrormsgPass] = React.useState("");
  const [confirmUserPass, setconfirmUserPass] = React.useState("");
  const [errormsgConfirmPass, seterrormsgConfirmPass] = React.useState("");
  const [Response, setResponse] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      {/* Possible Sol for Scrolling Issue */}
      {/* <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center',borderWidth:15, justifyContent: 'center' }}> */}
      <View style={styles.TopIcon}>
        <Top_design width={600} height={topIconHeight} fill="#fff" />
      </View>

      <View style={styles.CenterContainer}>
        <View style={styles.Center}>
          <View style={styles.CenterTop}>
            <Text style={styles.CenterTopText}>Sign Up</Text>
            <Text style={{ color: 'red' }}>{Response}</Text>
          </View>
          <View style={styles.CenterBottom}>

            {/* Input Name */}
            <Input
              placeholder="Name"
              containerStyle={styles.username}
              errorStyle={{ color: 'red' }}
              errorMessage={errormsgName}
              inputContainerStyle={{
                width: "100%",
              }}
              inputStyle={{ fontSize: 16, padding: 10 }}
              value={userName}
              onChangeText={text => {
                setuserName(text)
                seterrormsgName("")
                setResponse("")
              }}
              rightIcon={<UserIcon color="blue" />}
            />
            <Input
              placeholder="Username"
              containerStyle={styles.username}
              errorStyle={{ color: 'red' }}
              errorMessage={errormsgEmail}
              inputContainerStyle={{
                width: "100%",
              }}
              inputStyle={{ fontSize: 16, padding: 10 }}
              value={userEmail}
              onChangeText={text => {
                setuserEmail(text)
                seterrormsgEmail("")
                setResponse("")
              }}
              rightIcon={<UserIcon color="blue" />}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              containerStyle={{
                paddingHorizontal: 0,
              }}
              errorStyle={{ color: 'red' }}
              errorMessage={errormsgPass}
              inputStyle={{ fontSize: 16, padding: 10 }}
              value={userPass}
              onChangeText={text => {
                setuserPass(text)
                seterrormsgPass("")
                setResponse("")
              }}
              rightIcon={<PasswordIcon color="blue" />}
            />
            <Input
              placeholder="Confirm"
              secureTextEntry={true}
              containerStyle={{
                paddingHorizontal: 0,
              }}
              inputStyle={{ fontSize: 16, padding: 10 }}
              value={confirmUserPass}
              onChangeText={text => {
                setconfirmUserPass(text)
                seterrormsgPass("")
                setResponse("")
              }}
              rightIcon={<PasswordIcon color="blue" />}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.signup}
              onPress={() => navigation.replace("Login")}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: "absolute",
                alignSelf: "flex-end",
                bottom: -20,
              }}
              activeOpacity={0.2}
              onPress={() => {
                let OK = true;

                let regex = RegExp(
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                );

                if (userName.length == 0) {
                  seterrormsgName("Kindly Enter a Name")
                  OK = false;
                }
                if (!regex.test(userEmail)) {
                  seterrormsgEmail("Invalid Email")
                  OK = false;
                }
                if (userPass.length == 0) {
                  seterrormsgPass("Kindly Enter A Password")
                  OK = false;
                }
                if (userPass != confirmUserPass) {
                  seterrormsgPass("Passwords Do Not Match")
                  OK = false;
                }
                if (userPass.length <= 8) {
                  seterrormsgPass("Password Should Be atleast 8 digits")
                  OK = false;
                }
                if (OK)
                  Create_Account(userEmail, userPass, userName, setResponse, setModalVisible)
              }}
            >
              <SignupButton
                activeOpacity={0.2}
                width={75}
                height={75}
                fill="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <ModalPopUp modalVisible={modalVisible} typeoflink="Email Verification" setModalVisible={setModalVisible} Email={userEmail} navigation={navigation} />

      <View style={styles.BottomIcon}>
        <Bottom_design width={761.39} height={bottomIconHeight} fill="#fff" />
      </View>
      <StatusBar style="light" />
    </ SafeAreaView >
  );
}
