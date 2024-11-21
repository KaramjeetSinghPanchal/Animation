import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Image} from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity);

const Third = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.warn(route);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        source={route.params.data.image}
        style={{width: '100%', height: '40%', marginTop: 3}}
      />
      <LinearGradient
        colors={['rgba(0,0,0,.2)', 'rgba(0,0,0,.5)', 'rgba(0,0,0,0.8)']}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}></LinearGradient>

      <View
        style={{
          width: '90%',
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Second')}
          style={{
            backgroundColor: 'white',
            borderRadius: 100,
            width: 40,
            height: 40,
            marginTop: 10,
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{
              // backgroundColor: 'gray',
              borderRadius: 100,
              width: 25,
              height: 25,
              marginTop: 5,
              marginLeft: 7,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 100,
            width: 40,
            height: 40,
            marginTop: 10,
          }}>
          <Image
            source={require('../assets/images/option.png')}
            style={{
              // backgroundColor: 'gray',
              borderRadius: 100,
              width: 25,
              height: 25,
              marginTop: 5,
              marginLeft: 7,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 90}}>
        <Text
          style={{
            fontSize: 15,
            position: 'absolute',
            bottom: 90,
            color: 'white',
          }}>
          Choached By paul
        </Text>
        <Animatable.Text
          animation={'slideInUp'}
          duration={1000}
          style={{
            fontSize: 25,
            position: 'absolute',
            bottom: 20,
            color: 'white',
          }}>
          Train your muscles {'\n'} Master class
        </Animatable.Text>
      </View>

      <Animatable.View
        animation={'slideInUp'}
        duration={1000}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{color: 'white'}}>Next Step Workout</Text>
        <Text style={{color: 'white'}}>1/24 Tasks</Text>
      </Animatable.View>

      <View>
        <FlatList
          data={[
            {
              image: require('../assets/images/gymthree.jpeg'),
              text: 'Good for health',
            },
            {
              image: require('../assets/images/gymfour.jpeg'),
              text: 'Good for Brain',
            },
            {
              image: require('../assets/images/gymfive.jpeg'),
              text: 'Good for Health',
            },
            {
              image: require('../assets/images/gymsix.jpeg'),
              text: 'Good for Brain',
            },
            {
              image: require('../assets/images/gymthree.jpeg'),
              text: 'Good for health',
            },
            {
              image: require('../assets/images/gymfour.jpeg'),
              text: 'Good for Brain',
            },
            {
              image: require('../assets/images/gymfive.jpeg'),
              text: 'Good for Health',
            },
            {
              image: require('../assets/images/gymsix.jpeg'),
              text: 'Good for Brain',
            },
            {
              image: require('../assets/images/gymthree.jpeg'),
              text: 'Good for health',
            },
            {
              image: require('../assets/images/gymfour.jpeg'),
              text: 'Good for Brain',
            },
            {
              image: require('../assets/images/gymfive.jpeg'),
              text: 'Good for Health',
            },
            {
              image: require('../assets/images/gymsix.jpeg'),
              text: 'Good for Brain',
            },
            {
              image: require('../assets/images/gymthree.jpeg'),
              text: 'Good for health',
            },
            {
              image: require('../assets/images/gymfour.jpeg'),
              text: 'Good for Brain',
            },
            {
              image: require('../assets/images/gymfive.jpeg'),
              text: 'Good for Health',
            },
            {
              image: require('../assets/images/gymsix.jpeg'),
              text: 'Good for Brain',
            },
          ]}
          renderItem={({item, index}) => {
            return (
              <Animatable.View
                animation={'slideInUp'}
                duration={1000}
                style={{
                  height: 80,
                  borderRadius: 20,
                  marginLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#3a3a3b',
                  borderWidth: 5,
                  

                  // borderBlockColor:'blue'
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 60,
                    height: 80,
                    borderRadius: 15,
                    
                    borderWidth: 5,
                    // borderBlockColor:'#3a3a3b'
                    // paddingTop:10
                  }}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    marginLeft: 15,
                  }}>
                  <Image
                    style={{height: 30, width: 30, borderRadius: 100}}
                    source={require('../assets/images/play.png')}
                  />
                </View>
                <View style={{marginLeft: 15}}>
                  <Text
                    style={{color: 'white', fontSize: 25, fontWeight: '550'}}>
                    {item.text}
                  </Text>

                  <Text
                    style={{color: 'white', fontSize: 15, fontWeight: '550'}}>
                    The Good for health
                  </Text>
                </View>
              </Animatable.View>
            );
          }}
        />
      </View>

      <AnimateBtn
        style={{
          width: '80%',
          height: 55,
          backgroundColor: '#92ff03',
          marginTop: 600,
          borderRadius: 100,
          position: 'absolute',
          bottom: 20,
          // marginLeft:50
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        animation={'slideInUp'}>
        <Text
          animation={'slideInUp'}
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 700,
          }}
          onPress={() => navigation.navigate('Second')}>
          Click here{' '}
        </Text>
      </AnimateBtn>
    </View>
  );
};

export default Third;

const styles = StyleSheet.create({});
