import React from 'react';

/**
 *
 * @pages 9
 *
 * Navbar
 * Home
 * Shop
 * Pages
 * Login
 * Register
 * Search
 * Card
 * Favorite
 *
 */
import {Home,Shop,Search,Users} from './pages'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator(

)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Shop' component={Shop}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Users' component={Users}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
