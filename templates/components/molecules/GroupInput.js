import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../../screen/login/styles';

const GroupInput = ({ cpf, handleCpfChange, isChecked, handlePress }) => {
  return (
    <View style={styles.groupInput}>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={handleCpfChange}
      />
      <View style={styles.line} />
      <View style={styles.remember}>
        <View style={styles.rememberCPF}>
          <Text>Lembrar meu CPF</Text>
        </View>
        <TouchableOpacity
          style={[styles.button, isChecked ? styles.checked : null]}
          onPress={handlePress}
        >
          <View style={styles.circle}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupInput;
