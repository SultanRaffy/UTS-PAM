import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, Picker, Platform } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker'
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
export default function HomeScreen ({ navigation }) {
  const [selectedValueFrom, setSelectedValueFrom] = useState(' ')
  const [selectedValueTo, setSelectedValueTo] = useState(' ')
  const [selectedValueService, setSelectedValueService] = useState(' ')

  const [date, setDate] = useState(new window.Date())
  const [mode, setModeDate] = useState('date')
  const [showDate, setShowDate] = useState(false)

  const onChange = (event, selectedDate) => {
    // console.log('selectedDate',selectedDate)
    const currentDate = selectedDate || date
    setShowDate(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showModeDate = currentMode => {
    setShowDate(true)
    setModeDate(currentMode)
  }

  const showDatepicker = () => {
    showModeDate('date')
  }

  const showTimepicker = () => {
    showModeDate('time')
  }

  return (
    <ScrollView>

      <View style={styles.container}>
        <Text style={styles.title}>Kapalzy</Text>
        <Text style={styles.labelForm}>Pelabuhan Awal</Text>
        <View style={styles.formSection}>
          <Icon name='ship' type='font-awesome-5' size={30} color='blue' />
          {/* <TextInput placeholder='Pilih Pelabuhan Awal' style={styles.textInput} /> */}
          <Picker selectedValue={selectedValueFrom} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValueFrom(itemValue)}>
            <Picker.Item label='Merak' value='MR' />
            <Picker.Item label='Bakauheni' value='BK' />
            <Picker.Item label='Ketapang' value='KP' />
          </Picker>
        </View>
        <Text style={styles.labelForm}>Pelabuhan Tujuan</Text>
        <View style={styles.formSection}>
          <Icon name='anchor' type='feather' size={30} color='blue' />
          {/* <TextInput placeholder='Pilih Pelabuhan Awal' style={styles.textInput} /> */}
          <Picker selectedValue={selectedValueTo} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValueTo(itemValue)}>
            <Picker.Item label='Merak' value='MR' />
            <Picker.Item label='Bakauheni' value='BK' />
            <Picker.Item label='Ketapang' value='KP' />
          </Picker>
        </View>
        <Text style={styles.labelForm}>Kelas Layanan</Text>
        <View style={styles.formSection}>
          <Icon style={styles.icon} name='suitcase' type='fontisto' size={30} color='blue' />
          {/* <TextInput placeholder='Pilih Pelabuhan Awal' style={styles.textInput} /> */}
          <Picker selectedValue={selectedValueService} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValueService(itemValue)}>
            <Picker.Item label='Reguler' value='reg' />
            <Picker.Item label='Express' value='exp' />
          </Picker>
        </View>
        <Text style={styles.labelForm}>Tanggal Masuk</Text>
        <View style={styles.formSection}>
          <Icon name='calendar' type='font-awesome-5' size={30} color='blue' />
          <View style={{ marginBottom: 12 }}>
            {/* <Text style={styles.labelPicker}>Tangal Masuk</Text> */}
            <Button style={styles.dateButton} color='#39AEA9' onPress={showDatepicker} title={date.toLocaleDateString()} />
          </View>
          {showDate && (
            <DateTimePicker
              testID='dateTimePicker'
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour
              display='default'
              onChange={onChange}
            />
          )}
        </View>
        <Text style={styles.labelForm}>Jam Masuk</Text>
        <View style={styles.formSection}>
          <Icon name='watch-later' type='materials-icons' size={30} color='blue' />
          <View style={{ marginBottom: 12 }}>
            {/* <Text style={styles.labelPicker}>Jam Masuk</Text> */}
            <Button style={styles.dateButton} color='#39AEA9' onPress={showTimepicker} title='10:00' />
          </View>
          {showDate && (
            <DateTimePicker
              testID='dateTimePicker'
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour
              display='default'
              onChange={onChange}
            />
          )}
        </View>
        <Button
          buttonStyle={{ width: 150 }}
          containerStyle={{ margin: 5, alignItems: 'center' }}
          title='Buat Ticket'
          icon={<Icon name='search' type='feather' size={20} color='white' />}
          iconContainerStyle={{ background: '#000' }}
          onPress={() => navigation.navigate('Jadwal')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
    shadowColor: '#52006A'
  },
  formSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20
  },
  labelForm: {
    marginTop: 20,
    marginHorizontal: 20,
    fontWeight: 'bold'
  },
  title: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold'
  },
  picker: {
    width: 250,
    height: 50,
    borderColor: 'white',
    fontSize: 16,
    backgroundColor: '#cacaca',
    borderRadius: 10
  }
})
