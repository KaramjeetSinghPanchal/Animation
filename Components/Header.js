import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
const [cartitems,setitems] = useState(0)
const cartData = useSelector((state)=>state.reducer)
useEffect(() => {
  setitems(cartData.length)
}, [cartData])  
return (
    <View>
      <Text style={{padding:5,marginTop:50,height:30,width:50,backgroundColor:'yellow',marginLeft:330}}>{cartitems}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})