import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View, Keyboard,
} from "react-native";
import {
  SignIn,
} from "./firestore";
import { styles } from "../Styles/LoginStyles";
import { Input, Icon, SocialIcon } from "react-native-elements";
import Top_design from "../assets/LoginSignup/Top_Design.svg";
import Bottom_design from "../assets/LoginSignup/Bottom_Design.svg";
import UserIcon from "../assets/LoginSignup/UserIcon.svg";
import LoginButton from "../assets/LoginSignup/LoginButton.svg";
import PasswordIcon from "../assets/LoginSignup/PasswordIcon.svg";

export const Login = ({ navigation, route }) => {
  const [topIconHeight, settopIconHeight] = React.useState(500);
  const [bottomIconHeight, setbottomIconHeight] = React.useState(567);

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

  const [userEmail, setuserEmail] = React.useState("");
  const [errormsgEmail, seterrormsgEmail] = React.useState("");
  const [userPass, setuserPass] = React.useState("");
  const [errormsgPass, seterrormsgPass] = React.useState("");
  const [Response, setResponse] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopIcon}>
        <Top_design width={600} height={topIconHeight} fill="#fff" />
      </View>

      <View style={styles.CenterContainer}>
        <View style={styles.Center}>
          <View style={styles.CenterTop}>
            <Text style={styles.CenterTopText}>Sign In</Text>
            <Text style={{ color: 'red' }}>{Response}</Text>
          </View>
          <View style={styles.CenterBottom}>

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
            <TouchableWithoutFeedback onPress={() => navigation.replace("Forgot Password")}>
              <Text style={styles.ForgotPassword}>Forgot your password?</Text>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.signup}
              onPress={() => navigation.replace("Signup")}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Sign up
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
                let regex = RegExp(
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                );
                if (!regex.test(userEmail)) {
                  seterrormsgEmail("Invalid Email")
                  if (userPass.length == 0) {
                    seterrormsgPass("Kindly Enter A Password")
                  }
                }
                else {
                  if (userPass.length == 0) {
                    seterrormsgPass("Kindly Enter A Password")
                  }
                  else {
                    console.log(route.params)
                    SignIn(userEmail, userPass, setResponse, navigation);
                  }
                }
              }}
            >
              <LoginButton
                activeOpacity={0.2}
                width={75}
                height={75}
                fill="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", width: "80%" }}>
          <SocialIcon type="google" iconType="font-awesome" />
          <SocialIcon type="facebook" iconType="font-awesome" />
        </View>
      </View>

      <View style={styles.BottomIcon}>
        <Bottom_design width={761.39} height={bottomIconHeight} fill="#fff" />
      </View>
      <StatusBar style="light" />
    </ SafeAreaView>
  );
}
