import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8,
    },
    TopBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: '5%' },
    TopText: {
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
    },
    SearchResults: {
        marginVertical: '5%'
    },
    SearchResultsHeading: {
        fontSize: 32,
        fontWeight: 'bold',
    },
});
