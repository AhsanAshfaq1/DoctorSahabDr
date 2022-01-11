import React from "react";
import {
    TouchableOpacity,
    ToastAndroid,
    Text,
    View,
    Modal,
    StyleSheet
} from "react-native";

export const ModalPopUp = (props) => {
    return (
        <Modal animationType="slide" transparent={true} visible={props.modalVisible}>
            <View style={modalStyles.container}>
                <View style={modalStyles.ModalBody}>
                    <Text style={modalStyles.ModalResultText}>
                        You {props.typeoflink} Link has been sent to{"\n"}<Text style={{ fontWeight: "bold" }}>{props.Email}
                        </Text>{"\n"}
                        Check Junk/Spam if not found in inbox.
                    </Text>
                    <TouchableOpacity
                        style={modalStyles.Okay}
                        onPress={() => {
                            props.setModalVisible(false);
                            props.navigation.replace("Login");
                        }}
                    >
                        <Text style={modalStyles.modalButtonText}>✔</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const modalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ModalBody: {
        width: "90%",
        paddingHorizontal: 50,
        paddingVertical: 20,
        elevation: 100,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "white",
        opacity: 0.98,
        borderWidth: 0.8,
    },
    ModalResultText: {
        lineHeight: 26,
        textAlign: 'center',
        fontSize: 16,
        color: "black",
        marginBottom: 10,
    },
    Okay: {
        borderRadius: 40,
        backgroundColor: "green",
        justifyContent: "center",
        paddingBottom: 5,
        width: 50,
        height: 50,
    },
    modalButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 32,
    },
});  