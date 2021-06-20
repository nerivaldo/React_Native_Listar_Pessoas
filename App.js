import 'react-native-gesture-handler';
import React from 'react';
import { Button, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PeoplePage from './src/pages/Peoplepage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import Testes from './src/pages/Testes';

function Navegarbt({ navigation }){
  return(
    <View>
      <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const Stack = createStackNavigator();

export default class Mystack extends React.Component  {
  render(){
    return (
        <NavigationContainer>
          <Stack.Navigator  initialRouteName="Home"
            screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            
            <Stack.Screen name="Home" component={PeoplePage} 
              options={{
               
                title: 'Lista de Pessoas',
                headerStyle:{
                  backgroundColor: 'red'
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                  fontWeight:'bold'
                }
              }}
            />
            <Stack.Screen name="Testes" component={Testes} />
            <Stack.Screen name="Detalhes" component={PeopleDetailPage}
              options={{                
                title: 'Detalhes...'
              }}
            />
          </Stack.Navigator>        
        </NavigationContainer>  
    );
  }
}

