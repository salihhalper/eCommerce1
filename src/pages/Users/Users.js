import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const User=(user)=>{
    return(<View style={style.user}>
        <Text style={style.userText}>
          <Text style={style.userBoldText}>Name</Text> : {user.name}
        </Text>
        <Text style={style.userText}>
          <Text style={style.userBoldText}>userName</Text> : {user.username}
        </Text>
        <Text style={style.userText}>
          <Text style={style.userBoldText}>email</Text> : {user.email}
        </Text>
        <Text style={style.userText}>
          <Text style={style.userBoldText}>phone</Text> : {user.phone}
        </Text>
        <Text style={style.userText}>
          <Text style={style.userBoldText}>website</Text> : {user.website}
        </Text>
        <Text style={style.userText}>
          <Text style={style.userBoldText}>company</Text> : {user?.company?.name}
        </Text>
        <Text style={style.userText}>
          <Text style={style.userBoldText}>website</Text> address: {user?.address?.suite}, {user?.address?.city}
        </Text>
       
      </View>
      )
}
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userGet();
  }, []);

  const userGet = async () => {
    console.log('kullanicilar getiriliyor');
    const url = 'https://jsonplaceholder.typicode.com/users';
    const usersResponse = await axios.get(url);
    setUsers(usersResponse.data);
  };

  return (
    <ScrollView style={style.container}>
      {
        users.map(user=><User user={user}/> )
      }
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
     padding:20
  },
  user: {
     padding: 20,
    borderRadius:20,
    borderColor:'black',
    borderWidth:1,
    marginBottom:20
  },
  userText: {
    margin: 3,
  },
  userBoldText: {
    fontWeight:'bold',
    color:'black'
  },
});
export default Users;
