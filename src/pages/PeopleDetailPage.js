import React from 'react';
import { Button, Text, View,Image,StyleSheet } from 'react-native';
import Line from './../components/Line';

class  PeopleDetailPage extends React.Component{
    render(){
        const otherParam = this.props.route.params.people.name.first;
        const people = this.props.route.params.people;

        console.log(otherParam);
        return(
            <View style={styles.container}>
                <Image source={{uri: people.picture.large}}
                    style={styles.avatar} 
                />
                <Line label='Email:' content={people.email} />
                <Line label='Cidade:' content={people.location.city} />
                <Line label='Estado:' content={people.location.state} />
                <Line label='Tel:' content={people.phone} />
                <Line label='cel:' content={people.cell} />   
                <Line label='Nacionalidade:' content={people.nat} />              
           
            </View>
        );
    }
}


const styles= StyleSheet.create({
    container:{
        padding:10
    },
    avatar:{
        aspectRatio:1
    },
    detaileContainer:{ 
        backgroundColor: '#ddd',
        marginTop:20,
        elevation:1

    }
  
})

export default PeopleDetailPage;
