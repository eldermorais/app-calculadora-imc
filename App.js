import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const tabela = {
    magreza: 15.5,
    normal: 24.9,
    sobrepeso: 29.9,
    obesidade: 39.9,
  };

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();

  const [imc, setImc] = useState();
  const [resultado, setResultado] = useState('resultado');

  useEffect(() => {
    if (imc < 0 && imc <= tabela.magreza) {
      setResultado('Magreza');
    } else if (imc > tabela.magreza && imc <= tabela.normal) {
      setResultado('Normal');
    } else if (imc > tabela.normal && imc <= tabela.sobrepeso) {
      setResultado('Sobrepeso');
    } else if (imc > tabela.sobrepeso && imc <= tabela.obesidade) {
      setResultado('Obesidade');
    } else {
      setResultado('Obesidade Grave');
    }
  }, [
    imc,
    setResultado,
    tabela.magreza,
    tabela.normal,
    tabela.obesidade,
    tabela.sobrepeso,
  ]);

  const calculaImc = () => {
    if (peso !== 0 && altura !== 0) {
      let replacePeso = String(peso).replace(',', '.');
      let replaceAltura = String(altura).replace(',', '.');

      const result = replacePeso / (replaceAltura * replaceAltura);
      setImc(result.toFixed(1));

      if (imc < 0 && imc <= tabela.magreza) {
        setResultado('Magreza');
      } else if (imc > tabela.magreza && imc <= tabela.normal) {
        setResultado('Normal');
      } else if (imc > tabela.normal && imc <= tabela.sobrepeso) {
        setResultado('Sobrepeso');
      } else if (imc > tabela.sobrepeso && imc <= tabela.obesidade) {
        setResultado('Obesidade');
      } else {
        setResultado('Obesidade Grave');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calcular IMC</Text>
      <View style={styles.formGroup}>
        <Text style={styles.textInput}>Peso</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={setPeso}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.textInput}>Altura</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={setAltura}
        />
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={calculaImc}>
          <Text style={styles.textButton}>Calcular IMC</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.result}>
        <Text style={styles.resultText}>Seu IMC é {imc}</Text>
        <Text style={styles.resultText}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    paddingVertical: 20,
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    backgroundColor: '#40BD68',
    color: '#fff',
    marginBottom: 30,
  },
  formGroup: {
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    fontSize: 28,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 16,
    borderRadius: 8,
  },
  textButton: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  button: {
    backgroundColor: '#2196F3',
    width: '50%',
    height: 60,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    marginVertical: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    backgroundColor: '#40BD68',
    width: '80%',
    marginHorizontal: '10%',
    borderRadius: 8,
  },
  resultText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
  },
});

export default App;
