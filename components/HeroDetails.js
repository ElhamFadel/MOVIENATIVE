import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import { Vector } from '../assets'
import { getPoster } from '../api'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const { height, width } = Dimensions.get("window");
const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const HeroDetails = ({backPath,posterPath,title,vote,minuts,year}) => {
  return (
    <View>
    <View style={styles.moviePosterImageContainer}>
      <Image
       style={styles.moviePosterImage}
       resizeMode="cover"
       source={{ uri: getPoster(backPath) }}
       />
       {
        vote?(
          <View style={styles.rate}>
        <Vector />
         <Text style={styles.textStyle}>
          {Math.ceil(vote)}
         </Text>
       </View>
        ):null
       }
       <View style={styles.rowDetails}>
         <Image source={{ uri: getPoster(posterPath)}} style={styles.imgStyle}/>
         <Text style={styles.headerTitle}>
           {title}
         </Text>
       </View>
    </View> 
    <View
        style={{
          alignSelf: 'center',
          width: '70%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 8,
          paddingHorizontal: 5,
          marginTop:80
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Feather name="calendar" size={17} color={'#92929D'} />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            2022
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="time-outline" size={17} color={'#92929D'} />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            250
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialIcons name="local-play" size={17} color={'#92929D'} />
          <Text style={{fontSize: 15, fontWeight: '600', color: '#92929D'}}>
            Actions
          </Text>
        </View>
      </View>
      </View>
  )
}

export default HeroDetails

const styles = StyleSheet.create({
 moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "relative",
    left:-99,
    top: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 0,
  },
  moviePosterImage: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: setWidth(101),
    height: setHeight(35),
  },
  rate:{
    flexDirection:'row',
    justifyContent:"space-around",
    alignContent:"center",
    width:50,
    height:20,
    backgroundColor:'#25283652',
    borderRadius:15,
    position:'absolute',
    bottom: 20,
    zIndex:99,
  },
  textStyle:{
    fontSize:15,
    color:"#FF8700"
  },
  rowDetails:{
    width:350,
    height: 70,
    flexDirection:'row',
    alignItems:'flex-end',
  },
  imgStyle:{
     width: 120,
    height: 160,
    borderRadius: 17,
  },
  headerTitle:{fontSize:25,fontWeight:'700',color:'#fff',alignSelf:'flex-start',paddingTop:12,paddingLeft:12}
});