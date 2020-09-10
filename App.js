import * as React from 'react'
import {View,Text,Button} from 'react-native'
import {NavigationContainer} from '@ react-navigation/native';
import {createsStackNavugator} from '@ react-navigation/native';

const HomeScreen=(navigation)=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      <Button 
        title="Go to Details"
        onPress={()=>NavigationContainer.navigate(Detail)}
      />
    </View>
  )
}


const DetailScreen=()=>{
  return(
    <View>
      <Text>Detail Screenn</Text>
    </View>
  )
}

const stack = createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.screen name="Home" option={{title:"overview"}} component = {HomeScreen} />
        <stack.Screen name="Detail" component={{DetailScreen}} />
      </stack.Navigator>
    </NavigationContainer>

  )
}



export default App;