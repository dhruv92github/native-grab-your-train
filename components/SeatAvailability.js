import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,StyleSheet } from 'react-native'


export default class SeatAvailability extends Component {
  render() {
    return (
    
      <View style={styles.container}>
         <View style={styles.header}>
                <Text style={styles.title}>Seat Availability</Text>
              </View>
        <View style={styles.content}> 
        <TextInput 
          placeholder="Source"  
          style={styles.input}

        />
        <TextInput 
          placeholder="Destination"  
          style={styles.input}
          
        />
        <TouchableOpacity style={styles.btn}>
            <Text style={{color:'#ffffff'}}>Search Trains</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffff',
        fontSize:18,
        
        color:'#323232',
    
  },
    input:{

    },
    btn:{
        backgroundColor:'#ad1457',
        color:'#ffffff',
        height:40,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },
    title:{
        color:'#ffffff',
        fontSize:25,
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold'
    
    },
    header:{
      flex:1,
      backgroundColor:'#ad1457',
      
    
    },
    content:{
        flex:6,
        padding:5,
        backgroundColor:'#ffffff',
    }
});
