import { grey } from "@mui/material/colors";
import { style } from "@mui/system/Stack/createStack";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";
import { TherapyRequest } from "../assesmentQuestionScreens/sharedVars";

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      loc: "Chinama Hospital",
      time: "\n15:00 - 17:00 fri, sat sun"
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",  
      loc: "Chelstone Hospital",
      time: "\n15:00 - 17:00 fri, sat sun"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      loc: "UTH ",
      time: "\n15:00 - 17:00 fri, sat sun"
    },
  ];

  const Item = ({ item, onPress, onPressIn, backgroundColor, textColor }) => (
    <Pressable onPress={onPress} style={[styles.item, backgroundColor]}
                onPressIn={onPressIn}>
      <Text style={[styles.title, textColor]}>{[item.loc, item.time]}</Text>

    </Pressable>
  );

const Location = ({navigation}) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      
      const color = item.id === selectedId ? '#FF7518' : 'black';
  
      return (
        <Item
          item={item}
          onPressIn={() => {setSelectedId(item.id);
          TherapyRequest['location'] = item.loc; console.log(TherapyRequest['location'])}}
          onPress={()=> navigation.navigate('description')}
          style={styles.backgroundColor}
          textColor={{ color }}
        />
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize:18, marginHorizontal: 16}}>Chose a location for your group therapy session:</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );
  };

  export default Location
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: grey,
    },
    title: {
      fontSize: 16,
    },
    backgroundColor:{
        backgroundColor: '#fffff'
    }
  });
  


