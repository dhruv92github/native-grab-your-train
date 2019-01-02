import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{this.props.name}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'#ad1457',
        
      
      },
      title:{
        color:'#ffffff',
        fontSize:25,
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold'
    
    },
    
});