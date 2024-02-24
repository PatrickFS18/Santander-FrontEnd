import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';
import TwoButtonView from '../../components/molecules/twoButton';

const Home = () => {


    const [isReady, setIsReady] = useState(false);
    const ready = () => {
        if(isReady==false){
        setTimeout(() => {
          setIsReady(!isReady);
        }, 260);
    }else{
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
                    <Image source={require('../../../assets/icons/menu.png')} style={{ width: 35, height: 35, tintColor: 'white' }} />
                </View>
                <Image source={require('../../../assets/slogo.png')} style={{ width: 150, height: 26.2, marginRight: 5, marginBottom: 110, tintColor: 'white' }} />
                <View style={styles.gpsContainer}>
                    <Image source={require('../../../assets/icons/gps.png')} style={{ width: 26, height: 26, tintColor: 'white' }} />
                </View>
            </View>
            <Image source={require('../../../assets/icons/dolarIcone.png')} style={{ width: 40, height: 40, tintColor: 'red', zIndex:1,position:'absolute',top:202,left:30 }} />

            <Text style={styles.text} onPress={toggleExpansion}>

                        Saldo disponível
                    </Text>
            <TouchableOpacity
            activeOpacity={1}
                onPress={toggleExpansion} style={backgroundColor='white'}>

                <Animated.View style={[styles.saldo, animatedStyle]} >
               {isReady &&
<TwoButtonView/>
}
                    

                </Animated.View>
            </TouchableOpacity>


        </View>
    );
};


export default Home;