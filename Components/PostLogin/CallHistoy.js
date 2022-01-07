import * as React from 'react';
import { Button, Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import { Image, Avatar, Icon, Input } from 'react-native-elements';
import { styles } from '../../Styles/PostLoginStyles/CallHistoryStyles';


const Chat = (props) => {
    return (
        <View style={styles.ChatContainer}>
            <View style={styles.DpContainer}>
                <Avatar
                    size={64}
                    rounded
                    source={require("../../assets/dp.png")}
                />
            </View>
            <View style={styles.ChatInfoContainer}>
                <View style={styles.ChatInfoTop}>
                    <Text style={styles.ChatInfoName}>
                        Usama Yaseen
                    </Text>
                    <Text style={styles.ChatInfoTime}>
                        5:10
                    </Text>
                </View>
                <Text style={{ color: 'grey' }}>
                    9 Min 42 Sec
                </Text>
            </View>
        </View>
    )
}

import { createStackNavigator } from '@react-navigation/stack';

export const Calls_List = ({ route, navigation }) => {
    let arr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    return (
        <SafeAreaView style={styles.container}>
            {/* Use Flat List to Display Chats*/}
            <FlatList
                key={Math.random()}
                data={arr}
                keyExtractor={(data, index) => index.toString()}
                renderItem={() => <Chat navigation={navigation} />
                }
            />
        </SafeAreaView>
    );
}
const Stack = createStackNavigator();
export const CallHistory = ({ route }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CallHistory"
                options={{
                    title: "Calls History",
                    headerStyle: {
                        borderBottomWidth: 0.55
                    },
                }} component={Calls_List} />
        </Stack.Navigator>
    );
}