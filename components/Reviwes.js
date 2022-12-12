import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const reviwes = [
  {
    id:1,
    name:"Iqbal Shafiq Rozaan",
    rev:"From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government."
  },
  {
    id:2,
    name:"Iqbal Shafiq Rozaan",
    rev:"From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government."
  }
]
const cardReviwe = ({item}) =>(
  <View style={{width:380,height:120,flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
    <View style={{flexDirection:'column',alignItems:'center'}}>
      <Image source={require("../assets/avt.png")} style={{width:70,height:70,borderRadius:15,marginBottom:5}}/>
      <Text style={{fontSize:15,color:'blue'}}>9.0</Text>
    </View>
    <View>
      <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',marginBottom:5}}>
        {item.name}
      </Text>
      <Text style={{color:'#fff',width:290,fontSize:15,lineHeight:20}}>
        {item.rev}
      </Text>
    </View>
  </View>
)
const Reviwes = () => {
  return (
    <View style={{alignSelf:'center',paddingTop:8}}>
        <FlatList 
          data={reviwes}
          renderItem={cardReviwe}
          keyExtractor={item => item.id}
          />
    </View>
  )
}

export default Reviwes

const styles = StyleSheet.create({})