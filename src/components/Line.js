import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Line  = ({label, content})=>{
    return(
    <View style={styles.detaileContainer}>
        <View style={styles.line}>
            <Text style={[styles.cell, styles.label]}>{label}</Text>
            <Text  style={[styles.cell,{flex:4},styles.lognLabel]}>{content}</Text>
        </View>                  
    </View>
    )
}


const styles= StyleSheet.create({
    line:{
        flexDirection: 'row',
        paddingTop:3,
        paddingBottom:3,
        borderWidth:1,
        borderColor: '#c5c5c5'
    },
    clearInterval:{
        fontSize: 18,
        paddingLeft: 5,
    },
    label:{
         fontWeight:'bold',
         flex: 1,
    },
    lognLabel:{
        fontSize:12
    }

});

export default Line;

