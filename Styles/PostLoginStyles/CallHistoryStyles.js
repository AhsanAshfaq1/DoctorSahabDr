import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
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
        backgroundColor: 'white',
        marginTop: "5%",
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
