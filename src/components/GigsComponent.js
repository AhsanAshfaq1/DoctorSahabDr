import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const GigsComponent = ({data , action}) => {
  return (
        <TouchableOpacity style={styles.gigscontainer} onPress={()=>{action()}} >
          <View style={{ alignItems: "center", flexDirection: "row", flex: 1 }}>
            <View>
              <Image
                style={styles.profilepicture}
                source={data[1]}
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

              <Text style={styles.textdata}>{data[2]}</Text>

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

              <Text style={styles.textdata}>{data[3]} </Text>

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

              <Text style={styles.textdata}>{data[4]}</Text>
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

export default GigsComponent;
