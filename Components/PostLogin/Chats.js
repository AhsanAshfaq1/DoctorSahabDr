import * as React from 'react';
import { Button, Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';
import { styles } from '../../Styles/PostLoginStyles/ChatsStyles';
import { Image, Avatar, Icon, Input } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

const Chat = (props) => {
    return (
        <TouchableOpacity style={styles.ChatContainer}
            onPress={() => {
                props.setTabBarHeight(0)
                props.navigation.navigate("Messages", { setTabBarHeight: props.setTabBarHeight })
            }
            }>
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
                <Text numberOfLines={1} style={{ color: 'grey', maxWidth: '90%' }}>
                    This is just a random test message to check how many values can be displayed at a time
                </Text>
            </View>
        </TouchableOpacity >
    )
}

// import { createStackNavigator } from "@react-navigation/native-stack";

export const ChatList = ({ route, navigation }) => {
    let arr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    return (
        <SafeAreaView style={styles.container}>
            {/* Use Flat List to Display Chats*/}
            <FlatList
                key={Math.random()}
                data={arr}
                keyExtractor={(data, index) => index.toString()}
                renderItem={() => <Chat setTabBarHeight={route.params.setTabBarHeight} navigation={navigation} />
                }
            />
        </SafeAreaView>
    );
}

const Messages = ({ route, navigation }) => {
    navigation.setOptions({
        headerTitle: (props) => ( // App Logo
            <TouchableOpacity onPress={() => {
                alert("Show Respective Screen")
            }}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                    size={48}
                    rounded
                    source={require("../../assets/dp.png")}
                />
                <Text style={{ marginHorizontal: '5%', fontSize: 18, fontFamily: 'serif', paddingTop: 4, fontWeight: 'bold', height: "100%" }}>Usama Yaseen</Text>
            </TouchableOpacity >
        ),
        headerLeft: () =>
            <Icon name="chevron-left" type="feather" color={"#5D19FC"} size={32}
                onPress={() => { route.params.setTabBarHeight(null), navigation.goBack() }}
            />,
        headerRight: () => (
            <Icon name="phone-call" type="feather" style={{ marginRight: 15 }} color={"blue"} size={24} />
        ),
    }
    )
    const [msg, onChangeMsg] = React.useState('');
    const [GallaryStatus, setGallaryStatus] = React.useState(false);
    const [CameraStatus, setCameraStatus] = React.useState(false);
    const [MicStatus, setMicStatus] = React.useState(false);
    const [SendStatus, setSendStatus] = React.useState(true);
    const [InputWidth, setInputWidth] = React.useState("50%");
    React.useEffect(() => {
        console.log(SendStatus)
        if (SendStatus) {
            setInputWidth("50%");
            setGallaryStatus(false);
            setCameraStatus(false);
            setMicStatus(false);
        }
        else {
            setInputWidth("80%")
            setGallaryStatus(true);
            setCameraStatus(true);
            setMicStatus(true);
        }
    }, [SendStatus])
    
    let abc = [{ text: "Hi Boy! Kaisa hai?", sent: true, type: "Message" },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    { sent: false, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Zinda hoon, Pta nae kyun", sent: false },
    { type: "Message",text: "KOi nae Bro Sab heek ho jayay ga fiqr na kr...", sent: true },
    { type: "Message",text: "Kuch theek nae hoga💔", sent: false },
    { type: "Message",text: "Easy ho ja larky, khud pr focus kr r bhool ja usy", sent: true },
    { type: "Message",text: "Pyar hai koi button to nae hai", sent: false },
    { type: "Message",text: "K press kiya or sab bhool gyay", sent: false },
    { type: "Message",text: "Acha Easy ho ja", sent: true },
    { sent: true, type: "Img", src: "../../assets/dp.png" },
    { type: "Message",text: "Try kr rha hoon...", sent: false },
    { type: "Message",text: "Try hi to kr skta hoon zyada se zyada", sent: false },
    { type: "Message",text: "Chill kr ..", sent: true },
    ]
    return (
        <View>
            <FlatList
                style={{ paddingBottom: '10%', height: '90%' }}
                key={Math.random()}
                data={abc}
                inverted={true}
                keyExtractor={(data, index) => index.toString()}
                renderItem={(x) => {
                    return (
                        <TextMessage Data={x.item} />
                    )
                }}
            />
            <View
                style={{
                    width: '95%', alignSelf: 'center', height: '7%', marginVertical: '2%',
                    backgroundColor: 'white',
                    elevation: 5,
                    borderRadius: 20,
                    paddingHorizontal: '2%',
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
                }}>
                <Icon name="emoji-happy" type="entypo" size={28} color="grey" />
                <Input
                    placeholder='Enter Text Message'
                    onChangeText={text => {
                        if (text.length >= 1) {
                            setSendStatus(false);
                        }
                        else {
                            setSendStatus(true);
                        }
                        onChangeMsg(text)
                    }}
                    value={msg}
                    containerStyle={{
                        width: InputWidth,
                        paddingHorizontal: 0,
                    }}
                    inputContainerStyle={{
                        width: "100%",
                        borderBottomWidth: 0
                    }}
                    errorStyle={{ height: 0, padding: 0, margin: 0 }}
                    inputStyle={{ fontSize: 16, padding: 10, }}
                />
                <Icon name="send" type="feather" size={24} disabled={SendStatus} disabledStyle={{ width: 0, height: 0 }} onPress={() => alert("Pressed Galary")} color="blue" />
                <Icon name="image" type="entypo" size={24} disabled={GallaryStatus} disabledStyle={{ width: 0, height: 0 }} onPress={() => alert("Pressed Galary")} color="grey" />
                <Icon name="camera" type="font-awesome" size={24} disabled={CameraStatus} disabledStyle={{ width: 0, height: 0 }} onPress={() => alert("Pressed Camera")} color="grey" />
                <Icon name="microphone" type="simple-line-icon" size={24} disabled={MicStatus} disabledStyle={{ width: 0, height: 0 }} onPress={() => alert("Pressed Mic")} color="grey" />
            </View>
        </View>
    )
}

const TextMessage = (props) => {
    return (
        <View style={{ marginHorizontal: '3%', alignItems: props.Data.sent ? "flex-end" : "flex-start" }}>
            {
                props.Data.type == "Message" ?
                    <Text style={{
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        maxWidth: '70%',
                        fontSize: 16,
                        color: props.Data.sent ? 'white' : 'black',
                        backgroundColor: props.Data.sent ? "#5D19FC" : '#EEEEEE',
                        elevation: 5,
                        borderRadius: 10,
                        borderTopLeftRadius: props.Data.sent ? 10 : 0,
                        borderTopRightRadius: props.Data.sent ? 0 : 10
                    }}>
                        {props.Data.text}
                    </Text>
                    :
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={require("../../assets/dp.png")}
                    />
            }
            <Text style={{
                marginBottom: '2%',
                marginLeft: '2%'
            }}>
                0:59
            </Text>
        </View>)
}


const Stack = createStackNavigator();

export const Chats = ({ route }) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="ChatList"
                    initialParams={{ setTabBarHeight: route.params.setTabBarHeight }}
                    options={{
                        title: "Chats",
                        headerStyle: {
                            borderBottomWidth: 0.55
                        },
                    }} component={ChatList} />
                <Stack.Screen name="Messages"
                    initialParams={{ setTabBarHeight: route.params.setTabBarHeight }}
                    component={Messages} />
            </Stack.Navigator>
        </>
    );
}