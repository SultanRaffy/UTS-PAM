import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

export default function OtherScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <View style={styles.menuContainer}>
        <View style={styles.menuContent}>
          <Icon name='search' type='evil-icons' size={30} color='blue' />
          <Text>Cek Pemesanan</Text>
        </View>
        <View style={styles.menuContent}>
          <Icon name='user' type='font-awesome' size={30} color='green' />
          <Text>Detail Profil</Text>
        </View>
        <View style={styles.menuContent}>
          <Icon name='phone-call' type='feather' size={30} color='red' />
          <Text>Hubungi Kami</Text>
        </View>
        <View style={styles.menuContent}>
          <Icon name='history' type='font-awesome-5' size={30} color='orange' />
          <Text>Riwayat Pemesanan</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    marginVertical: 125,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
    shadowColor: '#52006A'
  },
  menuContent: {
    width: 125,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 20,
    shadowColor: '#52006A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 20,
    marginBottom: 20
  }
})
