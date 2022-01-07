import React from "react";
import {Text,View, SafeAreaView, StyleSheet,Dimensions, ScrollView} from "react-native";
import BookingComponent from "./ListofBookingsComponent"

const Data = [
  "Dr.Nimra Zaffar",
  require('../../assets/image.jpg'),
  "sergon",
  "$543",
  "5am - 10pm Weekdays",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias suscipit accusamus. Eaque nulla mollitia, doloremque commodi, suscipit eligendi minima repudiandae rerum quo velit maiores nobis atque est sint laboriosam.",
  "10street hsotel cdjsgjs",
]



const BookingsScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
    <SafeAreaView > 
       <View >
        <BookingComponent data={Data} action={()=>{navigation.navigate('ViewBookings',Data)}}/>
        <BookingComponent data={Data} action={()=>{navigation.navigate('ViewBookings',Data)}}/>
        <BookingComponent data={Data} action={()=>{navigation.navigate('ViewBookings',Data)}}/>
        <BookingComponent data={Data} action={()=>{navigation.navigate('ViewBookings',Data)}}/>
        <BookingComponent data={Data} action={()=>{navigation.navigate('ViewBookings',Data)}}/>
        <BookingComponent data={Data} action={()=>{navigation.navigate('ViewBookings',Data)}}/>
        </View>
        </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#FFFF",
    height:Dimensions.get("window").height
  },
  profilename: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
  },
});

export default BookingsScreen;
