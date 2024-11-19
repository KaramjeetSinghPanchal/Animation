import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {addcart} from '../redux/action';
import {removecart} from '../redux/action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Animation2 from '../Screens/Animation2';
const Product = ({itm}) => {
  const navigation = useNavigation();
  const [isadded, setadded] = useState(false);
  const dispatch = useDispatch();
  const carttotalitems = useSelector(state => state.reducer);

  const handleaction = itm => {
    dispatch(addcart(itm));
  };

  const handleremoveaction = itm => {
    dispatch(removecart(itm.name));
  };

  useEffect(() => {
    let result = carttotalitems.filter(element => {
      return element.name === itm.name;
    });
    if (result.length) {
      setadded(true);
    } else {
      setadded(false);
    }
  }, [carttotalitems]);

  return (
    <View style={{marginTop: 50}}>
      <View>
        <Text style={{backgroundColor: 'gold'}}></Text>
        <Text style={{fontSize: 24}}>- {itm.name}</Text>

        <Text>- {itm.type}</Text>
        <Text>- {itm.Modal}</Text>
      </View>

      {isadded ? (
        <Button
          title="Remove to Cart (Redux)"
          onPress={() => handleremoveaction(itm)}
        />
      ) : (
        <Button title="Add to Cart (Redux)" onPress={() => handleaction(itm)} />
      )}
      <Button title="AsyncStorage" onPress={() => navigation.navigate('Nextpage')} />
      <Button title="Animation" onPress={() => navigation.navigate('AnimationHome')} />
      <Button title="Animation2" onPress={() => navigation.navigate('Animation2')} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
