import React from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Button,
} from "react-native";
import { showLocation } from "react-native-map-link";
import { Image, Avatar, Input, Icon } from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Profile = ({ route }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile Screen"
                options={{
                    title: "Profile",
                    headerStyle: {
                        borderBottomWidth: 0.5
                    },
                }} component={ProfileScreem} />
        </Stack.Navigator>
    );
}


const openmaps = () => {
    showLocation({
        latitude: 33.7028,
        longitude: 73.0533,
        sourceLatitude: 33.6518, // optionally specify starting location for directions
        sourceLongitude: 73.1566, // not optional if sourceLatitude is specified
        title: "Comsats", // optional
        googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
        googlePlaceId: "ChIJGVtI4by3t4kRr51d_Qm_x58", // optionally specify the google-place-id
        alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
        dialogTitle: "This is the dialog Title", // optional (default: 'Open in Maps')
        dialogMessage: "This is the amazing dialog Message", // optional (default: 'What app would you like to use?')
        cancelText: "This is the cancel button text", // optional (default: 'Cancel')
        appsWhiteList: ["google-maps"], // optionally you can set which apps to show (default: will show all supported apps installed on device)
        naverCallerName: "com.example.myapp", // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
        // appTitles: { 'google-maps': 'My custom Google Maps title' }, // optionally you can override default app titles
        // app: 'uber',  // optionally specify specific app to use
        directionsMode: "walk", // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
    });
};

const ProfileScreem = ({ navigation, route }) => {
    let data = [
        "Dr.Nimra Zaffar",
        require('../../assets/icon.png'),
        "sergon",
        "$543",
        "5am - 10pm Weekdays",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias suscipit accusamus. Eaque nulla mollitia, doloremque commodi, suscipit eligendi minima repudiandae rerum quo velit maiores nobis atque est sint laboriosam.",
        "10street hsotel cdjsgjs",
    ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ justifyContent: "space-evenly", alignItems: 'center', padding: '2%' }}>

                <Avatar rounded

                    style={{ width: '90%', aspectRatio: 1.75 / 1 }}
                    source={require("../../assets/dp.png")}
                />

                <View style={{
                    marginVertical: '5%',
                    width: '100%'
                }}>

                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold", alignSelf: 'flex-start'
                    }}>Dr. Thomas Anthony</Text>
                    <Text style={{
                        fontSize: 16,
                        color: 'grey', alignSelf: 'flex-start'
                    }}>Heart Surgeon</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginVertical: '5%',
                    width: '100%'
                }}>
                    <View style={styles.Achievments_Container}>
                        <Icon name="user" type="entypo"
                            size={28} color="blue" />
                        <Text >Patients</Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>900+</Text>
                    </View>
                    <View style={styles.Achievments_Container}>
                        <Icon name="medal" type="font-awesome-5"
                            size={28} color="blue" />
                        <Text >Experience</Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>10 Y+</Text>
                    </View>
                    <View style={styles.Achievments_Container}>
                        <Icon name="star" type="feather"
                            size={28} color="blue" />
                        <Text >Rating</Text>
                        <Text style={{
                            fontWeight: "bold",
                        }}>Avg 4.5</Text>
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontSize: 28,
                        fontWeight: "bold",
                    }}>Gig Details</Text>
                    <Text style={{
                        fontSize: 16,
                    }}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View >
                            <Text style={{
                                fontSize: 42,
                                fontWeight: "bold",
                            }}>Cost</Text>
                            <Text style={{
                                fontSize: 24,
                            }}>100$</Text>
                        </View>

                        <Icon
                            name="direction" type="entypo" size={48} color={'blue'}
                            onPress={() => openmaps()}
                        />

                    </View>
                </View>
                <View
                    style={{
                        width: '100%'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 150,
                            height: 50,
                            padding: 5,
                            alignSelf: "center",
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: 'center',
                            marginVertical: '5%',
                            backgroundColor: "orange",
                        }}
                        onPress={() => openmaps()}
                    >
                        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 16, color: 'white' }}>
                            Book Appointment
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* </ImageBackground> */}
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    Achievments_Container: {
        backgroundColor: "white",
        width: 100,
        height: 120,
        borderRadius: 10,
        paddingVertical: '2%',
        justifyContent: "space-evenly",
        elevation: 5,
        alignItems: 'center'
    },
    getAddress: {
        height: 50,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: "blue",
    }

});

