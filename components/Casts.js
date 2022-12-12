import { FlatList, StyleSheet,Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCasts } from '../api'
import CastCard from './CastCard';
import ItemSeparator from './ItemSeparator';

const renderItem = ({item}) =>(
 <CastCard item={item} />
)
const Casts = ({id}) => {
  const [casts,setCasts] = useState([]);
  useEffect(()=>{
   getCasts(id).then(({data})=>setCasts(data.cast))
  },[])
  return (
    <View style={{alignSelf:'center',marginTop:10}}>
     <FlatList 
        data={casts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
         ItemSeparatorComponent={() => <ItemSeparator height={20} />}
        style={{flexDirection: 'column'}}
      />
    </View>
  )
}

export default Casts;

const styles = StyleSheet.create({})