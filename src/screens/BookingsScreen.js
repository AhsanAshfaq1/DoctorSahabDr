import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import BookingComponent from "../components/ListofBookingsComponent";

const Data = [
  "Dr.Nimra Zaffar",
  require("../../assets/image.jpg"),
  "sergon",
  "$543",
  "5am - 10pm Weekdays",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias suscipit accusamus. Eaque nulla mollitia, doloremque commodi, suscipit eligendi minima repudiandae rerum quo velit maiores nobis atque est sint laboriosam.",
  "10street hsotel cdjsgjs",
];

const BookingsScreen = ({ navigation }) => {
  // const [isLoading, setLoading] = React.useState(true);
  // const [bookings, setbookings] = React.useState([]);
  // React.useEffect(() => {
  //   getbookings(setbookings, setLoading);
  // }, []);
  // if (isLoading) {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         padding: 20,
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <ActivityIndicator />
  //       <Text style={{ fontSize: 32 }}>Loading</Text>
  //     </View>
  //   );
  // }
  return (
    <SafeAreaView>
      {/* <FlatList
        data={bookings}
        renderItem={(e) => (
          <BookingComponent
            data={Data}
            action={() => navigation.navigate("ViewBookings", Data)}
          />
        )}
        keyExtractor={(data, index) => index.toString()}
      /> */}
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
