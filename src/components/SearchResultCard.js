import {View,Image,Text}from 'react-native'
import React from 'react'
import style from '../styles/searchStyle'

const SearchResultCard=({image})=>{

    return(
     <View style={style.searchResultCard}>
       <Image style={style.searchResultImage} source={image}/>
       <Text style={style.searchResultTitle}>Graphic Design</Text>
       <Text style={style.searchResultDescription}>English Department</Text>
       <View style={style.searchResultPrices}>
         <Text style={style.searchResultOldPrice}>$16.48</Text>
         <Text style={style.searchResultNewPrice}>$6.48</Text>
       </View>
       <View style={style.searchResultColors}>
         <View style={[style.searchResultColor,style.bgColorLightBlue]}/>
         <View style={[style.searchResultColor,style.bgColorGreen]}/>
         <View style={[style.searchResultColor,style.bgColorOrange]}/>
         <View style={[style.searchResultColor,style.bgColorDarkBlue]}/>
       </View>
     </View>
    )
}

export default SearchResultCard