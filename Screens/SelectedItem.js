import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useEffect} from 'react';
import Animated, {SlideInUp} from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';
import {useRoute} from '@react-navigation/native';
import {Image} from 'react-native-animatable';
const Animatebutton = Animatable.createAnimatableComponent(TouchableOpacity);

const SelectedItem = () => {
  const navigation = useNavigation();

  const route = useRoute();
  useEffect(() => {
    console.warn(route.params.data.image);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#94bf67'}}>
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../assets/images/menu.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: -10,
        }}>
        <Animatable.View
          style={{
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: 'white',
            height: '80%',
            position: 'absolute',
            bottom: 8,
          }}
          animation={'slideInUp'}>
          <Animatable.Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              paddingTop: 80,
              fontWeight: 'bold',
              fontSize: 20,
            }}
            animation={'slideInUp'}>
            {route.params.data.title}
          </Animatable.Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Animatable.Text
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 80,
                fontWeight: 'bold',
                fontSize: 20,
              }}
              animation={'slideInUp'}>
              {route.params.data.price}
            </Animatable.Text>

            <Animatable.Text
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 80,
                // fontWeight: 'bold',
                fontSize: 20,
              }}
              animation={'slideInUp'}>
              4.5
              <Animatable.Image
                source={require('../assets/images/rating.png')}
                style={{height: 20, width: 80}}
              />
            </Animatable.Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Animatable.Text
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 80,
                fontWeight: 'bold',
                fontSize: 20,
              }}
              animation={'slideInUp'}>
              {route.params.data.price}
            </Animatable.Text>

            <Animatable.Text
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 80,
                // fontWeight: 'bold',
                fontSize: 20,
              }}
              animation={'slideInUp'}>
              4.5
              <Animatable.Image
                source={require('../assets/images/rating.png')}
                style={{height: 20, width: 80}}
              />
            </Animatable.Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Animatable.Text
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 80,
                fontWeight: 'bold',
                fontSize: 20,
              }}
              animation={'slideInUp'}>
              {route.params.data.price}
            </Animatable.Text>

            <Animatable.Text
              style={{
                padding: 0,
                margin: 0,
                paddingTop: 80,
                // fontWeight: 'bold',
                fontSize: 20,
              }}
              animation={'slideInUp'}>
              4.5
              <Animatable.Image
                source={require('../assets/images/rating.png')}
                style={{height: 20, width: 80}}
              />
            </Animatable.Text>
          </View>
        </Animatable.View>

        <Animatable.Image
          source={route.params.data.image}
          style={{
            width: 130,
            height: 130,
            borderRadius: 100,
            justifyContent: 'center',
            alignSelf: 'center',
            position: 'absolute',
            top: 85,
           
          }}
          animation={'zoomIn'}
          duration={1000}
        />

        <Animatebutton
          style={{
            width: '98%',
            height: 55,
            backgroundColor: '#fa2314',
            position: 'absolute',
            bottom: 80,
            alignSelf: 'center',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          animation={'zoomIn'}
          duration={5000}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('AnimationHome');
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 900}}>
            Get started
          </Text>
        </Animatebutton>
      </View>
    </View>
  );
};

export default SelectedItem;

const styles = StyleSheet.create({});
