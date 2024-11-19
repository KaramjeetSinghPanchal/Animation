import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Nextpage = () => {
  const [name, setname] = useState('');
  const [pass, setpass] = useState('');
  const dataSet = async () => {
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('pass', pass);
    Alert.alert("Data Saved")
  };

  const dataget = async () => {
    const name = await AsyncStorage.getItem('name');
    const pass = await AsyncStorage.getItem('pass');
    console.warn(name,pass);

    // setname(name);
  };

  return (
    <View>
      <Text>Next page | {name} {" "}{pass}</Text>
      <Button title="Set Data" onPress={dataSet} />
      <Button title="Get Data" onPress={dataget} />

      <TextInput placeholder='Username'
      onChangeText={setname}
      value={name}
      style={styles.input}/>

      <TextInput placeholder='Password' 
      onChangeText={setpass}
      value={pass}
      style={styles.input}/>
    </View>
  );
};

export default Nextpage;

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 250,
    borderWidth: 2,
    margin:10
  },
});
