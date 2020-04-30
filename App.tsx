import * as React from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Fontisto, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { Colors } from './core/Colors'

import Info from './assets/info-button.svg'
import PriceSentenceScreen from './screens/PriceSentenceScreen'
import PriceScreen from './screens/PriceScreen'


function suppliersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>suppliers!</Text>
    </View>
  )
}


function contactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>contact!</Text>
    </View>
  )
}


const Tab = createBottomTabNavigator()
const PriceStack = createStackNavigator()
const SuppliersStack = createStackNavigator()
const ContactStack = createStackNavigator()


const TabsNavigation = () =>  {

  const suppliersStack  = () => 
    <SuppliersStack.Navigator>
      <SuppliersStack.Screen
        name="suppliersStack"
        component={suppliersScreen}
        options={{
          title: "Поставщики",
          headerStyle: { ...styled.headerStyle },
          headerTitleStyle:{...styled.headerTitleStyle},
          headerRightContainerStyle:{marginRight: 18},
          headerRight:()=>(
            <Info
              onPress= {()=>Alert.alert('Информация')} 
              color = {Colors.icongrey}
              />
          ),
          headerTintColor: "white"
        }}
      />
    </SuppliersStack.Navigator>

  const priceStack  = () =>
    <PriceStack.Navigator
     mode= 'modal'>
      <PriceStack.Screen
        name = 'priceStack'
        component={PriceScreen}
        options={{
          title: "Прайс-листы",
          headerStyle: { ...styled.headerStyle },
          headerTitleStyle:{...styled.headerTitleStyle},
          headerRightContainerStyle:{marginRight: 18},
          headerTintColor: "white",
          headerRight:()=>(
            <Info
              onPress= {()=>Alert.alert('Информация')} 
              color = {Colors.icongrey}
              />
          ),
        }}
        />
      <PriceStack.Screen
        name = 'priceSentenceStack'
        component={PriceSentenceScreen}
        options={{
          title: "Прайс-листы",
          headerStyle: { ...styled.headerStyle },
          headerTitleStyle:{...styled.headerTitleStyle},
          headerRightContainerStyle:{marginRight: 18},
          headerTintColor: "white",
          headerRight:()=>(
            <Info
              onPress= {()=>Alert.alert('Информация')} 
              color = {Colors.icongrey}
              />
          ),
        }}
      />
    </PriceStack.Navigator>

  const contactStack  = () => 
    <ContactStack.Navigator>
      <ContactStack.Screen
        name="contactStack"
        component={contactScreen}
        options={{
          title: "Контакты",
          headerStyle: { ...styled.headerStyle },
          headerTitleStyle:{...styled.headerTitleStyle},
          headerTintColor: "white",
        }}
      />
    </ContactStack.Navigator>
  
  return (
    <Tab.Navigator 
      initialRouteName ='Price'
      tabBarOptions={{
        style:{paddingTop: 18},
        showLabel: false,
        activeTintColor: Colors.sunshine,
        inactiveTintColor: Colors.blackIconOpacity
      }}>
      <Tab.Screen 
        name="suppliers" 
        component={suppliersStack} 
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="shopping-store" color={color} size={30} />
          ),
      }}/>
      <Tab.Screen name="Price" component={ priceStack }         
        options={{
         tabBarIcon: ({ color }) => (
          <Feather name="file-text" color={color} size={30} />
          ),
      }}/>
      <Tab.Screen name="contact" component={contactStack}  
        options={{
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-circle-outline" color={color} size={35} />
          ),
      }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  )
}

const styled = StyleSheet.create({
  headerStyle:{
    backgroundColor: "#ffffff",
    borderBottomColor: Colors.icongrey, 
    borderBottomWidth:1 
  },
  headerTitleStyle:{
    color:Colors.textblack,
    fontSize: 20,
    fontWeight:'700'
  }
})