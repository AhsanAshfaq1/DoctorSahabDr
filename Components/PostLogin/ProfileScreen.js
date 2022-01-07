import React from "react";
import {Text,View, SafeAreaView, StyleSheet,Dimensions, ScrollView ,Image ,TouchableOpacity} from "react-native";


const ProfileScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}> 
      <ScrollView>
       <View >
          <Image
            style={styles.profilepic} 
            source={require('../../assets/image.jpg')}
          />
          <Text style={styles.profilename}>Name</Text>
          <View style={styles.holder}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 50,width:'100%',justifyContent:"center" }}>
          <Text style={styles.btntext}>About</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#FFF",
    height:Dimensions.get("window").height
  },
  profilepic:{
    height:100,
    width:100,
    borderRadius:100,
    alignSelf:"center",
    marginTop:20,
  },
  profilename: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 30,
    marginTop:10
  },
  holder:{
    backgroundColor:"#f8f8f8",
    maxWidth: Dimensions.get("window").width,
    height: 150,
    borderWidth: 0.9,
    borderRadius: 15,
    borderColor: "#cfcfcf",
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 10,
  },
  btn:{
    height: 50,
    width:'100%',
    borderBottomWidth: 0.9,
    justifyContent:"center",
    borderColor: "#cfcfcf",
  },
  btntext:{
    fontSize:18,
    paddingLeft: 10,
  }
});

export default ProfileScreen;
