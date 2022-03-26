import React from 'react'
import { View, Text, Button } from 'react-native'
// import { View } from 'react-native-web'

export default function Jadwal (navigation) {
  const data = [{
    id: '1',
    from: 'bakauheni',
    to: 'merak',
    price: '35.000',
    date: '03/28/22',
    time: '10:00'
  },
  {
    id: '2',
    from: 'merak',
    to: 'bakauheni',
    price: '35.000',
    date: '03/28/22',
    time: '12:00'
  },
  {
    id: '3',
    from: 'bakauheni',
    to: 'ketapang',
    price: '45.000',
    date: '03/28/22',
    time: '8:00'
  },
  {
    id: '4',
    from: 'ketapang',
    to: 'bakauheni',
    price: '45.000',
    date: '03/28/22',
    time: '9:00'
  },
  {
    id: '5',
    from: 'merak',
    to: 'ketapang',
    price: '50.000',
    date: '03/28/22',
    time: '12:00'
  }]

  return (
    <View>
      <Text>Test</Text>
      <Button
        title='Go Back'
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  )
}
