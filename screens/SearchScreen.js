import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../constants/theme'
import { InputSearch, SmallDetailsCard } from '../components'
import { searchMovie } from '../api'

const renderItem = ({item})=>(
  <SmallDetailsCard item={item} />
)
const SearchScreen = () => {
    const [searchValue,setSearchValue] = useState('')
    const [results,setResult] = useState([]);
    
    useEffect(()=>{
      searchMovie(`${searchValue}`).then(({data})=>setResult(data.results))
    },[searchValue])
  return (
    <View style={{backgroundColor:COLORS.primary,paddingHorizontal:15,minHeight:'100%'}}>
     <InputSearch value={searchValue} handleSearchInput={setSearchValue} />
     {
        (!searchValue || !results)? (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image
                source={require("../assets/no.png")
                }
                />
                <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>we are sorry, we can not find the movie :(</Text>
            </View>
        ):(
        <View style={{paddingHorizontal:15,paddingTop:15}}>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
     </View>
        )
     }
     
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})