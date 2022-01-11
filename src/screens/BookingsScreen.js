import { React ,useState , useEffect} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import BookingComponent from "../components/ListofBookingsComponent";
import { getAppointments } from "../DataBase/firestore";

// const Data = [
//   "Dr.Nimra Zaffar",
//   require("../../assets/image.jpg"),
//   "sergon",
//   "$543",
//   "5am - 10pm Weekdays",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias suscipit accusamus. Eaque nulla mollitia, doloremque commodi, suscipit eligendi minima repudiandae rerum quo velit maiores nobis atque est sint laboriosam.",
//   "10street hsotel cdjsgjs",
// ];

const BookingsScreen = ({ navigation }) => {
  const [AppointmentList, setAppointmentList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    getAppointments(setAppointmentList, setLoading);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // alert("On Screen of Gig");
      setLoading(true);
      getAppointments(setAppointmentList, setLoading);
    });
    return unsubscribe;
  }, [navigation]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="blue" />
        <Text style={{ fontSize: 28 }}>Checking Appointments</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        style={{ marginBottom: "35%" }}
        data={AppointmentList}
        renderItem={(e) => (
          <BookingComponent
            data={e.item}
            navigation={navigation}
            action={() =>
              navigation.navigate("ViewBookings", {
                data: e.item,
                docdata: doctor,
              })
            }
          />
        )}
        keyExtractor={(data, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    height: Dimensions.get("window").height,
  },
  profilename: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
  },
});

export default BookingsScreen;
