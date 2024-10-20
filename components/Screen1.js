import { Text, SafeAreaView, StyleSheet ,View, Image, TextInput, TouchableOpacity,Icon} from 'react-native';
import React,{useState, useContext} from 'react';
import {NameContext} from '../App';

export default function Screen1({navigation}){
  const{setName}=useContext(NameContext);
  return(
    <View style={style.container}>
     <View style={{alignItems:'center'}}>
    <Text style={style.text1}>A premium online store for</Text>
    <Text style={style.text1}>sporter and their stylish choice</Text>
     </View>
    <Image source={require("../assets/bikexanh.png")} style={{width:292,height:270,alignSelf: 'center'}}/>
    <View style={{alignItems:'center'}}>
     <Text style={style.text2}>POWER BIKE</Text>
    <Text style={style.text2}>SHOP</Text>
    </View>
    

    <View style={{alignItems:'center'}}>
    <TouchableOpacity
    onPress={()=>navigation.navigate('screen2')} style={{backgroundColor:'#E94141',padding:10
    ,borderRadius:15,width:250}}>
    <Text style={{textAlign:'center',color:'white'}}>
    Get Started
    </Text>
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
    fontWeight:550,
    fontSize:18,
    color:'#000000',
  },
  text2:{
    fontWeight:650,
    fontSize:24,
    color:'#000000',
  },

});











