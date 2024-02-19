import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
import GroupInput from '../../components/molecules/groupInput';
import Header from '../../components/molecules/Header';
import { useNavigation } from '@react-navigation/native';

export default Login = () => {
    const navigation = useNavigation();

    const [cpf, setCpf] = useState('');

    const handleCpfChange = (text) => {
        setCpf(text);
    };
    const [isChecked, setIsChecked] = useState(false);

    const handlePress = () => {
        setIsChecked(!isChecked);
    };

    const home = () => {
        navigation.navigate('home');
    }
    
    return (
        <View style={styles.container}>
            {/* molecula referente ao header */}
            <Header />
            <View style={styles.content}>
                <Text style={styles.titleText}>Acessar sua conta</Text>

                {/* molecula referente aos inputs */}
                <GroupInput cpf={cpf} handleCpfChange={handleCpfChange} isChecked={isChecked} handlePress={handlePress} />

                <TouchableOpacity style={styles.login} onPress={home}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};



