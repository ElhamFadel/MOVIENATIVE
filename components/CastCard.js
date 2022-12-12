import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { getPoster } from '../api';

const CastCard = ({item}) => {
    const {original_name,profile_path,cast_id} = item;
    useEffect(()=>{

    },[])
  return (
   <View style={{alignItems:'center',marginLeft:15}} id={cast_id}>
      <Image
        source={profile_path ? { uri: getPoster(profile_path) } :require("../assets/avt.png")}
        resizeMode= "contain"
        style={{width:120,height:120,borderRadius:100}}
      />
      <Text style={{color:"#fff"}} >
        {original_name}
      </Text>
    </View>
  )
}

export default CastCard

const styles = StyleSheet.create({})