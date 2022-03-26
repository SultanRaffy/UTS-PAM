// import { Formik } from 'formik'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text } from 'react-native-elements'
// import { Button } from 'react-native-elements/dist/buttons/Button'
// import { Input } from 'react-native-elements/dist/input/Input'
// import { useAsyncStorage } from '@react-native-async-storage/async-storage'
// import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function OrderScreen () {
  return (
    <View style={style.container}>
      <View style={style.destinasi}>
        <Text style={style.destinasiTitle}>Bakauheni</Text>
        <Icon name='long-arrow-right' type='font-awesome' />
        <Text style={style.destinasiTitle}>Merak</Text>
      </View>
      <View style={style.detail}>
        <Text style={style.title}>Jadwal Masuk Pelabuhan</Text>
        <Text>Kamis, 17 Maret 2022</Text>
        <Text>15:30</Text>
      </View>
      <View style={style.detail}>
        <Text style={style.title}>Layanan</Text>
        <Text>Express</Text>
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginHorizontal: 20 }} />
      <View style={style.total}>
        <Text>Dewasa 1x</Text>
        <Text>Rp65.000</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
    shadowColor: '#52006A'
  },
  destinasi: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold'
  },
  destinasiTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detail: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  total: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  }
})
