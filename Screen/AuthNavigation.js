import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Landing from "./AuthScreen/Landing";
import Registration from "./AuthScreen/Register";
import Login from "./AuthScreen/Login";
import ProductDetailsScreen from "./MainScreen/ProductDetails";
import CartScreen from "./MainScreen/Cart";
import HomeScreen from "./MainScreen/Home";
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/AntDesign'

export default function Navigation() {
  const Stack = createStackNavigator();
  const TabNavigator = createBottomTabNavigator();

  const MainTab = () => (
    <TabNavigator.Navigator>
        <TabNavigator.Screen name="Home" component={HomeScreen}
        options={{
            headerShown:false,
            tabBarIcon:({focused})=> (
                <Icon name ="home" size={20} color={focused ? '#551E18' : '#000'}/>
  ),
        }}/>
        <TabNavigator.Screen name="Cart" component={CartScreen}
        options={{
            headerShown:false,
            tabBarIcon:({focused})=> (
                <Icon1 name ="shoppingcart" size={20} color={focused ? '#551E18' : '#000'}/>
  ),
        }}/>
    </TabNavigator.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Landing"
          component={Landing}
        />
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="Login" component={Login} />        

        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainTab}
        />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
