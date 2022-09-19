import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Text, StatusBar, SafeAreaView} from 'react-native'
import DatePicker from 'react-native-date-picker'
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment'


const DATA = [
  
];

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);


const Appointments = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [datas, setDatas] = useState(DATA)

  const listData = (selectetdDate) => {
    
    var res = moment(selectetdDate).format('MMMM Do, YYYY');
    DATA.push({
      id: '58694a0f-3da1-471f-bd96-145571e29d7',
      title: res,
    });

    setDatas(DATA);
  }


  return (
    <View>
   
     <FlatList
        data={datas}
        renderItem={item => (<TouchableOpacity style={styles.item}>
          <Text style={styles.title}>{item.item.title}</Text>
        </TouchableOpacity>)}
        keyExtractor={item => item.id}
      />

       <TouchableOpacity 
        delayPressIn={0} style={[styles.fab, styles.elevation]} title="Open" onPress={() => setOpen(true)}>
           <MaterialIcons name="add" size={34} color="white" />
       </TouchableOpacity>

  
    <DatePicker
    androidVariant = 'nativeAndroid'
    modal
    open={open}
    date={date}
    onConfirm={(date) => {
      setOpen(false)
      setDate(date)
      listData(date)
    }}
    onCancel={() => {
      setOpen(false)
    }}
  />


      
   </View>
  )
}

const styles = StyleSheet.create({
  fab:{
    marginTop: 530,
    left: 270,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#1DA1F2',
    position: 'absolute'
  },
  elevation: {
    elevation: 12,
    shadowColor: '#1DA1F2',
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 32,
  },
})

export default Appointments;