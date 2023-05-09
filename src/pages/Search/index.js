import {View, Text,TouchableOpacity,Image,ScrollView} from 'react-native';
import React from 'react';

import style from '../../styles/searchStyle'

import SearchResultCard from '../../components/SearchResultCard'
import Footer from '../../components/Footer'

import {SortIcon1,SortIcon2,DropDownIcon} from '../../assets/icons'
const Filter = () => {
  return (
    <View style={style.filter}>
      <Text style={style.title}>Showing all 12 results</Text>
      <View style={style.showFilters}>
        <Text style={style.viewsText}>Views: </Text>
        <View style={style.iconContainer}>
            <SortIcon1/>
        </View>
        <View style={style.iconContainer}>
            <SortIcon2/>
        </View>
      </View>
      <View style={style.filterActions}>
        <TouchableOpacity style={[style.filterButton,style.dropDownButton]}>
            <Text style={style.dropDownButtonText}>
                Popularity
            </Text>
            <DropDownIcon/>
        </TouchableOpacity>

        <TouchableOpacity style={[style.filterButton,style.blueButton]}>
            <Text style={style.blueButtonText}>
                Filter
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const SearchResults = () => {
  return (
    <View style={style.searchResults}>
      <SearchResultCard image={require('../../assets/images/product-1.png')}/>
      <SearchResultCard image={require('../../assets/images/product-2.png')}/>
      <SearchResultCard image={require('../../assets/images/product-3.png')}/>
    </View>
  );
};

const Search = () => {
  return (
    <ScrollView style={style.search}>
      <Filter />
      <SearchResults />
      <Footer/>
    </ScrollView>
  );
};

export default Search;
