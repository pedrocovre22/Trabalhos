import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const dadosConsultas = [
    {
        id: 1,
        name: "Cristiano Ronaldo",
        position: "Forward",
        age: 36,
    },
    {
        id: 2,
        name: "Lionel Messi",
        position: "Attacking Midfielder",
        age: 34,
    },
    {
        id: 3,
        name: "Neymar Jr.",
        position: "Forward",
        age: 29,
    },
    {
        id: 4,
        name: "Kylian Mbappé",
        position: "Forward",
        age: 23,
    },
    {
        id: 5,
        name: "Sergio Ramos",
        position: "Defender",
        age: 35,
    },
    {
        id: 6,
        name: "Kevin De Bruyne",
        position: "Midfielder",
        age: 30,
    },
    {
        id: 7,
        name: "Robert Lewandowski",
        position: "Forward",
        age: 32,
    },
    {
        id: 8,
        name: "Virgil van Dijk",
        position: "Defender",
        age: 30,
    },
    {
        id: 9,
        name: "Luka Modric",
        position: "Midfielder",
        age: 35,
    },
    {
        id: 10,
        name: "Erling Haaland",
        position: "Forward",
        age: 21,
    },
];


export function ScreenC() {
    const [consultaSelecionada, setConsultaSelecionada] = useState(null);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>Nome: {item.name}</Text>

            <TouchableOpacity style={styles.btn} onPress={() => handleVisualizar(item)}>
                <Text style={styles.btnTxT}>
                    {consultaSelecionada === item.id ? 'Ocultar' : 'Visualizar'}
                </Text>
            </TouchableOpacity>

            {consultaSelecionada === item.id && (
                <View style={styles.detalhesConsulta}>
                    <Text>Posição: {item.position}</Text>
                    <Text>Idade: {item.age}</Text>
                </View>
            )}
        </View>
    );

    function handleVisualizar(item) {
        if (consultaSelecionada === item.id) {
            setConsultaSelecionada(null);
        } else {
            setConsultaSelecionada(item.id);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informação dos Jogadores</Text>
            <FlatList
                data={dadosConsultas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}
