import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import style from '../../styles/shopStyle';
import ShopCard from '../../components/ShopCard';

const TopContainer = () => {
  return (
    <View style={style.topContainer}>
      <Text style={style.topContainerTitle}>Shop</Text>
      <View style={style.breadCrumb}>
        <Text style={style.breadCrumbText1}>Home</Text>
        <Image
          style={style.breadCrumbImage}
          source={require('../../assets/images/arrow-right.png')}
        />
        <Text style={style.breadCrumbText2}>Shop</Text>
      </View>
    </View>
  );
};
const ShopCards = () => {
  return (
    <View style={style.shopCards}>
      <ShopCard
        text1="TEXT 1"
        image={require('../../assets/images/shop-1.png')}
      />
      <ShopCard
        text1="TEXT 2"
        image={require('../../assets/images/shop-2.png')}
      />
      <ShopCard
        text1="TEXT 3"
        image={require('../../assets/images/shop-3.png')}
      />
      <ShopCard
        text1="TEXT 4"
        image={require('../../assets/images/shop-4.png')}
      />
      <ShopCard
        text1="TEXT 5"
        image={require('../../assets/images/shop-5.png')}
      />
    </View>
  );
};

const Shop = () => {
  return (
    <ScrollView style={style.shop}>
      <TopContainer />
      <ShopCards />
    </ScrollView>
  );
};

export default Shop;
