import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import Animated, {SlideInUp} from 'react-native-reanimated';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);
const AnmationSecond = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#94bf67'}}>
      <Animatable.View
        style={{
          marginTop: 10,
          paddingLeft: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          alignContentL: 'center',
        }}
        animation={'slideInDown'}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/images/menu.png')}
            style={{
              width: 30,
              height: 24,
            }}
          />
          <Text style={{marginLeft: 10, fontSize: 18}}>My Food App</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/images/search.png')}
            style={{
              width: 30,
              height: 24,
            }}
          />
        </View>
      </Animatable.View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Animatable.Text
          style={{backgroundColor: '#fa2314', padding: 8}}
          duration={1000}
          animation={'slideInUp'}>
          All
        </Animatable.Text>
        <Animatable.Text
          style={{backgroundColor: '#fa2314', padding: 8}}
          duration={1300}
          animation={'slideInUp'}>
          Pasta
        </Animatable.Text>
        <Animatable.Text
          style={{backgroundColor: '#fa2314', padding: 8}}
          duration={1500}
          animation={'slideInUp'}>
          Pizza
        </Animatable.Text>
        <Animatable.Text
          style={{backgroundColor: '#fa2314', padding: 8}}
          duration={1700}
          animation={'slideInUp'}>
          Burger
        </Animatable.Text>
      </View>

      <FlatList
        data={[
          {
            image: require('../assets/images/pizzaL1.jpeg'),
            title: 'Pizza Duplex',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL2.jpeg'),
            title: 'Veg Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL3.jpeg'),
            title: 'Chees Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL4.jpeg'),
            title: 'Red Chilli Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL3.jpeg'),
            title: 'Chees Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL4.jpeg'),
            title: 'Red Chilli Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL3.jpeg'),
            title: 'Chees Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL4.jpeg'),
            title: 'Red Chilli Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL3.jpeg'),
            title: 'Chees Pizza',
            price: '$10',
          },
          {
            image: require('../assets/images/pizzaL4.jpeg'),
            title: 'Red Chilli Pizza',
            price: '$10',
          },
        ]}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <Animatable.View
              style={{
                width: '50%',
                height: 200,
                marginTop: 20,
                alignItems: 'center',
              }}
              animation={'slideInUp'}
              duration={1000 * (index + 2)}>
              <AnimatedButton
                style={{
                  width: '90%',
                  height: '70%',
                  position: 'absolute',
                  bottom: 0,
                  backgroundColor: '#c8e0cc',
                  borderRadius: 15,
                }}
                onPress={() => {
                  navigation.navigate('SelectedItem', {data: item});
                }}>
                <Text
                  style={{
                    marginTop: 50,
                    marginLeft: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
              </AnimatedButton>

              <Animatable.Image
                source={item.image}
                style={{width: 100, height: 100, borderRadius: 50}}
                animation={'zoomIn'}
                duration={1000}
              />
              <View
                style={{
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 50,
                  marginLeft: 30,
                }}>
                <Text>Price: {item.price}</Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 10,
                  backgroundColor: '#fa2314',
                  marginLeft: 120,
                  // padding: 10,
                }}>
                <Image
                  source={require('../assets/images/carrybag.png')}
                  style={{
                    height: 30,
                    width: 20,
                    justifyContent: 'center',
                    marginBottom: 50,
                    marginLeft: 5,
                  }}
                />
              </View>
            </Animatable.View>
          );
        }}
      />
    </View>
  );
};

export default AnmationSecond;

const styles = StyleSheet.create({});
