import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import style from '../styles/shopStyle';
const ShopCard = props => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={style.shopCard}
      source={props.image}>
      <Text style={style.shopCardText1}>{props.text1}</Text>
      <Text style={style.shopCardText2}>5 Items</Text>
      <View style={style.overlay} />
    </ImageBackground>
  );
};
export default ShopCard;
