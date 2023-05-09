import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import style from '../../styles/homeStyle';

import {SearchIcon} from '../../assets/icons';

const NavBar = () => {
  return (
    <View style={style.navBar}>
      <Image source={require('../../assets/images/logo.png')} />
      <Image source={require('../../assets/images/menu.png')} />
    </View>
  );
};
const Header = ({navigation}) => {
  return (
    <View style={style.header}>
      <Text style={[style.headerText, style.activeHeaderText]}>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Shop');
        }}>
        <Text style={style.headerText}>Shop</Text>
      </TouchableOpacity>
      <Text style={style.headerText}>About</Text>
      <Text style={style.headerText}>Blog</Text>
      <Text style={style.headerText}>Contact</Text>
      <Text style={style.headerText}>Pages</Text>
    </View>
  );
};
const Actions = ({navigation}) => {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <View style={style.actions}>
      <View style={style.topActions}>
        <Image source={require('../../assets/images/user.png')} />
        <Text style={style.topActionsText}>Login / Register</Text>
      </View>
      <View style={style.bottomActions}>
        <TouchableOpacity
          onPress={() => setModalvisible(true)}
          style={style.bottomActionsContainer}>
          <SearchIcon style={style.bottomActionsImage} />
        </TouchableOpacity>
        <TouchableOpacity style={style.bottomActionsContainer}>
          <Image
            style={style.bottomActionsImage}
            source={require('../../assets/images/card.png')}
          />
          <Text style={style.bottomActionsText}>1</Text>
        </TouchableOpacity>
        <View style={style.bottomActionsContainer}>
          <Image
            style={style.bottomActionsImage}
            source={require('../../assets/images/favorite.png')}
          />
          <Text style={style.bottomActionsText}>1</Text>
        </View>
      </View>
      <Modal transparent={true} visible={modalvisible}>
        <View style={style.modal}>
          <View style={style.modalContainer}>
            <TouchableOpacity
              style={style.modalCloseButton}
              onPress={() => setModalvisible(false)}>
              <Text style={style.modalCloseIcon}>x</Text>
            </TouchableOpacity>
            <TextInput style={style.modalSearch} placeholder="search" />
            <TouchableOpacity onPress={()=>navigation.navigate('Search')} style={style.modalSearchButton}>
              <Text style={style.modalSearchButtonText}>SEARCH NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={style.home}>
      <NavBar />
      <Header navigation={navigation} />
      <Actions navigation={navigation}/>
    </View>
  );
};

export default Home;
