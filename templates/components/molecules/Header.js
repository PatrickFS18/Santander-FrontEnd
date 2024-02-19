import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../../screen/login/styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.menuContainer}>
        <Image source={require('../../../assets/icons/arrow.png')} style={{width: 35, height: 35, tintColor: 'white' }} />
      </View>
      <Image source={require('../../../assets/slogo.png')} style={{ width: 150, height: 26.2, marginRight: 5, marginTop: 25,tintColor: 'white' }} />
      <View style={styles.gpsContainer}>
        <Image source={require('../../../assets/icons/gps.png')} style={{ width: 26, height: 26, tintColor: 'white' }} />
      </View>
    </View>
  );
};
export default Header;