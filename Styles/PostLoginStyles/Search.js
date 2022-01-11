import { StyleSheet } from "react-native";
export const SearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
  },
  TopBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: "5%",
  },
  TopText: {
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  InputContainer: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
    marginVertical: "5%",
  },
  SearchResults: {
    marginVertical: "5%",
  },
  SearchResultsHeading: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
export const GigStyles = StyleSheet.create({
  GigContainer: {
    elevation: 10,
    backgroundColor: "white",
    borderRadius: 15,
    width: "95%",
    alignSelf: "center",
    padding: 15,
    marginVertical: "2%",
  },
  Button: {
    width: 150,
    height: 50,
    padding: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "blue",
  },
  DocDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  DocName: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  GigName: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    marginHorizontal: "20%",
    marginBottom: "5%",
  },
  DocDesignation: {
    fontSize: 16,
    color: "grey",
    alignSelf: "flex-start",
  },
  AvailableForHire: {
    fontSize: 18,
    color: "blue",
    textAlignVertical: "center",
  },
  ButtonText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});
export const ServiceStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "5%",
  },
  DrDetails: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  DrName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "2%",
  },
  DrDesignation: {
    fontSize: 16,
    color: "grey",
    alignSelf:'flex-start'
  },
  Achievements_Container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: "5%",
    width: "100%",
  },
  Achievements: {
    backgroundColor: "white",
    width: "25%",
    aspectRatio: 1 / 1.25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    elevation: 5,
  },
  Achievement_Text: {
    fontWeight: "bold",
  },
  GigDescriptionContainer: {
    backgroundColor: "white",
    elevation: 5,
    width: "100%",
    borderRadius: 20,
    padding: "5%",
  },
  Headings_Text: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: "2%",
    textAlign: "center",
  },
  CostContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 15,
    paddingHorizontal: "5%",
    marginVertical:'5%'
  },
  CostText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  CostPrice: {
    fontSize: 18,
  },
  BookNow: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "5%",
    backgroundColor: "blue",
  },
  BookButtonText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  BookingDetails: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 15,
    elevation: 10,
    alignItems: "center",
    paddingVertical:15
  },
});
