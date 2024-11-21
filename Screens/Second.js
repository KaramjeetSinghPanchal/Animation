import React, {useRef, useEffect} from 'react';
import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {Image} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity)

// Create AnimatedCircle from Circle component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const Second = ({

  progress = 85, // Default progress to 0 if not provided
  size = 100,
  strokeWidth = 10,
  strokeColor = '#3498db',
  backgroundColor = '#e6e6e6',
}) => {
  // Ensure progress is between 0 and 100
  const validProgress = Math.min(Math.max(progress, 0), 200);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Create an animated value
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Trigger animation whenever progress changes
  useEffect(() => {
    // Animate to the new progress value
    Animated.timing(animatedValue, {
      toValue: validProgress, // Use validated progress
      duration: 3000, // Duration for animation
      useNativeDriver: false, // No native driver for the animated circle
    }).start();
  }, [validProgress]); // Runs every time progress changes

  // Interpolate the animated value to calculate the strokeDashoffset
  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0], // Start from full circumference and reduce to 0
  });

  const navigation = useNavigation()


  return (
    <View style={{flex: 1, backgroundColor: 'black', paddingTop: 10}}>
      <Animatable.Text
        animation={'slideInRight'}
        duration={1000}
        // onPress={()=>{navigation.navigate('third')}}

        style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        Hello Karam ❤️
      </Animatable.Text>
      <Animatable.Text
        animation={'slideInLeft'}
        duration={1000}
        style={{color: 'white', fontSize: 20, fontFamily: 'bold'}}>
        This is health pro
      </Animatable.Text>
 
      <Animatable.View
        animation={'bounce'}
        duration={1000}
        style={{
          width: '90%',
          backgroundColor: '#92ff03',
          borderRadius: 15,
          height: 110,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          margin: 25,
        }}>
        {/* Animated Circle Progress */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Svg width={size} height={size}>
            {/* Background Circle */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={backgroundColor}
              strokeWidth={strokeWidth}
              fill="none"
            />

            {/* Animated Progress Circle */}
            <AnimatedCircle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset} // Link to the animated value
              strokeLinecap="round"
            />
          </Svg>

          {/* Display percentage in the center */}
          <Text
            style={{position: 'absolute', fontSize: 18, fontWeight: 'bold'}}>
            {`${Math.round(validProgress)}%`} {/* Display valid progress */}
          </Text>
        </View>
    
        {/* Description of health progress */}
        <View>
          <Animatable.Text style={styles.text}>Health Grade</Animatable.Text>
          <Text style={styles.textone}>Create progress keep going</Text>
        </View>
      </Animatable.View>
      {/* Icon Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={require('../assets/images/strength.jpeg')}
          />
          <Text style={styles.buttonText}>Strength</Text>
        </View>

        <View style={[styles.iconButton, {backgroundColor: 'gray'}]}>
          <Image
            style={styles.icon}
            source={require('../assets/images/trad.png')}
          />
          <Text style={styles.buttonText}>Tradmil</Text>
        </View>

        <View style={[styles.iconButton, {backgroundColor: 'gray'}]}>
          <Image
            style={styles.icon}
            source={require('../assets/images/shopping.png')}
          />
          <Text style={styles.buttonText}>Strength</Text>
        </View>
      </View>
      {/* Footer */}
      <Animatable.View
        animation={'slideInUp'}
        duration={1000}
        style={styles.footer}>
        <Text style={styles.footerTextone}>Popular Timings 🎉</Text>
        <Text
          style={[
            styles.footerText,
            {textDecorationLine: 'underline', color: 'blue'},
          ]}>
          View more
        </Text>
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
          horizontal
          renderItem={({item, index}) => {
            return (
              <AnimateBtn
                animation={'slideInUp'}
                duration={1000}
                onPress={()=>{navigation.navigate('Third',{data:item})}}
                style={{width: 120, height: 150, borderRadius: 20, margin: 10}}
                >
                <Image
                  source={item.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                <LinearGradient
                  colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.3)', 'rgba(0,0,0,.7)']}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'white',
                      fontWeight: 600,
                      alignItems: 'flex-end',
                    }}>
                    {item.text}
                  </Text>
                </LinearGradient>
              </AnimateBtn>
            );
          }}
        />
      </View>

      <Animatable.View 
      animation={'slideInUp'} 
      duration={1000}
      style={{marginTop: -50}}>
        <Text style={{paddingTop: 50, color: 'white', fontSize: 20}}>
          Best Programs ❤️
        </Text>
      </Animatable.View>
      <View style={{marginTop: 10}}>
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
                  height: 90,
                  borderRadius: 20,
                  marginLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 60,
                    height: 80,
                    borderRadius: 15,
                  }}
                />
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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },
  textone: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
    // fontWeight: 'bold',
    marginTop: 15,
  },
  buttonContainer: {
    marginTop: -40,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  iconButton: {
    marginTop: 30,
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#92ff03',
    borderRadius: 30,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: 100,
    marginLeft: 15,
  },
  icon: {
    height: 24,
    width: 24,
    marginLeft: 5,
  },
  buttonText: {
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  footerText: {
    color: 'white',
  },
  footerTextone: {
    color: 'white',
    fontSize: 18,
  },
});

export default Second;
