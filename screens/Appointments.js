import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Text, StatusBar, SafeAreaView, Alert} from 'react-native'
import DatePicker from 'react-native-date-picker'
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';



let DATA = [
  
];

const Item = ({  item, onPress, backgroundColor, textColor }) => (
  <SafeAreaView onPress={onPress} style={[styles.item, backgroundColor]}>
  <MenuProvider style={styles.dotcontainer}>
       <View>
         <Menu>
           <MenuTrigger>
   <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
 </MenuTrigger>

           <MenuOptions>
             <MenuOption  text="Cancel" />
             <MenuOption onSelect={() => {
                 // Filter Data 
            const filteredData = DATA.filter(items => items.id !== item.id);
            //Updating List Data State with NEW Data.
            DATA = filteredData;
            setDatas(DATA)
             }}>
             
               <Text style={{ color: 'red' }}>Delete</Text>
             </MenuOption>
           </MenuOptions>
         </Menu>
       </View>
     </MenuProvider>
   <Text style={[styles.title, textColor]}>{item.title}</Text>
 </SafeAreaView>
);


const Appointments = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [datas, setDatas] = useState(DATA);
  
  let Itemid = 0;

  const listData = (selectetdDate) => {
    
    
    var res = moment(selectetdDate).format('MMMM Do, YYYY');
    DATA.push({
      id: Itemid,
      title: res,
    });

    setDatas(DATA);
  }

  // (() =>
  //   Alert.alert(
  //     "Appointments",
  //     "the following set of therapy assesment questions will help us connect you to the right therapist for your problem.",
     
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       { text: "OK", onPress: () => console.log("OK Pressed") }
  //     ]
  //   ))()


  const renderItem = ({ item }) => {
 

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor:"#6e3b6e" }}
        textColor={{ color:'white' }}
      />
    );
  };



  return (
    <View>
   
     <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => item.id++}
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
    backgroundColor: "#FF7518",
    position: 'absolute'
  },
  elevation: {
    elevation: 12,
    shadowColor: "#FF7518",
  },

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  dotcontainer: {
    flex: 1,
    flexDirection: "row",
     alignSelf: "flex-end",
    
    paddingBottom: 30,
  
  },
})

export default Appointments;