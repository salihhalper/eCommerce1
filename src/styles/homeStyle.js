import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  home: {
    backgroundColor: 'white',
    height: '100%',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 35,
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '300',
    fontSize: 30,
    lineHeight: 45,
    color: '#737373',
  },
  activeHeaderText: {
    color: 'black',
    fontWeight: '400',
  },
  actions: {
    alignItems: 'center',
    marginTop: 10,
  },
  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topActionsText: {
    fontWeight: '400',
    fontSize: 27,
    lineHeight: 45,
    color: '#23A6F0', // hex code
    marginLeft: 5,
  },
  bottomActions: {
    alignItems: 'center',
    height: '47%',
    justifyContent: 'space-evenly',
  },
  bottomActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomActionsText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#23A6F0',
  },
  bottomActionsImage: {
    marginRight: 7,
  },
  modal: {
    backgroundColor: 'rgba(45, 158, 247, 0.25)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems:'center'
  },
  modalCloseButton: {
    alignItems: 'flex-end',
    width:'100%'
  },
  modalCloseIcon: {
    fontSize: 25,
    fontWeight:'bold',
    marginRight:10
  },
  modalSearch:{
    borderColor:'#CACACA',
    borderWidth:1,
    borderRadius:5,
    backgroundColor:'#F1F1F1',
    marginTop:55,
    paddingHorizontal:15,
    width:'100%'
  },
  modalSearchButton:{
    backgroundColor:'rgba(45, 158, 247, 0.45)',
    alignItems:'center',
    marginTop:20,
    paddingVertical:10,
    width:'50%',
    borderRadius:5,

  },
  modalSearchButtonText:{
    fontWeight:'bold',
    color:'white',
    fontSize:15,

  }
  
});

export default style;
