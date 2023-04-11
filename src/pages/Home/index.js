import React from 'react';
import {View, Text,Image} from 'react-native';

import style from '../../styles/homeStyle';

import {SearchIcon} from '../../assets/icons'

const NavBar = () => {
  return (
    <View style={style.navBar}>
      <Image source={require('../../assets/images/logo.png')}/>
      <Image source={require('../../assets/images/menu.png')}/>
    </View>
  );
};
const Header = () => {
  return (
    <View style={style.header}>
      <Text style={[style.headerText,style.activeHeaderText]}>
        Home
      </Text>
      <Text style={style.headerText}>Shop</Text>
      <Text style={style.headerText}>About</Text>
      <Text style={style.headerText}>Blog</Text>
      <Text style={style.headerText}>Contact</Text>
      <Text style={style.headerText}>Pages</Text>
    </View>
  );
};
const Actions = () => {
  return (
    <View style={style.actions}>
      <View style={style.topActions}>
        <Image source={require('../../assets/images/user.png')}/>
        <Text style={style.topActionsText}>
          Login / Register
        </Text>
      </View>
      <View style={style.bottomActions}>
        <View style={style.bottomActionsContainer}>
          
          <SearchIcon/> 
        </View>
        <View style={style.bottomActionsContainer}>
          <Image 
            style={style.bottomActionsImage} 
            source={require('../../assets/images/card.png')}
          />
          <Text style={style.bottomActionsText}>1</Text>
        </View>
        <View style={style.bottomActionsContainer}>
          <Image 
            style={style.bottomActionsImage} 
            source={require('../../assets/images/favorite.png')}
          /> 
          <Text style={style.bottomActionsText}>1</Text>
        </View>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View style={style.home}>
      <NavBar/>
      <Header/>
      <Actions/>
    </View>
  );
};

export default Home;
