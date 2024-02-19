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
      <Image source={require('../../../assets/santander-logo.png')} style={{ width: 40, height: 40, marginRight: 5 }} />
      <Text style={styles.text}>Santander</Text>
    </View>
  );
};

