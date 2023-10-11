import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function ScreenB() {

    const [name, setName] = useState('')
    const [idade, setIdade] = useState('')
    const [nac, setNac] = useState('')
    const [exp, setExp] = useState('')

    function handleUserAdd() {
        console.log(
            "Nome Completo:" + name
            + "\nIdade:" + idade
            + "\nNacionalidade: " + nac
            + "\nExperiência: " + exp
        );

        Alert.alert(
            "Nome Completo: " + name
            + "\nIdade: " + idade
            + "\nNacionalidade: " + nac
            + "\nExperiência: " + exp
        )

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <Text style={styles.txt}>{name}</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Técnico"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.txt}>{idade}</Text>
            <TextInput
                style={styles.input}
                placeholder="Idade"
                value={idade}
                onChangeText={setIdade}
            />

            <Text style={styles.txt}>{nac}</Text>
            <TextInput
                style={styles.input}
                placeholder="Nacionalidade"
                value={nac}
                onChangeText={setNac}
            />

            <Text style={styles.txt}>{exp}</Text>
            <TextInput
                style={styles.input}
                placeholder="Experiência"
                value={exp}
                onChangeText={setExp}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.btnTxT}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}