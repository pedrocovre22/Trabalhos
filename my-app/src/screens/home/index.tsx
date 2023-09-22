import { View, Text, TextInput, Touchable, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleUserAdd() {
        console.log(
            "Nome Completo:" + name
            + "\nE-mail:" + email
        );

        Alert.alert(
            "Nome Completo: " + name
            + "\nE-mail: " + email
        )

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput
                style={styles.input}
                placeholder="nome completo"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.txt}>{name}</Text>
            <TextInput
                style={styles.input}
                placeholder="e-mail"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.btnTxT}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}