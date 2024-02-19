import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../../screen/login/styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.menuContainer}>
        <Image source={require('../../../assets/icons/arrow.png')} style={{ width: 25, height: 25, tintColor: 'white' }} />
      </View>
      <Image source={require('../../../assets/santander-logo.png')} style={{ width: 25, height: 25, marginRight: 5, marginTop: 30 }} />
      <Text style={styles.text}>Santander</Text>
      <View style={styles.gpsContainer}>
        <Image source={require('../../../assets/icons/gps.png')} style={{ width: 18, height: 20, tintColor: 'white' }} />
      </View>
    </View>
  );
};
export default Header;