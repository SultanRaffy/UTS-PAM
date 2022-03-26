import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function CancleScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tidak ada aktivitas Pembatalan Tiket</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 18
  }
})
