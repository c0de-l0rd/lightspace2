import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

export default function Users({
  users,
  onClickUser,
  userToAdd,
  setUserToAdd,
  onAddFriend,
}) {
  const renderUser = ({item}) => {
    return (
      <Pressable onPress={() => onClickUser(item)} style={styles.row}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <Text>{item.username}</Text>
      </Pressable>
    );
  };
  return (
    <>
      <View style={styles.addUser}>
        <TextInput
          style={styles.input}
          onChangeText={setUserToAdd}
          value={userToAdd}
          placeholder={'Therapist\'s name...'}
        />
        <Pressable style={styles.button} onPress={() => onAddFriend(userToAdd)}>
          <Text style={{color:'white', marginTop:6,marginLeft:1,}}>Add Therapist</Text>
        </Pressable>
      </View>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.username.toString()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: "#FF7518",
    borderBottomWidth: 1,
  },
  addUser: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    marginBottom: 40,
    padding: 10,
    borderRadius: 30,
    borderColor: "#FF7518",
    borderWidth: 1,
    height: 40,
  },
  button:{
    flexDirection: "row",
    backgroundColor: "#FF7518",
    borderRadius: 11,
    color: 'black',
    height: 35,
    width: 90,
  }
});
