import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

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
            <View style={styles.header}>
                <View style={styles.menuContainer}>
                    <Image source={require('../assets/icons/arrow.png')} style={{ width: 25, height: 25, tintColor: 'white' }} />
                </View>
                <Image source={require('../assets/santander-logo.png')} style={{ width: 25, height: 25, marginRight: 5, marginTop: 30 }} />
                <Text style={styles.text}>Santander</Text>
                <View style={styles.gpsContainer}>
                    <Image source={require('../assets/icons/gps.png')} style={{ width: 18, height: 20, tintColor: 'white' }} />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.titleText}>Acessar sua conta</Text>
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
                        ><View style={styles.circle}></View></TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.login}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    login: {
        backgroundColor: '#c00',
        width: '90%',
        paddingVertical: 12,
        borderRadius: 10,
        left:20,
        top:600,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize:15
    },

    remember: {
        flexDirection: 'row',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: 'white',
        bottom: 7.5,
        right: 2
    },
    button: {
        backgroundColor: '#ccc', // Cor padrão quando não está checked
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        top: 65,
        right: -215,
        width: 50,
        height: 35
    }, checked: {
        backgroundColor: 'red', // Cor quando está checked
    },
    rememberCPF: {
        top: 70,
        left: 18
    },
    groupInput: {
        top: 50
    },
    line: {
        width: '90%',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        right: -20,
        top: 25
    },
    titleText: {
        fontSize: 20,
        right: -20,
        top: 25

    },
    input: {
        right: -20,
        top: 25,
        fontSize: 16

    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30
    },
    header: {
        backgroundColor: '#c00',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        width: '100%' // Defina a altura do cabeçalho conforme necessário
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    gpsContainer: {
        position: 'absolute',
        right: 20,
        top: 50, // Ajuste conforme necessário para alinhar verticalmente com o texto
    },
    menuContainer: {
        position: 'absolute',
        left: 20,
        top: 50, // Ajuste conforme necessário para alinhar verticalmente com o texto
    },
});

