import * as React from "react";
import { ScrollView, Text, Image } from "react-native";
import styles from '../styles/navStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Test2() {
  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <ScrollView style={ styles.container }>
        <Text style={ styles.text }>Test2!</Text>
        <Image style={ styles.image } source={require('../assets/AppLogo.png')}/>
        <Image style={ styles.image } source={require('../assets/AppLogo.png')}/>
        <Image style={ styles.image } source={require('../assets/AppLogo.png')}/>
        <Image style={ styles.image } source={require('../assets/AppLogo.png')}/>
      </ScrollView>
    </SafeAreaView>
  );
}