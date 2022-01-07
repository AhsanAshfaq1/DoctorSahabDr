import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    TouchableWithoutFeedback,
    Text, Keyboard,
    SafeAreaView,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "../Styles/ForgotPasswordStyles";
import { Input } from "react-native-elements";
import Top_design from "../assets/LoginSignup/Top_Design.svg";
import Bottom_design from "../assets/LoginSignup/Bottom_Design.svg";
import ResetButton from "../assets/LoginSignup/ResetButton.svg";
import { ModalPopUp } from "./Modal";
import { resetPassword } from "./firestore";

export const ForgotPassword = ({ navigation }) => {

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


    const [modalVisible, setModalVisible] = React.useState(false);
    const [userEmail, setuserEmail] = React.useState("");
    const [errormsg, seterrormsg] = React.useState("");
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.TopIcon}>
                <Top_design width={600} height={topIconHeight} fill="#fff" />
            </View>

            <View style={styles.CenterContainer}>
                <View style={styles.Center}>
                    <View style={styles.CenterTop}>
                        <Text style={styles.CenterTopText}>Forgot Password</Text>
                    </View>
                    <View style={styles.CenterBottom}>
                        <Input
                            placeholder="Enter Email"
                            containerStyle={styles.Resetpass}
                            errorStyle={{ color: 'red' }}
                            errorMessage={errormsg}
                            inputContainerStyle={{
                                width: "100%",
                            }}
                            value={userEmail}
                            onChangeText={text => {
                                setuserEmail(text)
                                seterrormsg("")
                            }}
                            inputStyle={{ fontSize: 16, padding: 10, textAlign: 'center' }}
                        />
                    </View>
                    <View >
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.Login}
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
                            activeOpacity={0.5}
                            onPress={() => {
                                let regex = RegExp(
                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                );
                                if (regex.test(userEmail)) {
                                    resetPassword(userEmail);
                                    setModalVisible(true)
                                }
                                else {
                                    seterrormsg("Invalid Email")
                                }
                            }}
                        >
                            <ResetButton
                                activeOpacity={0.2}
                                width={75}
                                height={75}
                                fill="#fff"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <ModalPopUp modalVisible={modalVisible} typeoflink="Password Reset" setModalVisible={setModalVisible} Email={userEmail} navigation={navigation} />
            </View>

            <View style={styles.BottomIcon}>
                <Bottom_design width={761.39} height={bottomIconHeight} fill="#fff" />
            </View>
            <StatusBar style="light" />
        </SafeAreaView>
    );
}
