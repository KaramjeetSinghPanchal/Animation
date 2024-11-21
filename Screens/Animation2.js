import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient' // import LinearGradient
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity)
const Animation2 = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        source={require('../assets/images/gym.jpg')}
        style={{height: '100%', width: '100%'}}
      />

      <View
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
         <View>
          <Animatable.Text 
          animation={'slideInUp'}
          style={{width: '90%',
          fontSize:35,
          fontWeight:700,
           position: 'absolute',
           bottom:-250,
           marginLeft:-180,
           color:'white'
           }}>{'Protext\n Your Health\n Companion'}
           </Animatable.Text>
           <Animatable.Text
           animation="slideInDown"
           iterationCount="infinite"
           direction="alternate"
           style={{width: '90%',
          fontSize:13,
           position: 'absolute',
           bottom:-420,
           marginLeft:-180,
           color:'white'
           }}>{'Elevate layout the screen of the term to be say it\n not good and finish all the things Elevate layout the screen of the term to be say it\n not good and finish all the things'}</Animatable.Text>
        </View>
        <AnimateBtn
        
        style={{width:'80%',
          height:55,
          backgroundColor:'#92ff03',
          marginTop:600,
          borderRadius:100,
        }}
        animation={'slideInUp'}>
          <Text
          animation={'slideInUp'}
          style={{alignContent:'center',alignSelf:'center',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:15,fontSize:20,fontWeight:700}}
          onPress={()=>navigation.navigate('Second')}
          >Click here </Text>
        </AnimateBtn>
      </View>

      <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          
        >
          <Text>Vertical Gradient</Text>
        </LinearGradient>
      
    </View>
  );
};

export default Animation2;

const styles = StyleSheet.create({});
