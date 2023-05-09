import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  footer: {
    paddingHorizontal: 20,
  },
  socialMedia: {
    paddingVertical: 50,
  },
  socialMediaTitle: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.1,
    color: '#252B42',
    marginBottom: 25,
  },
  socialMediaIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '25%',
  },

  pages: {},

  pagesItem: {},
  pagesItemTitle: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.1,
    color: '#252B42',
  },
  itemPages: {
    marginVertical: 20,
  },
  itemPagesTitle: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: '#737373',
  },
  subscribe: {
    marginTop: 10,
    marginBottom: 70,
  },
  subscribeTitle: {
    fontWeight:'700',
    fontSize:14,
    lineHeight:24,
    letterSpacing:0.1,
    color:'#252B42'
  },
  sendEmail: {
    flexDirection:'row',
    alignItems:'center',
    height:50,
    borderColor:'#E6E6E6',
    borderWidth:1,
    borderRadius:5
  },
  subscribeInput: {
    backgroundColor:'#F9F9F9',
    width:'65%',
    paddingHorizontal:20
  },
  subscribeButton: {
    backgroundColor:'#23A6F0', 
    width:'35%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
},
  buttonText:{
    color:'white',
    fontWeight:'400',
    fontSize:14,
    letterSpacing:0.2
  },
  
  subscribeDescription: {
    fontWeight:'400',
    fontSize:12,
    lineHeight:28,
    letterSpacing:0.2,
    color:'#737373'
  },
  info:{
    alignItems:'center',
    paddingVertical:20,
    backgroundColor:'#FAFAFA'
  },
  infoText:{
    marginBottom:5,
    fontWeight:'700',
    fontSize:14,
    letterSpacing:0.2,
    color:'#737373'
  }
});

export default style;
