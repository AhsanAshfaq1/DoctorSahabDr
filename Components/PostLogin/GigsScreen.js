import React,{useState,useEffect} from "react";
import { Text, View, SafeAreaView, StyleSheet,Dimensions, ScrollView, Button} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import GigsComponent from "./ListofGigsComponent";
import {getgigsdata } from "../firestore";



const GigsScreen = ({navigation}) => {
  
  const [gigs,setgigs] = useState([]);

  useEffect(() => {   
    getgigsdata(setgigs)
  },[]);
  
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}> 
       <View >
       {gigs.map((gigs) => {<GigsComponent data={gigs} action={()=>{navigation.navigate('ViewGigs',gigs)}} />} )}
        </View>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#FFF",
    height:Dimensions.get("window").height
  },
  profilename: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
  },
});

export default GigsScreen;
