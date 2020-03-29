import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const GlobalStyles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        flex: 1,
    },
    title: {
        alignSelf: "center",
        color: "#1a237e",
        fontSize: 30
    },
    sectionContainer: {
        flex: 1,
        alignItems: "center",
        maxWidth: "70%"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    itemList: {
        height: 50,
        alignSelf: "stretch"
    },
    langs: {
        paddingLeft: 20
    },
    inLine: { alignSelf: "stretch" },
    smBtn: {
        width: 20,
        height: 5,
        maxHeight: 5
    },
    whiteColor: {
        color: "white"
    },
    info: {
        backgroundColor: "#33b5e5",
        color: "white"
    },
    success: {
        backgroundColor: "#00C851", color: "white"
    },
    warn: {
        backgroundColor: "#ffbb33", color: "white"
    },
    error: {
        backgroundColor: "#ff4444", color: "white"
    }

});

export default GlobalStyles