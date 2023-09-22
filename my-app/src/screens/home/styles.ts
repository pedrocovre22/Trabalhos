import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    input: {
        color: '#000',
        backgroundColor: "#fff",
        borderRadius: 5,
        fontWeight: "200",
        width: '60%',
        margin: 10,
        padding: 10,

    },

    btn: {
        backgroundColor: "red",
        fontSize: 14,
        width: '60%',
        margin: 10,
        padding: 15,
        marginBottom: 5,
        alignItems: 'center',
    },

    btnTxT: {
        color: "#fff",
        fontFamily: "Arial",
        fontWeight: "600",
    },

    txt: {
        fontSize: 14,
        color: "#fff"
    }
});