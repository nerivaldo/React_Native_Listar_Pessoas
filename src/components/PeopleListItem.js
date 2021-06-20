import React from 'react';
import { View,Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import {capitalizeFirstLetter} from '../util';


class PeopleListItem extends React.Component{
   
    constructor(props){
        super(props);

        const nav= this.props.nav
      }


render(){
    const {title,first, last} = this.props.people.name;
    const peoples = this.props.people;
    return (
        <TouchableOpacity 
            onPress={() =>{
                this.props.nav.navigate('Detalhes',{
                    people: peoples
                })

                // alert( this.props.people.name.first);
            }}> 

            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri: this.props.people.picture.thumbnail}} /> 
                <Text style={styles.lineText}>                 
                   { title} 

                   {" "+ first} 

                   {" "+ last }      
                </Text>                

                 {/* <PeopleListObject people={this.props.people} />  */}
                
            </View>    
          
         </TouchableOpacity>    
    );
    }
}

const styles = StyleSheet.create({
    line:{
        height:60,
        borderBottomWidth:1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar: {
        aspectRatio:1,
        flex: 1,

        marginLeft: 15,
        borderRadius:50,
    }


})


export default PeopleListItem;
