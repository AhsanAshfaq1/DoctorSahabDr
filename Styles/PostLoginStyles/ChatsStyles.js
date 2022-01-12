import { StyleSheet } from 'react-native';
export const ChatStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    TopText: {
        paddingVertical: 20,
        marginHorizontal: 15,
        fontSize: 32,
    },
    ChatContainer: {
        flexDirection: 'row',
        elevation: 10,
        borderRadius: 15,
        backgroundColor: '#efefef',
        paddingTop:5,
        paddingBottom:10,
        paddingHorizontal:5,
        marginHorizontal: "5%",
        marginVertical: "2.5%",
    },
    DpContainer: {
        justifyContent: 'center',
        marginHorizontal: '2%',
    },
    ChatInfoContainer: { width: '75%', justifyContent: 'center', },
    ChatInfoTop: { flexDirection: 'row', justifyContent: 'space-between', },
    ChatInfoName: { fontSize: 24, fontWeight: 'bold', color: 'black', },
    ChatInfoTime: { textAlignVertical: 'center', color: 'blue', lineHeight: 42 },
});

export const MessagesStyles = StyleSheet.create({
    headerAviImg: {
        marginHorizontal: "5%",
        fontSize: 18,
        fontFamily: "serif",
        paddingTop: 4,
        fontWeight: "bold",
        height: "100%",
    },
    FlatList: { paddingBottom: "10%", height: "90%" },
    MessageBar: {
        width: "95%",
        alignSelf: "center",
        height: "7%",
        marginVertical: "2%",
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 20,
        paddingHorizontal: "2%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    MessageBarInputContainer: {
        width: "100%",
        borderBottomWidth: 0,
    },
    MessageBarError: { height: 0, padding: 0, margin: 0 },
    MessageBarInput: { fontSize: 16, padding: 10 },

    TextMessageText: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        maxWidth: "70%",
        fontSize: 16,
        elevation: 5,
        borderRadius: 10,
    },
    TextMessageTime: {
        marginBottom: "2%",
        marginLeft: "2%",
    },
});