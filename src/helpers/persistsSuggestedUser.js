import AsyncStorage from '@react-native-async-storage/async-storage';


export const suggestedUser = async (user) => {

        try {

          await AsyncStorage.setItem('suggestedMatch', JSON.stringify(user))

        } catch (err) {

          console.log(err) 

        }        
}

export const getData = async (state, setState) => {

  try {

    const jsonValue = await AsyncStorage.getItem('suggestedMatch')

    if (jsonValue !== null) {

      const parsedUser = JSON.parse(jsonValue)
      setState(({...state, suggestedUser: parsedUser }))

    }
    
  } catch (e) {
    // error reading value
    console.log(e)
  }
}

export const removeSuggested = async () => {
  try {

    await AsyncStorage.removeItem('suggestedMatch')
    
  } catch (err) {
    
    alert(err)
  } finally {

  }
}
