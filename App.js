import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {altura: 0, peso: 0, resultado: 0, resultadoText: ""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc

    
    if(imc < 16){
      s.resultadoText = "Magreza grave"
    } else if (imc < 17){
      s.resultadoText = "Magreza moderada"
    } else if (imc < 18.5){
      s.resultadoText = "Magreza leve"
    } else if (imc < 25){
      s.resultadoText = "Saudável"
    } else if (imc < 30){
      s.resultadoText = "Sobrepeso"
    } else if (imc < 35){
      s.resultadoText = "Obesidade Grau I"
    }else if (imc < 40){
      s.resultadoText = "Obesidade Grau II (severa)"
    } else {
      s.resultadoText = "Obesidade Grau III (mórbida)"
    }
    
    this.setState(s)
  } 


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura) => this.setState({altura})} ></TextInput>
          <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(peso) => this.setState({peso})}></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 30}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  entradas:{
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89ffa5',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 65,
    padding: 15,
  },
});
