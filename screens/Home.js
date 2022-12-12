import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,FlatList, ScrollView,TouchableOpacity,Image } from 'react-native'
import { getNowPlayingMovies, getPopularMovies, getPoster, getTopRatedMovies, getUpcomingMovies } from '../api';
import { Card,ItemSeparator, InputSearch } from '../components'
import { COLORS } from '../constants/theme';

const categories = [
  {
    id:"1",
    title:"Now Playing"
  },
  {
    id:"2",
    title:"Upcoming"
  },
  {
    id:"3",
    title:"Top rated"
  }
  ,
  {
    id:"4",
    title:"Popular"
  }
];

const listRenderItem = (item, onPress) => (
  <TouchableOpacity
      key={item.id}
      style={{paddingVertical: 10, marginHorizontal: 5, paddingHorizontal: 15}}
      onPress={()=>onPress(item.id)}
      >
      <Text style={{color: COLORS.white, fontSize: 18}}>{item.title}</Text>
    </TouchableOpacity>
)    

const HomeScreen = ({navigation}) => {
  const [movies,setMovies] = useState([]);
  const [active,setActive] = useState("1");
  const [moviesFollowingFilter,setMFF] = useState([]);
   const renderItem = ({ item }) => listRenderItem(item, setActive);
   const renderCardSmallImage = ({item})=>(
    <TouchableOpacity onPress={()=>{}} style={{flexDirection:'row'}}>
    <View style={{marginLeft:12}}>
    <Image
       style={{width: 120,height: 160,borderRadius: 17,paddingVertical:20}}
       resizeMode="cover"
       source={{ uri: getPoster(item.poster_path) }}
       />
      </View>
    </TouchableOpacity>
   )
  useEffect(()=>{
    getNowPlayingMovies().then(({data})=>setMovies(data.results))
  },[]);

useEffect(()=>{
    if(active == "4"){
       getPopularMovies().then(({data})=>setMFF(data.results))
    }else if(active=="2"){
      getTopRatedMovies().then(({data})=>setMFF(data.results))
    }else if(active == "3"){
       getUpcomingMovies().then(({data})=>setMFF(data.results))
    }else{
      getNowPlayingMovies().then(({data})=>setMFF(data.results))
    }
  },[active]);

  return (
    <ScrollView>
    <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>What do you want to watch?</Text>
        <InputSearch />
      </View>
      <View >
        <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false} 
        keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={10} />}
          ListHeaderComponent={() => <ItemSeparator width={10} />}
          ListFooterComponent={() => <ItemSeparator width={10} />}
          renderItem={({ item }) => (
            <Card
            title={item.title}
            poster={item.poster_path}
            onPress={() => navigation.navigate("MovieScreen", { movieId: item.id })}
            />
          )}
        />
      </View>
      {/* cat */}
      <View>
        <FlatList
          horizontal
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
      </View>
      {/* Movies */}
      <View style={{paddingHorizontal:10,paddingVertical:30,alignItems:'center'}}>
        <FlatList 
        data={moviesFollowingFilter}
        renderItem={renderCardSmallImage}
        keyExtractor={item => item.id}
        numColumns={3}
         ItemSeparatorComponent={() => <ItemSeparator height={20} width={10} />}
        style={{flexDirection: 'column'}}
      />
      </View>
    </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeContainer:{
   backgroundColor:COLORS.primary,
   flex:1,
   paddingTop:35,
  },
  headerContainer:{
     marginHorizontal:15
  },
  listViwes:{
   flexDirection:'row'
  },
  textHeader:{
   color:COLORS.white,
   fontWeight:'bold',
   fontSize:18
  },
  listViwes:{

  }
})