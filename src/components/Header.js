import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props)=> (
    <View style={style.contStyle}>
        <Text style={style.titleStyle}>{props.title} </Text>
    </View>
);

const style= StyleSheet.create({
    contStyle:{
        marginTop: 15,
        backgroundColor: "blue",

        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle:{
        fontSize: 50,
        color: "#fff",
    }
});

export default Header;