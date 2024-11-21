import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Components/Header';
import Product from './Components/Product';
import {ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nextpage from './Components/Nextpage';
import AnmationSecond from './Screens/AnmationSecond';
import AnimationHome from './Screens/AnimationHome';
import SelectedItem from './Screens/SelectedItem';
import Animation2 from './Screens/Animation2';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Second from './Screens/Second';
import Third from './Screens/Third';
const Stack = createNativeStackNavigator();    
const App = () => {
  const products = [
    {name: 'Apple', type: 'Great', Modal: 'New'},
    {name: 'Nokia', type: 'Oldest', Modal: 'Old'},
    {name: 'Oppo', type: 'New', Modal: 'Quality'},
    {name: 'Vivo', type: 'Right', Modal: 'NotKnow'},
    {name: 'Oppo', type: 'Good', Modal: 'No'},
    {name: 'Nokia', type: 'Oldest', Modal: 'Old'},
    {name: 'Nokia', type: 'Oldest', Modal: 'Old'},
    {name: 'Apple', type: 'New', Modal: 'Quality'},
    {name: 'Vivo', type: 'Right', Modal: 'NotKnow'},
    {name: 'Oppo', type: 'Good', Modal: 'No'},
    {name: 'Nokia', type: 'Oldest', Modal: 'Old'},
    {name: 'Nokia', type: 'Oldest', Modal: 'Old'},
    {name: 'Apple', type: 'New', Modal: 'Quality'},
    {name: 'Vivo', type: 'Right', Modal: 'NotKnow'},
    {name: 'Oppo', type: 'Good', Modal: 'No'},
    {name: 'Nokia', type: 'Oldest', Modal: 'Old'},
  ];
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Product'>
      <Stack.Screen name="Product" options={{ headerShown: false }}>
          {(props) => (
            <View style={styles.container}>
              <Header />
              <ScrollView>
                {products.map(itm => (
                  <Product itm={itm} key={itm.name} />
                ))}
              </ScrollView>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="Nextpage" component={Nextpage} />
        <Stack.Screen name="AnimationHome" component={AnimationHome} />
        <Stack.Screen name="AnmationSecond" component={AnmationSecond} />
        <Stack.Screen name="SelectedItem" component={SelectedItem} />
        <Stack.Screen name="Animation2" component={Animation2} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
