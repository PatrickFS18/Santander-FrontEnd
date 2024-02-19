import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
import GroupInput from '../../components/molecules/groupInput';
import Header from '../../components/molecules/Header';
export default Login = () => {

    const [cpf, setCpf] = useState('');

    const handleCpfChange = (text) => {
        setCpf(text);
    };
    const [isChecked, setIsChecked] = useState(false);

    const handlePress = () => {
        setIsChecked(!isChecked);
    };
    return (
        <View style={styles.container}>

                {/* molecula referente ao header */}
            
                <Header />

            <View style={styles.content}>
                <Text style={styles.titleText}>Acessar sua conta</Text>

                {/* molecula referente aos inputs */}
                <GroupInput cpf={cpf} handleCpfChange={handleCpfChange} isChecked={isChecked} handlePress={handlePress} />

                <TouchableOpacity style={styles.login}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};



