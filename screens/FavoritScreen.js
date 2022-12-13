import { StyleSheet, Text, View,FlatList } from 'react-native'
import { SmallDetailsCard } from '../components'
import { COLORS } from '../constants/theme'
import { useStore } from '../hooks/useStoreMovie'

const renderItem = ({item})=>(
  <SmallDetailsCard item={item} />
)

const FavoriteScreen = () => {
  const {data} = useStore();
  console.log(data,"helllo")
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:COLORS.primary}}>
      {
        data? <View style={{paddingHorizontal:15,paddingTop:15}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
     </View>
     :
     <View>
      <Text>
        Nooooooooooo
      </Text>
      </View>
      }
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})