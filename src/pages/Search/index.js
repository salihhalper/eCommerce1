import { View } from "react-native"
import React from "react"
const Filter =()=>{
    return (
        <View>
            <Text>
                Filter
            </Text>
        </View>
    )
}
const SearchResults =()=>{
    return (
        <View>
            <Text>
                Search Results
            </Text>
        </View>
    )
}
const Search =()=>{
    return (
        <View>
            <SearchResults/>
        </View>
    )
}

export default Search;