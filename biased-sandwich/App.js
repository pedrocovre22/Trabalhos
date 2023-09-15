import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('Feminino');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('Português'); 
  const [dados, setDados] = useState('');

  const handleCadastrar = () => {
 
    const dadosUsuario = {
      nome,
      genero,
      dataNascimento,
      usuario,
      senha,
      email,
      confirmarEmail,
      cpf,
      idioma,
    };
    console.log(dadosUsuario);
    setDados(JSON.stringify(dadosUsuario, null, 2));
  };


  const formatCPF = (text) => {

    const cleaned = text.replace(/\D/g, '');

    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    setCpf(formatted);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setNome}
      />
      <Picker
        style={styles.input}
        selectedValue={genero}
        onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
      >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (dd/mm/yyyy)"
        onChangeText={setDataNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={setUsuario}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          onChangeText={setSenha}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color={showPassword ? 'blue' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme seu E-mail"
        onChangeText={setConfirmarEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={formatCPF}
      />
      <Picker
        style={styles.input}
        selectedValue={idioma}
        onValueChange={(itemValue, itemIndex) => setIdioma(itemValue)}
      >
        <Picker.Item label="Português" value="Português" />
        <Picker.Item label="Inglês" value="Inglês" />
        <Picker.Item label="Espanhol" value="Espanhol" />
      </Picker>
      <Button title="CADASTRAR" onPress={handleCadastrar} />
      <Text style={styles.sectionTitle}>Valores informados pelo usuário:</Text>
      <View style={styles.valoresContainer}>
        <Text style={styles.valoresLabel}>Nome:</Text>
        <Text style={styles.valores}>{nome}</Text>
        <Text style={styles.valoresLabel}>Gênero:</Text>
        <Text style={styles.valores}>{genero}</Text>
        <Text style={styles.valoresLabel}>Data de Nascimento:</Text>
        <Text style={styles.valores}>{dataNascimento}</Text>
        <Text style={styles.valoresLabel}>Usuário:</Text>
        <Text style={styles.valores}>{usuario}</Text>
        <Text style={styles.valoresLabel}>E-mail:</Text>
        <Text style={styles.valores}>{email}</Text>
        <Text style={styles.valoresLabel}>CPF:</Text>
        <Text style={styles.valores}>{cpf}</Text>
        <Text style={styles.valoresLabel}>Idioma:</Text>
        <Text style={styles.valores}>{idioma}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  passwordInput: {
    flex: 1,
  },
  showPasswordButton: {
    padding: 10,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  valoresContainer: {
    marginTop: 10,
  },
  valoresLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  valores: {
    marginBottom: 10,
  },
});

export default CadastroScreen;
