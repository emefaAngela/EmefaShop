import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Product_details from "./pages/Product_details";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";



export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style={{ flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator
        screenOptions={{ headerShown: false ,}} initialRouteName="Explore"
        >
           <MainNavigator.Screen name="Homepage" component={Homepage}/>
          <MainNavigator.Screen name="Login" component={Login}/>
          <MainNavigator.Screen name="SignUp" component={SignUp}/>
          <MainNavigator.Screen name="Product_details" component={Product_details}/>
          <MainNavigator.Screen name="Cart" component={Cart}/>
          <MainNavigator.Screen name="Explore" component={Explore}/>
          <MainNavigator.Screen name="Checkout" component={Checkout}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

