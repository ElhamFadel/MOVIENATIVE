import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Vector } from '../assets'
import { getPoster } from '../api'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const SmallDetailsCard = ({navigation,item:{poster_path,title,vote_average,id}}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MovieScreen", { movieId: id })} style={{flexDirection:'row',width:220,justifyContent:'space-between',marginVertical:7}} >
      <Image
       style={styles.moviePosterImage}
       resizeMode="cover"
       source={{ uri: getPoster(poster_path) }}
       />
       <View style={styles.movieDetails}>
          <Text style={{color:'#fff',fontSize:18,paddingBottom:20}}>{title}</Text>
          <View style={styles.row}>
            <Vector />
            <Text style={styles.txt}>{vote_average}</Text>
          </View>
          <View
          style={styles.row}>
          <MaterialIcons name="local-play" size={17} color={'#92929D'} />
          <Text style={styles.txt}>
            Actions
          </Text>
        </View>
          <View
          style={styles.row}>
          <Ionicons name="time-outline" size={17} color={'#92929D'} />
          <Text style={styles.txt}>
            250 MIN
          </Text>
        </View>
       </View>
       </TouchableOpacity>
  )
}

export default SmallDetailsCard

const styles = StyleSheet.create({
    moviePosterImage: {
    width: 120,
    height: 160,
    borderRadius: 17,
  },
  txt:{
   fontSize: 16, color: '#fff',paddingLeft:5
  },
  row:{
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   alignSelf:'flex-start',
   paddingBottom:10
  }

})