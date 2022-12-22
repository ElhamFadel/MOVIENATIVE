import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,item) => {
  try {
    const data = JSON.stringify(item)
    await AsyncStorage.setItem(key, data);
    // console.log("hiiiiiii",stor);
    return;
  } catch (e) {
    console.log(e)
  }
}

// reading 
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    console.log("datattatatatatattattata",data,key);
    return data != null ? JSON.parse(data) : null;
  } catch(e) {
    console.log(e)
  }
}
// refresh data
export const updateData =  async ({key,data}) =>{
     const prevData = await getData(key);
     console.log(prevData,"previuossssss")
     if(prevData.length == 0){
        console.log("storeeee Data",data)
         return storeData(key, data);
       }
      console.log("collection Data",prevData,data)
    //  const convertPrevData = JSON.parse(prevData);
     return storeData(key, [...prevData, data])
}

export async function deleteData({key, id}) {
  const prevData = await getData(key);
  const newData = prevData.filter(item => item.id !== id);
  await AsyncStorage.removeItem(key);
  storeData(key, newData);
}