import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const DisplayBookingComponent = ({ data, action }) => {
  return (
    <View style={styles.gigscontainer}>
      <View style={{ alignItems: "center", flexDirection: "row", flex: 1 }}>
        <View>
          {/* <Image style={styles.profilepicture} source={data[1]} /> */}
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
              name="procedures"
              type="font-awesome"
              color="#f50"
              size={18}
            />
            <Text style={styles.texttitle}>Patient Name</Text>
          </View>

          <Text style={styles.textdata}>{data.Client_Name}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              style={styles.infoicons}
              raised
              name="exclamation-triangle"
              type="font-awesome"
              color="#f50"
              size={18}
            />
            <Text style={styles.texttitle}>Problem</Text>
          </View>

          <Text style={styles.textdata}>{data.Problem} </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              style={styles.infoicons}
              raised
              name="comment-medical"
              type="font-awesome"
              color="#f50"
              size={18}
            />
            <Text style={styles.texttitle}>Description</Text>
          </View>

          <Text style={styles.textdata}>{data.Description}</Text>
        </View>

      </View>
        <TouchableOpacity style={{alignSelf:"center",justifyContent:"center",margin:10,height:40,borderWidth:1,borderColor:"black",borderRadius:10,backgroundColor:"red"}} onPress={()=>action()}>
          <Text style={{padding:10}}>Start Chatting</Text>
        </TouchableOpacity>
    </View>
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
    paddingLeft: 28,
  },
  gigscontainer: {
    backgroundColor: "#f8f8f8",
    maxWidth: Dimensions.get("window").width,
    height: 190,
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

export default DisplayBookingComponent;
