import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  ActivityIndicator,
  FlatList
} from "react-native";
import GigsComponent from "../components/ListofGigsComponent";
import { getgigsdata } from "../DataBase/firestore";

const GigsScreen = ({ navigation }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [gigs, setgigs] = useState([]);

  getgigsdata(setgigs ,setLoading)
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="blue" />
        <Text style={{ fontSize: 32 }}>Loading</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <FlatList
        data={gigs}
        renderItem={(e)=>
          <GigsComponent data={e.item} action={()=>{navigation.navigate('ViewGigs',gigs)}}/>
        } 
      />   
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: Dimensions.get("window").height,
  },
  profilename: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
  },
});

export default GigsScreen;
