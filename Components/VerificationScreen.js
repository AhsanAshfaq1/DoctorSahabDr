import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    TouchableWithoutFeedback,
    Text,
    SafeAreaView,
    TouchableOpacity,
    View,
} from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "../Styles/VerificationStyles";
import Top_design from "../assets/LoginSignup/Top_Design.svg";
import Bottom_design from "../assets/LoginSignup/Bottom_Design.svg";
import { ModalPopUp } from "./Modal";
import { verifyUser } from "./firestore";

export const VerificationScreen = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.TopIcon}>
                <Top_design width={600} height={500} fill="#fff" />
            </View>

            <View style={styles.CenterContainer}>
                <View style={styles.Center}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{ width: "20%" }}
                            onPress={() => navigation.goBack()}
                        >
                            <Icon name="chevron-left" type="Entypo" color="#5D19FC" size={50} />
                        </TouchableOpacity>
                        <Text style={[styles.CenterTopText, { color: 'black', width: "80%" }]}>Not Verified</Text>

                    </ View >
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>You are not yet verified{"\n"}Kindly Check you email for a Verification Link</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.Button}
                        onPress={() => {
                            verifyUser(route.params.tempuser)
                            setModalVisible(true)
                        }}
                    >
                        <Text style={{ textAlign: "center", color: "white" }}>
                            Resend Verification Link
                        </Text>
                    </TouchableOpacity>

                </View>

                <ModalPopUp modalVisible={modalVisible} typeoflink="Email Verification" setModalVisible={setModalVisible} Email={route.params.tempuser.email} navigation={navigation} />
            </View>

            <View style={styles.BottomIcon}>
                <Bottom_design width={761.39} height={567} fill="#fff" />
            </View>
            <StatusBar style="light" />
        </SafeAreaView>
    );
}
