import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.menuContainer}>
                    <Image source={require('../../../assets/icons/menu.png')} style={{ width: 35, height: 35, tintColor: 'white' }} />
                </View>
                <Image source={require('../../../assets/slogo.png')} style={{ width: 150, height: 26.2, marginRight: 5, marginBottom: 110, tintColor: 'white' }} />
                <View style={styles.gpsContainer}>
                    <Image source={require('../../../assets/icons/gps.png')} style={{ width: 26, height: 26, tintColor: 'white' }} />
                </View>
            </View>
            <View style={styles.saldo}>
                <TouchableOpacity>
                    <Text style={styles.saldoText}>Saldo disponível   </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


export default Home;