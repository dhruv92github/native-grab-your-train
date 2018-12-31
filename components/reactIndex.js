import React from 'react';
import {Text,View,ScrollView,Button, StyleSheet } from 'react-native';

export default class ReactIndex extends React.Component{

    render(){
        let pic={
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          }
        return(
            
            <ScrollView>
                <View style={styles.container}>
                    <Image source={pic} style={{width:290,height:210}} />
                    <Text style={styles.red}>Pavan kumar shukla </Text>
                    <Text style={styles.blue}>It again worked!!</Text>
                    <Text style={{color:'green'}}>Its green now</Text>
                    <Button title="See name of fruit" onPress={()=>{Alert.alert("Banana");}}/>
                    <Text style={styles.red}>Pavan kumar shukla </Text>
                    <Text style={styles.blue}>It again worked!!</Text>
                    <Text style={{color:'green'}}>Its green now</Text>
                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    
    red:{
        color:'red',
        fontWeight:'bold',
      },
      blue:{
        color:'blue',
        fontWeight:'bold',
      },
})