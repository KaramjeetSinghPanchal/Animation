import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const Animatebutton = Animatable.createAnimatableComponent(TouchableOpacity);
const AnimationHome = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1,backgroundColor:'white',backgroundColor:'#94bf67'}}>
      <Animatable.Image
        source={require('../assets/images/download.jpeg')}
        style={{
          height: 270,
          width: 350,
          marginLeft: -70,
          marginTop: -20,
          borderRadius: 100,          
        }}
        animation={'zoomIn'}
        duration={5500}
      />

      <Animatable.Image
        source={require('../assets/images/downloadbox.jpeg')}
        style={{
          height: 150,
          width: 230,
          marginRight: -70,
          marginTop: -10,
          alignSelf: 'flex-end',
          
          borderRadius: 100,
       
        }}
        animation={'zoomIn'}
        duration={5000}
      />

      <Animatable.Image
        source={require('../assets/images/logort.png')}
        style={{
          height: 100,
          width: 100,
          alignSelf: 'center',
          borderRadius: 100,
        }}
        animation={'zoomIn'}
        duration={5000}
      />
      <Animatable.Text
        style={{
          marginTop: 10,
          fontSize: 25,
          fontWeight: 700,
          alignSelf: 'center',
        }}
        animation={'zoomOut'}
        duration={10000}>
        MyFoodApp
      </Animatable.Text>

      <Animatable.Text
        style={{
          marginTop: 10,
          fontSize: 25,
          fontWeight: 700,
          alignSelf: 'center',
        }}
        animation={'zoomIn'}
        duration={10000}>
        MyFoodApp
      </Animatable.Text>

      <Animatebutton
        style={{
          width: '98%',
          height: 55,
          backgroundColor: '#fa2314',
          position: 'absolute',
          bottom: 100,
          alignSelf: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        animation={'zoomIn'}
        duration={5000}
        activeOpacity={.5}
        onPress={()=>
            navigation.navigate("AnmationSecond")
        }
        >

        <Text style={{color: 'white', fontSize: 20, fontWeight: 900}}>
          Get started
        </Text>
      </Animatebutton>
    </View>
  );
};

export default AnimationHome;

const styles = StyleSheet.create({});
