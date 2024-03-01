
import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 2
    },
    account: {
    },
    accountText: {
        color: 'black',

        fontSize: 17,
    },
    accountNumber: {
        fontWeight: '300'
    },
    user: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 100,
        marginLeft: 20,
        marginHorizontal: 110,
    }

});

const Menu = () => {
   
    return (
        
        <View style={styles.container}>
            <View style={styles.user}>
                    <Image source={require('../../../../assets/icons/menu.png')} style={{ width: 28, height: 28, tintColor: 'black' }} />
                <View style={styles.account}>

                    <Text style={styles.accountText}>Patrick</Text>
                    <Text style={[styles.accountText, styles.accountNumber]}>Ag 1151 Cc 01068492-3</Text>
                </View>

            </View>
            <Image source={require('../../../../assets/icons/seta.png')} style={{ width: 25, height: 15, top: 15, transform: [{ rotate: '90deg' }], tintColor: 'black' }} />

        </View>

    );
}

export default Menu;