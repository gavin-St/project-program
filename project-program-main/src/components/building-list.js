import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { ScrollView, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Separator = () => (
  <View style={styles.separator} />
);

export const Test1 = () => (
  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View>
      <Button
        title="Accelerator Centre Waterloo (ACW)"
        color="#e0cf0d"
        onPress={() => handleBuilding}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Arts Lecture Hall (AL)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Autonomous Vehicle Research & Intelligence Laboratory (AVRIL) (AVR)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Biology 1 (B1)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Biology 2 (B2)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="B.C. Matthews Hall (BMH)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Brubacher House (BRH)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Bright Starts Co-operative Early Learning Centre (BSC)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Chemistry 2 (C2)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Conrad Grebel University College (CGR)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Columbia Icefield Field House (CIF)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Columbia Lake Village North (CLN)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Columbia Lake Village (CLV)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Columbia Greenhouses (COG)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Commissary (COM)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Central Services Building (CSB)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="William G. Davis Computer Research Centre (DC)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Douglas Wright Engineering Building (DWE)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Engineering 2 (E2)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Engineering 3 (E3)"
        color="#e0cf0d"
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});