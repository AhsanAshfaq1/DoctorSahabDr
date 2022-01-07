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
        width: "90%",
        height: "60%",
        justifyContent: "space-evenly",
        elevation: 10,
        borderRadius: 50,
        backgroundColor: "white",
    },
    CenterTopText: {
        paddingLeft: '10%',
        fontSize: 24,
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    Button: {
        width: "40%",
        padding: 10,
        backgroundColor: "#5D19FC",
        elevation: 5,
        borderRadius: 10,
        alignSelf: 'center'
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
