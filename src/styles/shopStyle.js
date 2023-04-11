import { StyleSheet } from "react-native";
const style=StyleSheet.create({
    shop:{
        backgroundColor:'#FAFAFA',
    },
    topContainer:{
        height:202,
        alignItems:'center',
        justifyContent:'space-around'
    },
    topContainerTitle:{
        fontWeight:'700',
        fontSize:24,
        lineHeight:32,
        color:'#252B42'
    },
    breadCrumb:{
        flexDirection:'row',
        alignItems:'center'
    },
    breadCrumbText1:{
        fontWeight:'700',
        fontSize:14,
        lineHeight:24,
        color:'#252B42'
    },
    breadCrumbText2:{
        fontWeight:'700',
        fontSize:14,
        lineHeight:24,
        color:'#737373'
    },
    breadCrumbImage:{
        marginHorizontal:15
    },
    ShopCards:{
        alignItems:'center'
    },
    shopCard:{
        width: 331,
        height: 300,
        marginVertical:7.5,
        alignItems:'center',
        justifyContent:'center',
        

     },
     shopCardText1:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
        lineHeight:24,
        zIndex:1,
        marginBottom:15
     },
     shopCardText2:{
        color:'white',
        fontWeight:'700',
        fontSize:14,
        lineHeight:24,
        zIndex:1
     },
     overlay:{
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
     }
})
export default style