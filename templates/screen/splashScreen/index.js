import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/slogo.png')} style={{ width: 150, height: 26.2, marginRight: 5, marginTop: 25, tintColor: 'white' }} />
      <View style={{marginTop:10}}>
        <Text style={styles.text}>Esta aplicação é apenas para fins educativos!</Text>
        <Text style={styles.text}>Qualquer cópia para mau uso não está sob minha responsabilidade.</Text>
      </View>
    </View>
  );
};

