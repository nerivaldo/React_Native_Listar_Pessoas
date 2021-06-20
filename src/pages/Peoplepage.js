import React, { Component } from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity, ActivityIndicator } from 'react-native';

import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      peoples:[],
      loading:false
    };      
  }

  componentDidMount(){
    this.setState({loading:true});
    setTimeout(()=>{
      axios
      .get('https://randomuser.me/api/?nat=br&results=15')
      .then(response => {
        const {results} = response.data; 
        this.setState({
          peoples: results,
          loading: false
        });
      })
    }, 1000)
  }
  renderLoad(){
    if(this.state.loading){
      if(this.state.loading)
      {
        return <ActivityIndicator size='large' color='#6ca'/>
      }else{
        return null;
      }
      
      
    
    }
  }

  renderList(){    
    const textElements = this.state.peoples.map(people=>{
      const {first} = people.name;
      return <Text key={first}>{first}</Text> 
    });   
    return textElements;
  }

  render(){
    
    return (
      <View style={styles.container}>
        {/* {this.renderLoad()} */}
        { 
          this.state.loading
          ?<ActivityIndicator size='large' color='#6ca'/>
          :
          <PeopleList 
            peoples={this.state.peoples} 
            nav={this.props.navigation}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center'
  }
})

// function Navegarbt({ navigation }){
//   return(
//     <View>
//       <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Testes')}
//       />
//     </View>
//   )
// }