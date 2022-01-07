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
    top: "-25%",
    left: "-12%",
    //For the generic style
    // top: "-25%",
    // left: "-35%",
  },
  CenterContainer: {
    height: 650,
    justifyContent: "flex-end",
    width: "90%",
    alignItems: "center",
  },
  Center: {
    width: "75%",
    height: "60%",
    justifyContent: "space-evenly",
    paddingHorizontal: "7.5%",
    elevation: 10,
    borderRadius: 20,
    backgroundColor: "white",
    borderBottomRightRadius: 200,
  },
  CenterTopText: {
    fontSize: 28,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  username: {
    paddingHorizontal: 0,
  },
  ForgotPassword: {
    fontSize: 16,
    color: "#5D19FC",
    marginVertical: "10%",
  },
  signup: {
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
    zIndex: -1
    //For the generic style
    // left: "-48%",
    // bottom: "-45%",
  },
});
