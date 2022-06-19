import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Todo from './components/Todo';
import { COLORS, images } from './constants';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';



function HomeScreen({navigation}) {


 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Todo')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >

<Stack.Screen 
        name="Login"
        options={({route}) => ({
          headerShown: false
        })}
         component={Login} />

{/* <Stack.Screen 
        name="Login"
        options={({route}) => ({
          headerShown: false
        })}
         component={Login} /> */}


        <Stack.Screen 
        name="Home"
        options={({route}) => ({
          // headerBackTitleVisible: false,
          // headerTitle: false,
          // headerTransparent: true,
          headerShown: false
        })}
         component={HomeScreen} />

<Stack.Screen 
        name="Landing"
        options={({route}) => ({
          // headerBackTitleVisible: false,
          // headerTitle: false,
          // headerTransparent: true,
          headerShown: false
        })}
         component={Landing} />
    
    

<Stack.Screen 
        name="Todo"
         component={Todo}
         options={{
          title: 'Tasks',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
}
});

export default App