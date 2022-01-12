import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Linking } from "react-native";
import { MessagesStyles } from "../../Styles/PostLoginStyles/ChatsStyles";
import { ChatStyles } from "../../Styles/PostLoginStyles/ChatsStyles";
import { Image, Avatar, Icon, Input } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { LogBox } from "react-native";
import { db } from "../firestore";
import { collection, query, getDocs, where, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
LogBox.ignoreAllLogs();

const auth = getAuth();
import { Send_Message, get_Chats } from "../Chating";

const Messages = ({ route, navigation }) => {
  navigation.setOptions({
    headerTitle: (props) => (
      <TouchableOpacity style={{ flexDirection: "row" ,marginLeft:-115,marginBottom:10}}>
        <Avatar size={48} rounded source={require("../../assets/dp.png")} />
        <Text style={MessagesStyles.headerAviImg}>{route.params.Name}</Text>
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <Icon
        name="chevron-left"
        type="feather"
        // color={"#5D19FC"}
        size={32}
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          let phoneNumber = "03014749335";
          if (phoneNumber == null) {
            alert("No Number Found");
          } else {
            Linking.openURL(`tel:${phoneNumber}`);
          }
        }}
      >
        <Icon
          name="phone-call"
          type="feather"
          style={{ marginRight: 15 }}
          color={"blue"}
          size={24}
        />
      </TouchableOpacity>
    ),
  });
  const [msg, onChangeMsg] = React.useState("");
  const [IconDisabled, setIconDisabled] = React.useState({
    Gallary: false,
    Camera: false,
    Mic: false,
    Send: true,
    InputWidth: "50%",
  });
  const [messages, setMessages] = useState([]);

  const [isLoading, setLoading] = React.useState(true);

  useEffect(async () => {
    const q = query(
      collection(db, "Messages"),
      where("Client_id", "==", route.params.Email),
      where("Doctor_id", "==", auth.currentUser.email)
    );
    const querySnapshot = await getDocs(q);
    let id_Found = false;
    querySnapshot.forEach((data) => {
      id = data.id;
      id_Found = true;
      setMessages(data.data());
      setLoading(false);
    });
    if (id_Found) {
      const unsubscribe = onSnapshot(
        doc(db, "Messages", id),
        (querySnapshot) => {
          if (id_Found) id_Found = false;
          else {
            setMessages(querySnapshot.data());
          }
        }
      );
      return () => unsubscribe();
    }
  }, []);

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
        <ActivityIndicator  />
        <Text style={{ fontSize: 20 }}>Loading Msgs</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        style={MessagesStyles.FlatList}
        key={Math.random()}
        data={messages.Msgs.slice().reverse()}
        inverted={true}
        keyExtractor={(data, index) => index.toString()}
        renderItem={(x) => {
          return <TextMessage Data={x.item} />;
        }}
      />
      <View style={MessagesStyles.MessageBar}>
        <Icon name="emoji-happy" type="entypo" size={28} color="grey" />
        <Input
          placeholder="Enter Text Message"
          onChangeText={(text) => {
            if (text.length == 1) {
              let temp = {
                InputWidth: "80%",
                Gallary: true,
                Camera: true,
                Mic: true,
                Send: false,
              };
              setIconDisabled(temp);
            }
            if (text.length == 0) {
              let temp = {
                InputWidth: "50%",
                Gallary: false,
                Camera: false,
                Mic: false,
                Send: true,
              };
              setIconDisabled(temp);
            }
            onChangeMsg(text);
          }}
          value={msg}
          containerStyle={{
            width: IconDisabled.InputWidth,
            paddingHorizontal: 0,
          }}
          inputContainerStyle={MessagesStyles.MessageBarInputContainer}
          errorStyle={MessagesStyles.MessageBarError}
          inputStyle={MessagesStyles.MessageBarInput}
        />
        <Icon
          name="send"
          type="feather"
          size={24}
          disabled={IconDisabled.Send}
          disabledStyle={{ width: 0, height: 0 }}
          onPress={() => {
            var today = new Date();
            var date =
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate();
            var time =
              today.getHours() +
              ":" +
              today.getMinutes() +
              ":" +
              today.getSeconds();
            var dateTime = date + " " + time;

            let new_msg = {
              type: "Message",
              text: msg,
              Sender: "Doctor",
              time: dateTime,
            };

            Send_Message(route.params.Email, new_msg, time);
            let temp_arr = messages;
            temp_arr.Msgs.push(new_msg);
            setMessages(temp_arr);
            onChangeMsg("");
            let temp = {
              InputWidth: "50%",
              Gallary: false,
              Camera: false,
              Mic: false,
              Send: true,
            };
            setIconDisabled(temp);
          }}
          color="blue"
        />
        <Icon
          name="image"
          type="entypo"
          size={24}
          disabled={IconDisabled.Gallary}
          disabledStyle={{ width: 0, height: 0 }}
          onPress={() => alert("Pressed Galary")}
          color="grey"
        />
        <Icon
          name="camera"
          type="font-awesome"
          size={24}
          disabled={IconDisabled.Camera}
          disabledStyle={{ width: 0, height: 0 }}
          onPress={() => alert("Pressed Camera")}
          color="grey"
        />
        <Icon
          name="microphone"
          type="simple-line-icon"
          size={24}
          disabled={IconDisabled.Mic}
          disabledStyle={{ width: 0, height: 0 }}
          onPress={() => alert("Pressed Mic")}
          color="grey"
        />
      </View>
    </View>
  );
};

