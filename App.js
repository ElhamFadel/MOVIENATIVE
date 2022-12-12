import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {FavoritScreen, Home, MovieScreen} from './screens';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './constants/theme';
import  BottomNavigator from './navigation/BottomNavigator';
import 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import ProviderContext from "./Context"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <ProviderContext>
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="white" />
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={BottomNavigator} options={{headerShown: false}} />
        <Stack.Screen name="FavoritScreen" component={FavoritScreen}  />
        <Stack.Screen name="MovieScreen" component={MovieScreen} 
        options={({ navigation, route })=>(
            {
              headerLeft:()=>(
             <TouchableOpacity style={{left:15}} onPress={ ()=>navigation.goBack()} >
              <MaterialIcons name="arrow-back-ios" size={17} color={'#fff'}  />
             </TouchableOpacity>
            ),
            title:"Details",
            headerRight:()=>(
             <TouchableOpacity style={{right:15}}>
             <MaterialIcons name="turned-in" size={25} color={'#fff'}  />
             </TouchableOpacity>
            ),
            headerTitleAlign:'center',
            headerTintColor:'white',
            elevation:0,
            headerStyle:{
             backgroundColor:COLORS.primary
            },
            }
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </ProviderContext>
  );
}
