import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    headerContainer: {
        borderBottomWidth: 10,
        borderBottomColor: "#FFFFFF",
        display: "flex",
        height: 30,
        position: "absolute"
    },

    container: {
        backgroundColor: '#000000',
        height: '100%'
    },

    text: {
        textAlign: 'center',
        color: '#ffd500',
        fontSize: 60,
    },

    image: {
        alignSelf: 'center',
        width: 300,
        height: 300
    },

});

export default styles;