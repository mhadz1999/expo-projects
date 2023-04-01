import React, { Component } from 'react' 
import {View, Text, StyleSheet, Button, Alert, } from 'react-native'

class App extends Component{
    
    showAlert = () => {
            Alert.alert(
                'Message',
                'This is a message',
                [
                 { 
                    text:'OKAY', 
                    onPress: () => console.log('OKAY'),
                 }
                ]
    )
    }// This is also the same as 
    
        render (){
            return(
            <View style={styles.container}> 
            <Text>How are you? </Text>
            <Button title= "Click Here" onPress={this.showAlert}/>
            
            </View>
            
          )
        }
      }
const styles = StyleSheet.create({
    container: {
    backgroundColor: "#FFA07A", 
    flex: 1, 
    alignItems: "center",
    justifyContent: "center", 
    },
})

export default App;