import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    TopIcon: {
        position: "absolute",
        top: "-22%",
        left: "-12%",
        //For the generic style
        // top: "-25%",
        // left: "-35%",
    },
    CenterContainer: {
        height: "75%",
        justifyContent: "flex-end",
        width: "90%",
        alignItems: "center",
    },
    Center: {
        marginBottom: '20%',
        width: "70%",
        height: "60%",
        justifyContent: "space-evenly",
        paddingHorizontal: "7.5%",
        elevation: 10,
        borderRadius: 20,
        backgroundColor: "white",
        borderBottomRightRadius: 200,
    },
    CenterTopText: {
        textAlign: 'center',
        fontSize: 24,
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    Resetpass: {
        paddingHorizontal: 0,
    },
    Login: {
        width: "40%",
        padding: 10,
        backgroundColor: "#5D19FC",
        elevation: 5,
        borderRadius: 10,
    },
    BottomIcon: {
        position: "absolute",
        left: "-30%",
        bottom: "-48%",
        //For the generic style
        // left: "-48%",
        // bottom: "-45%",
    },
});
