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
        borderRadius: 6,
    },

    btnTxT: {
        color: "#fff",
        fontFamily: "Arial",
        fontWeight: "600",
    },
    txt: {
        fontSize: 14,
        color: "#fff"
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: '#FFF',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    detalhesConsulta: {
        backgroundColor: '#E0E0E0',
        padding: 16,
        marginTop: 10,
    },
});