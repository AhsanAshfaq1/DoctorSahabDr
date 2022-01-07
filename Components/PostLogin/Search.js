import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { styles } from '../../Styles/PostLoginStyles/Search';
import { Avatar, Icon, Input } from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Search = ({ route }) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Search "
                    options={{
                        title: "Search",
                        headerStyle: {
                            borderBottomWidth: 0.55
                        },
                    }} component={SearchScreen} />
            </Stack.Navigator>
        </>
    );
}


const SearchScreen = () => {
    let arr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.TopBar}>
                <Text style={styles.TopText}>Find a best doctor{"\n"}near you</Text>
                <Avatar
                    size={64}
                    rounded
                    source={require("../../assets/icon.png")}
                />
            </View>
            <Input
                containerStyle={{ padding: 5, backgroundColor: 'white', borderRadius: 20, elevation: 5, marginVertical: '5%' }}
                inputContainerStyle={{ borderBottomWidth: 0, paddingLeft: 5 }}
                inputStyle={{ paddingLeft: 10 }}
                errorStyle={{ margin: 0, height: 0, borderWidth: 0, }}
                placeholder='Search Doctor'
                leftIcon={() => <Icon name='search' type='font-awesome' size={16} color={"grey"} />}
                rightIcon={() => <Icon name='doubleright' onPress={()=>alert("Searching")} type='antdesign' size={48} style={{ borderRadius: 10, width: 48, height: 48, justifyContent: 'center' }} color={"blue"} />}
            />
            <View style={styles.SearchResults}>
                <Text style={styles.SearchResultsHeading}>{"Services"}</Text>
                <FlatList
                    key={Math.random()}
                    data={arr}
                    keyExtractor={(data, index) => index.toString()}
                    renderItem={(x) => <Gig />
                    }
                />
            </View>
        </SafeAreaView>
    );
}
const Gig = () => {
    return (
        <View style={{ elevation: 10, backgroundColor: 'white', borderRadius: 15, width: "95%",alignSelf:'center', padding: 15, marginVertical: '2%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold", alignSelf: 'flex-start'
                    }}>Dr. Thomas Anthony</Text>
                    <Text style={{
                        fontSize: 16,
                        color: 'grey', alignSelf: 'flex-start'
                    }}>Heart Surgeon</Text>
                </View>
                <Avatar
                    rounded
                    size={64}
                    source={require("../../assets/dp.png")}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Icon name="star" type="feather"
                    size={28} color="blue" />
                <Text style={{ fontSize: 18 }}>4.5</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, color: 'blue',textAlignVertical:'center' }}>Available for Hire</Text>
                <TouchableOpacity
                    style={{
                        width: 150,
                        height: 50,
                        padding: 5,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        backgroundColor: "blue",
                    }}
                    onPress={() => alert("Take Appoitnments")}
                >
                    <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 16, color: 'white' }}>
                        Book Appointment
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}