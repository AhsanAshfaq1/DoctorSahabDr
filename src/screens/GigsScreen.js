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
  FlatList,
} from "react-native";
import GigsComponent from "../components/ListofGigsComponent";
import { getdoctordata, getgigsdata } from "../DataBase/firestore";

const GigsScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [gigs, setgigs] = useState([]);
  const [doctor, setdoctor] = React.useState();
  useEffect(() => {
    getdoctordata(setdoctor);
    getgigsdata(setgigs, setLoading);
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // alert("On Screen of Gig");
      setLoading(true);
      getgigsdata(setgigs, setLoading);
    });
    return unsubscribe;
  }, [navigation]);

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
        <ActivityIndicator />
        <Text style={{ fontSize: 32 }}>Loading</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ marginBottom: "35%" }}
        data={gigs}
        renderItem={(e) => (
          <GigsComponent
            data={e.item}
            setgigs={setgigs}
            setLoading={setLoading}
            navigation={navigation}
            action={() => {
              navigation.navigate("ViewGig", { data: e.item, docdata: doctor });
            }}
          />
        )}
        keyExtractor={(data, index) => index.toString()}
      />
    </SafeAreaView>
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
