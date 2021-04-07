import React,{Component} from 'react';
import{Button,View,Text,StyleSheet} from 'react-native';
 
class AppHeader extends Component{
  render(){
    return(
      <View>
      <Text style={styles.text}> Quiz Buzzer App </Text>
      </View>
    )
  }
  } 

  const styles= StyleSheet.create({
    text:{
    color:'black',
    padding:20,
    fontSize:22,
    fontWeight:'bold',
    textAlign:"center"
    }
  })

  export default AppHeader