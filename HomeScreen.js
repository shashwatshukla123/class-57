import React,{Component} from 'react';
import{Button,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import AppHeader from '../components/AppHeader';
 
class HomeScreen extends Component {
  goToBuzzerScreen=(buzzerColor)=>{
  this.props.navigation.navigate('BuzzerScreen',{color:buzzerColor})
  }
  render(){
    return(
      <View>
      <AppHeader/>
      <TouchableOpacity style={[
      styles.button,{backgroundColor:'red'}
      ]}
      onPress={()=>{
        this.goToBuzzerScreen('red')
      }

      }>
      <Text style={styles.buttontext}>Team 1</Text>
      </TouchableOpacity>
        <TouchableOpacity style={[
      styles.button,{backgroundColor:'blue'}
      ]}
            onPress={()=>{
        this.goToBuzzerScreen('blue')
      }

      }>

      <Text style={styles.buttontext}>Team 2</Text>
      </TouchableOpacity>
            <TouchableOpacity style={[
      styles.button,{backgroundColor:'yellow'}
      ]}
            onPress={()=>{
        this.goToBuzzerScreen('yellow')
      }

      }>

      <Text style={styles.buttontext}>Team 3</Text>
      </TouchableOpacity>
            <TouchableOpacity style={[
      styles.button,{backgroundColor:'green'}
      ]}
            onPress={()=>{
        this.goToBuzzerScreen('green')
      }

      }>

      <Text style={styles.buttontext}>Team 4</Text>
      </TouchableOpacity>

      </View>
    )
  }
} 

const styles = StyleSheet.create({
  button:{
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderRadius:15,
    marginTop:50,
    width:200,
    height:50
    },
    buttontext:{
    textAlign:"center",
    color:"white"
    
    }
})
export default HomeScreen