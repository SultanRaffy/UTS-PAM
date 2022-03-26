// import 'react-native-gesture-handler'
import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import OrderScreen from './src/screens/OrderScreen'
import CancleScreen from './src/screens/CancleScreen'
import DatePicker from './src/screens/OtherScreen'
// import Jadwal from './src/screens/Jadwal'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { Icon } from 'react-native-elements'
// import { Pressable, StyleSheet, Modal } from 'react-native'
// import DatePicker from './src/screens/DatePicker'
// import { Toast } from 'react-native-toast-message/lib/src/Toast'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button } from 'react-native'

const Tab = createBottomTabNavigator()
// const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name=' '
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: 'blue'
            },
            tabBarLabel: 'Beranda',
            tabBarIcon: ({ tintColor }) => (<Icon name='home' type='font-awesome' size={30} color='blue' />)
          }}
        />
        <Tab.Screen
          name='Daftar Pemesanan'
          component={OrderScreen}
          options={{
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTitleStyle: {
              color: 'white'
            },
            tabBarLabel: 'Pesanan Saya',
            tabBarIcon: ({ tintColor }) => (<Icon name='book' type='font-awesome-5' size={30} color='blue' />)
          }}
        />
        <Tab.Screen
          name='Daftar Pembatalan'
          component={CancleScreen}
          options={{
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTitleStyle: {
              color: 'white'
            },
            tabBarLabel: 'Pembatalan',
            tabBarIcon: ({ tintColor }) => (<Icon name='money-bill' type='font-awesome-5' size={30} color='blue' />)
          }}
        />

        <Tab.Screen
          name='Lainnya'
          component={DatePicker}
          options={{
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTitleStyle: {
              color: 'white'
            },
            tabBarLabel: 'Lainnya',
            tabBarIcon: ({ tintColor }) => (<Icon name='menu' type='feather' size={30} color='blue' />)
          }}
        />

        {/* <Tab.Screen name='Pesanan Saya' component={OrderScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   headerIcon: {
//     marginRight: 10
//   }
// })
