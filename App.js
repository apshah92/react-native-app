import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AppContextProvider} from './store';
import SiteList from './components/siteList';
import siteDetails from './components/siteDetails';



const Stack = createStackNavigator();


class App extends React.Component {
  constructor(props){
    super(props);
  } 


  render() {
    return (
      <>
      <AppContextProvider>
        <NavigationContainer>          
          <Stack.Navigator initialRouteName="All Sites">
            <Stack.Screen name="All Sites" component={SiteList} />
            <Stack.Screen name="Site Details" component={siteDetails} />
          </Stack.Navigator> 
        </NavigationContainer>
      </AppContextProvider>
      </>
    );    
  }

}



export default App;
