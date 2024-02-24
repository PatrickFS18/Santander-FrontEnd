import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

const Home = () => {



    const [isExpanded, setIsExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
        Animated.timing(animation, {
            toValue: isExpanded ? 0 : 1,
            duration: 500, // Duração da animação em milissegundos
            useNativeDriver: false, // Importante definir como false para usar estilos não suportados nativamente
        }).start();
    };

    const animatedStyle = {
        height: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [60, 220], // Altura inicial e final
        }),

    };



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
            <Text style={styles.text} onPress={toggleExpansion}>
                        Saldo disponível
                    </Text>
            <TouchableOpacity
            activeOpacity={1}
                onPress={toggleExpansion} style={backgroundColor='white'}>
                <Animated.View style={[styles.saldo, animatedStyle]} >

                    

                </Animated.View>
            </TouchableOpacity>


        </View>
    );
};


export default Home;