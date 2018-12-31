import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  Image ,Button,Alert,ScrollView} from 'react-native';


export default class Tiles extends React.Component {
  render() {
    
    return (
            <View style={styles.tileContainer}>
                <Text style={styles.name}>{this.props.name}</Text> 
              
            </View>

    );
  }
}

const styles = StyleSheet.create({
    tileContainer: {
        marginTop:10,
        backgroundColor:'#ffff',
        fontSize:18,
        borderColor:'black',
        borderRadius:4,
        borderWidth:1,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10
        
        
    
  },
  name:{
      color:"#000000"
  }



});
