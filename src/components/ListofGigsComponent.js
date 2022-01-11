import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { deleteGig } from "../DataBase/firestore";

const DisplayGigsComponent = ({
  navigation,
  data,
  action,
  setLoading,
  setgigs,
}) => {
  return (
    <TouchableOpacity
      style={styles.gigscontainer}
      onLongPress={() => {
        Alert.alert("Delete Gig?", "Click YES,If you want to delete this GIG", [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              setLoading(true);
              deleteGig(data.id, setgigs, setLoading);
            },
          },
        ]);
      }}
      onPress={() => {
        action();
      }}
    >
      <View style={{ alignItems: "center", flexDirection: "row", flex: 1 }}>
        <View>
          <Image
            style={styles.profilepicture}
            source={require("../../assets/image.jpg")}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingLeft: 10,
            flex: 1,
            height: 110,
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              style={styles.infoicons}
              raised
              name="user-md"
              type="font-awesome"
              color="#f50"
              size={18}
            />
            <Text style={styles.texttitle}>Gig Name</Text>
          </View>

          <Text style={styles.textdata}>{data.data.Title}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              style={styles.infoicons}
              raised
              name="coins"
              type="font-awesome"
              color="#f50"
              size={18}
            />
            <Text style={styles.texttitle}>Price</Text>
          </View>

          <Text style={styles.textdata}>{data.data.Cost} </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              style={styles.infoicons}
              raised
              name="clock"
              type="font-awesome"
              color="#f50"
              size={18}
            />
            <Text style={styles.texttitle}>Timings</Text>
          </View>

          <Text style={styles.textdata}>{data.data.Time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profilepicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 6,
  },
  texttitle: {
    fontWeight: "bold",
    marginBottom: 1,
    fontSize: 17,
  },
  textdata: {
    fontWeight: "400",
    marginBottom: 10,
    marginTop: 1,
    paddingLeft: 21,
  },
  gigscontainer: {
    backgroundColor: "#f8f8f8",
    maxWidth: Dimensions.get("window").width,
    height: 150,
    borderWidth: 0.9,
    borderRadius: 15,
    borderColor: "#cfcfcf",
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 10,
  },
  infoicons: {
    marginRight: 5,
    // marginTop:3
  },
});

export default DisplayGigsComponent;
