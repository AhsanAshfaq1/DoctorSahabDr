import { Text, SafeAreaView, StyleSheet, ScrollView, Button } from "react-native";
import GigsComponent from "../components/GigsComponent";

const Data = [
  "Dr.Nimra Zaffar",
  require('../../assets/image.jpg'),
  "sergon",
  "$543",
  "5am - 10pm Weekdays",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias suscipit accusamus. Eaque nulla mollitia, doloremque commodi, suscipit eligendi minima repudiandae rerum quo velit maiores nobis atque est sint laboriosam.",
  "10street hsotel cdjsgjs",
]



const GigsScreen = ({navigation}) => {

  // const [Data, setData] = useState([])

  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={styles.profilename}>{Data.name} </Text>
        <GigsComponent data={Data} action={()=>{navigation.navigate('Gig',Data)}}/>
        <Button 
        title="Profile"
        onPress={() => {navigation.navigate('NewGig')}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profilename: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
  },
});

export default GigsScreen;
