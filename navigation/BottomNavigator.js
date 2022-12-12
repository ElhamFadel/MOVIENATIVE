import { StyleSheet, View ,Text} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { FavoritScreen,HomeScreen, SearchScreen } from '../screens';
import {Home,Search2,Bookmark} from "../assets";
import { COLORS } from '../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();
const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height:30,
          borderTopWidth: 0,
          elevation: 0,
        },
        activeTintColor: COLORS.active,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{tabBarIcon:({color})=><View>
          <Home  />
        </View>,headerShown:false}}
         />
       <Tab.Screen name="Search" component={SearchScreen} 
          options={({ navigation, route })=>(
            {
              headerLeft:()=>(
             <TouchableOpacity style={{left:15}} onPress={ ()=>navigation.navigate("Home")} >
              <MaterialIcons name="arrow-back-ios" size={17} color={'#fff'}  />
             </TouchableOpacity>
            ),
            headerRight:()=>(
             <TouchableOpacity style={{right:15}}>
             <MaterialIcons name="info" size={20} color={'#fff'}  />
             </TouchableOpacity>
            ),
            headerTitleAlign:'center',
            headerTintColor:'white',
            tabBarIcon:({color})=><View>
            <Search2 />
           </View>,
            elevation:0,
            headerStyle:{
             backgroundColor:COLORS.primary
            },
            }
          )}
         />
          <Tab.Screen name="Watch List"
           component={FavoritScreen} 
           options={({ navigation, route })=>(
          {  
            headerLeft:()=>(
             <TouchableOpacity style={{left:15}} onPress={ ()=>navigation.goBack()} >
              <MaterialIcons name="arrow-back-ios" size={17} color={'#fff'}  />
             </TouchableOpacity>
            ),
            headerTitleAlign:'center',
            headerTintColor:'white',
            elevation:0,
            headerStyle:{
             backgroundColor:COLORS.primary
            },
            tabBarIcon:({color})=><View>
            <Bookmark />
           </View>
           }
        )}
         />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})  