import { Text, View,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import {getMovieById} from "../api";
import { HeroDetails,Casts,Reviwes,AboutMovie } from '../components';
import { COLORS } from '../constants/theme';


const stats = [
  {
    id:'about',
    title:"About Movie"
  },
  {
    id:"reviwe",
     title:"Reviews"
  },
  {
    id:"cast",
    title:"Cast"
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

const MovieScreen = ({route,navigation}) => {
  const {movieId} = route.params;
  const [movieDetails,setMovieDetails] = useState({});
  const [stateActive,setState] = useState('about');
  const renderItem = ({ item }) => listRenderItem(item, setState);

  useEffect(()=>{
    getMovieById(movieId).then(({data})=>setMovieDetails(data))
  },[])
   return (
    <ScrollView style={{backgroundColor:COLORS.primary}}>
    <HeroDetails title={movieDetails?.title} backPath={movieDetails?.backdrop_path} vote={movieDetails.vote_average} posterPath={movieDetails.poster_path} />
    <View>
     <FlatList
          horizontal
          data={stats}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
    </View>
    {
      stateActive == 'about'?<AboutMovie id={movieId} /> : stateActive == 'reviwe'?<Reviwes />:<Casts id={movieId} />
    }
    </ScrollView>
  );
};

export default MovieScreen;