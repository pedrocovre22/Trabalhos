import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TextInput, Text, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate icon library (FontAwesome in this case)

const App = () => {
  const screenWidth = Dimensions.get('window').width;

  const [selectedProfessor, setSelectedProfessor] = useState('');
  const [observation, setObservation] = useState('');

  const professors = ['João Silva', 'Maria Santos'];

  return (
    <View style={styles.container}>
      <View style={styles.bar} />

      <View style={styles.squareWithCircle}>
        <View style={[styles.square, { width: screenWidth * 0.1, height: screenWidth * 0.1 }]}>
          <View style={styles.circle} />
        </View>
      </View>

      <View style={styles.linesContainer}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Horário</Text>
          <TextInput style={styles.input} placeholder="hh:mm" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Professor</Text>
          <Picker
            selectedValue={selectedProfessor}
            onValueChange={(itemValue) => setSelectedProfessor(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione um professor" value="" />
            {professors.map((professor, index) => (
              <Picker.Item key={index} label={professor} value={professor} />
            ))}
          </Picker>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Observação</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Mensagem para a coordenação"
            multiline
            numberOfLines={4}
            value={observation}
            onChangeText={(text) => setObservation(text)}
          />
        </View>
      </View>

      <View style={styles.redSquare}>
        <Icon name="times" size={35} color="white" />
      </View>

      <View style={styles.greenSquare}>
        <Icon name="check" size={35} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#EEEEEE',
  },
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#393E46',
    zIndex: -1,
  },
  linesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  line: {
    width: 0.065 * Dimensions.get('window').width,
    height: 2,
    backgroundColor: '#00ADB5',
    top: 25,
    left: 16,
    marginBottom: 5,
  },
  squareWithCircle: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
  square: {
    backgroundColor: '#222831',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 0.04 * Dimensions.get('window').width,
    height: 0.04 * Dimensions.get('window').width,
    backgroundColor: '#00ADB5',
    borderRadius: 0.025 * Dimensions.get('window').width,
  },
  inputsContainer: {
    marginTop: 100,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 46,
    borderWidth: 2,
    borderColor: '#00ADB5',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  picker: {
    width: 300,
    height: 46,
    borderWidth: 2,
    borderColor: '#00ADB5',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },
  textArea: {
    height: 234,
    textAlignVertical: 'top',
  },
  redSquare: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 64,
    height: 64,
    backgroundColor: '#B50021',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  },
  greenSquare: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 64,
    height: 64,
    backgroundColor: '#00ADB5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  },
});

export default App;