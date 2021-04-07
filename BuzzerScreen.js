import React,{Component} from 'react';
import{Button,View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import SoundButton from '../components/SoundButton';
import AppHeader from '../components/AppHeader';

class BuzzerScreen extends Component{
  render(){
    return(
      <View>
      <AppHeader/>
      <SoundButton color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}
export default BuzzerScreen