const TextMessage = (props) => {
  let sent = props.Data.Sender == "Doctor" ? true : false;
  return (
    <View
      style={{
        marginHorizontal: "3%",
        alignItems: sent ? "flex-end" : "flex-start",
      }}
    >
      {props.Data.type == "Message" ? (
        <Text
          style={[
            MessagesStyles.TextMessageText,
            {
              color: sent ? "white" : "black",
              backgroundColor: sent ? "#5D19FC" : "#EEEEEE",
              borderTopLeftRadius: sent ? 10 : 0,
              borderTopRightRadius: sent ? 0 : 10,
            },
          ]}
        >
          {props.Data.text}
        </Text>
      ) : (
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/dp.png")}
        />
      )}
      <Text style={MessagesStyles.TextMessageTime}>0:59</Text>
    </View>
  );
};

export const ChatList = ({ route, navigation }) => {
  let [Chats, setChats] = useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    get_Chats(setChats, setLoading, route.params.MyDetails.email);
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true);
      get_Chats(setChats, setLoading, route.params.MyDetails.email);
    });

    return unsubscribe;
  }, []);

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
        <Text style={{ fontSize: 32 }}>Loading Chats</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={ChatStyles.container}>
      {/* Use Flat List to Display Chats */}
      <FlatList
        key={Math.random()}
        data={Chats}
        keyExtractor={(data, index) => index.toString()}
        renderItem={(data) => (
          <Chat
            Name={data.item.Client_Name}
            Last_Msg={data.item.Last_Msg}
            Client_id={data.item.Client_id}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

const Chat = (props) => {
  return (
    <TouchableOpacity
      style={ChatStyles.ChatContainer}
      onPress={() => {
        props.navigation.navigate("Messages", {
          Email: props.Client_id,
          Name: props.Name,
        });
      }}
    >
      <View style={ChatStyles.DpContainer}>
        <Avatar size={64} rounded source={require("../../assets/dp.png")} />
      </View>
      <View style={ChatStyles.ChatInfoContainer}>
        <View style={ChatStyles.ChatInfoTop}>
          <Text style={ChatStyles.ChatInfoName}>{props.Name}</Text>
          <Text style={ChatStyles.ChatInfoTime}>5:10</Text>
        </View>
        <Text numberOfLines={1} style={{ color: "grey", maxWidth: "90%" }}>
          {props.Last_Msg}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const Stack = createStackNavigator();
export const Chats = ({ route }) => {
  return (
    <>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen
          name="ChatList"
          initialParams={{
            setTabBarHeight: route.params.setTabBarHeight,
            MyDetails: route.params.MyDetails,
          }}
          options={{
            title: "Chats",
            headerStyle: {
              borderBottomWidth: 0.55,
            },
          }}
          component={ChatList}
        />
        <Stack.Screen
          name="Messages"
          initialParams={{ setTabBarHeight: route.params.setTabBarHeight }}
          component={Messages}
        />
      </Stack.Navigator>
    </>
  );
};
