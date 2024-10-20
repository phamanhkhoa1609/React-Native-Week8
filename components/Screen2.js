import{Text,View,Image,TextInput,StyleSheet,TouchableOpacity,FlasList } from'react-native';
import { NameContext } from '../App';
import React, { useContext, useState, useEffect } from 'react';

export default function Screen2({navigation}){
  const{ name }=useContext(NameContext);
  const [task,setTask] =useState([]);
  const [searchText,setSearchText]=useState('');

return(
  <View style={style.container}>

  <View style={{alignItems:'center'}}>
  <Text style={style.text1}>The world's best bike</Text>
  </View>

 <View style={style.filterContainer}>
        <TouchableOpacity style={[style.filterButton, style.activeFilter]}>
          <Text style={style.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterButton}>
          <Text style={style.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterButton}>
          <Text style={style.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>

  </View>
  
);
}
const style=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'space-evenly',
    alignItems:'center',
},
text1:{
    fontWeight:700,
    fontSize:25,
    color:'#E94141',
},
filterContainer:{
  flexDirection:'row',
  justifyContent:'center',
  marginBottom:20
},
 filterButton: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: '#FF3D00',
    borderColor: '#FF3D00',
  },
  filterText: {
    color: '#000',
    fontSize: 14,
  },
  
  


});








