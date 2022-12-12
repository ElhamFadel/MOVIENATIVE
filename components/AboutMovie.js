import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMovieById } from '../api'

const AboutMovie = ({id}) => {
  const [overV,setState] = useState("");
  useEffect(()=>{
   getMovieById(id).then(({data})=>setState(data.overview))
  },[])
  return (
    <View style={{paddingHorizontal:20,paddingVertical:20}}>
      <Text style={{fontSize:16,color:"#fff",lineHeight:26}}>
       {overV}
       </Text>
    </View>
  )
}

export default AboutMovie

const styles = StyleSheet.create({})