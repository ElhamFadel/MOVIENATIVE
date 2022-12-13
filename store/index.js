import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,item) => {
  try {
    const data = JSON.stringify(item)
    const stor = await AsyncStorage.setItem(key, data);
    console.log("hiiiiiii",stor);
    return;
  } catch (e) {
    console.log(e)
  }
}

// reading 
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key)
    return data != null ? JSON.parse(data) : null;
  } catch(e) {
    console.log(e)
  }
}
// refresh data
export const updateData =  async ({key,data}) =>{
     const prevData = await getData(key);
     if(!prevData){
         return storeData(key, [data]);
       }
     const convertPrevData = JSON.parse(prevData);
     return storeData(key, [...convertPrevData, data])
}

export async function deleteData({key, id}) {
  const prevData = await getData(key);
  const newData = prevData.filter(item => item.id !== id);
  await AsyncStorage.removeItem(key);
  storeData(key, newData);
}