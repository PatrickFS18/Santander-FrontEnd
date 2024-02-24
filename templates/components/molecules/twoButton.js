import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TwoButtonView = () => {
  return (
    <View style={styles.container}>
        <View style={styles.bottomBorder}></View>
      <TouchableOpacity style={[styles.button, styles.rightBorder,styles.margin]}>
        <Text style={styles.buttonText}>Ver extrato</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinhamento horizontal
    justifyContent: 'spaspace-between', // Espaçamento entre os botões
    paddingHorizontal: 18, // Espaçamento horizontal para a View
    top:50,
  },
  margin:{
    marginLeft:-8,
    borderRightWidth:1

  },
  bottomBorder:{
    borderBottomWidth: 1, // Adicionando borda à direita
    borderRadius: 5, // Borda arredondada do botão

},
  button: {
    paddingVertical: 6, // Espaçamento vertical dentro do botão
    paddingHorizontal: 52, // Espaçamento horizontal dentro do botão
    borderTopWidth:1,
    borderColor:'#BEBEBE'

},
  
 
  buttonText: {
    color: 'red', // Cor do texto do botão
    fontSize: 15, // Tamanho da fonte
  },
});

export default TwoButtonView;
