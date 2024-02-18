import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Image source={require('../assets/santander-logo.png')} style={{ width: 25, height: 25, marginRight: 5, marginTop: 30 }} />
                <Text style={styles.text}>Santander</Text>
                <View style={styles.gpsContainer}>
                    <Image source={require('../assets/icons/gps.png')} style={{ width: 25, height: 25, tintColor: 'white'  }} />
                </View>
            </View>
            <View style={styles.content}>

                <Text style={styles.text}>Santander login aqui</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    gpsContainer: {
        position: 'absolute',
        right: 10,
        top: 50, // Ajuste conforme necessário para alinhar verticalmente com o texto
    },
});

