import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';
import TwoButtonView from '../../components/molecules/twoButton';

const Home = () => {


    const [isReady, setIsReady] = useState(false);
    const ready = () => {
        if (isReady == false) {
            setTimeout(() => {
                setIsReady(!isReady);
            }, 10);
        } else {
            setTimeout(() => {
                setIsReady(!isReady);
            }, 10);
        }
    };
    const [isExpanded, setIsExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const toggleExpansion = () => {
        ready();
        setIsExpanded(!isExpanded);
        Animated.timing(animation, {
            toValue: isExpanded ? 0 : 1,
            duration: 300, // Duração da animação em milissegundos
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
                    <Image source={require('../../../assets/icons/menu.png')} style={{ width: 28, height: 28, tintColor: 'white' }} />
                </View>
                <Image source={require('../../../assets/slogo.png')} style={{ width: 135, height: 23.5, marginRight: 75, marginBottom: 105, tintColor: 'white' }} />
                <View style={styles.gpsContainer}>
                <Image source={require('../../../assets/icons/help.png')} style={{ width: 30, height: 30,tintColor:'white',top:-4,right:20}} />

                    <Image source={require('../../../assets/icons/notificacao.png')} style={{ width: 20, height: 20}} />
                </View>
            </View>
            <Image source={require('../../../assets/icons/dolarIcone.png')} style={{ width: 40, height: 40, tintColor: 'red', zIndex: 1, position: 'absolute', top: 202, left: 30 }} />

            
            <Text style={styles.text} onPress={toggleExpansion}>

                Saldo disponível
            </Text>
            <Text style={{position: 'absolute',  top: isExpanded ? 210 : 205  , left: '85%', zIndex: 1,    transform: [{ rotate: isExpanded ? '180deg' : '0deg' }]}} onPress={toggleExpansion}>
                        <Image  source={require('../../../assets/icons/seta.png')} style={{ width: 25, height: 20, tintColor: 'black'}} />
                        </Text>
            <TouchableOpacity
                activeOpacity={1}
                onPress={toggleExpansion} style={backgroundColor = 'white'}>

                <Animated.View style={[styles.saldo, animatedStyle]} >
                    {isReady &&
                        <>
                            <Text style={styles.saldoNumber}>R$ 179.980,25</Text>
                            <Text style={styles.limitNumber}>Saldo + Limite: R$ 479.980,25</Text>
                            <Text style={styles.limitStyle}>Entenda seu limite</Text>

                            <TwoButtonView />
                        </>
                    }


                </Animated.View>
            </TouchableOpacity>


        </View>
    );
};


export default Home;