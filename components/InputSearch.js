import { StyleSheet, View,TextInput,TouchableOpacity } from 'react-native'
import { COLORS } from '../constants/theme'
import { SearchIcon } from '../assets'
import { useState } from 'react'
const Search = ({handleSearchInput,value}) => {
  return (
    <View style={styles.searchContainer} >
      <TextInput type="text" placeholder='Search' placeholderTextColor="#67686D" defaultValue={value} onChangeText={newText => handleSearchInput(newText)} />
      <TouchableOpacity onPress={()=>{}}>
      <SearchIcon />
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
   backgroundColor:'#3A3F47',
   height:40,
   borderRadius:15,
   paddingHorizontal:12,
   paddingVertical:10,
   marginTop:17,
  //  paddingTop:20
  },
})