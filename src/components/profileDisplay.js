'use strict';
import React, {Component} from 'react';
import {View, ScrollView, Text, Image, Linking} from 'react-native';
import ProfileEditDialog from './profileEditDialog'


// {this.props.userInfo.firstname} {this.props.userInfo.lastname}
// {this.props.userInfo.loc}
// <Image source={this.props.userInfo.picLink} alt="Pic"/>
// {this.props.userInfo.dogname}
// {this.props.userInfo.dogBreed}
// {this.props.userInfo.dogAge}
// <ProfileEditDialog userInfo={this.props.userInfo} resetUserInfo={this.props.resetUserInfo} />
class ProfileDisplay extends Component {
  constructor(props) {
  super(props);
  }


  render(){
    return (
      <ScrollView>
        <View>
            <Text style={styles.headerText}> 
              Your Info 
            </Text>
          <Text style={styles.centerText}>Name:{'  '+this.props.profile.name}</Text>
        </View>

        <View>
          <View style={styles.image}>
          <Image 
          style={{width:150,height:150}}
          source={{uri:this.props.profile.picture}} />
          <Text> Profile Picture </Text>
          </View>

          <View>
          <Text style={styles.otherText}>Location: {this.props.profile.loc || 'Albuquerque, NM'}</Text>
          </View> 
          
          <View style={styles.padding}>
          </View>

          <View>
            <Text style={styles.headerText}> 
              Your Pup's Info
            </Text>
            <Text style={styles.centerText}>Name: {this.props.profile.dogName || 'Gomi Dorin'}</Text>
          </View>

          <View style={styles.image}>
            <Image source={{uri:this.props.profile.dogpic} || {uri:'https://i.ytimg.com/vi/KY4IzMcjX3Y/maxresdefault.jpg}'}} />
          </View>

          <View>
            <Text style={styles.smallPadding}>Breed: {this.props.profile.dogBreed || 'Golden Retriever'}</Text>
            <Text style={styles.otherText}>Age: {this.props.profile.dogAge || '14'}</Text>
          </View>
        </View>
      </ScrollView>
    )
  }   
}

const styles = {
  headerText:{
    fontSize: 30,
    fontWeight:'bold',
    textAlign:'center'
  },
  centerText:{
    textAlign:'center',
    fontWeight:'bold'
  },
  otherText:{
    paddingLeft:100
  },
  image:{
    paddingTop: 20,
    paddingBottom: 20,
    alignItems:'center',
  },
  padding:{
    paddingBottom:30
  },
  smallPadding:{
    paddingBottom:15,
    paddingLeft:100
  }
}

module.exports = ProfileDisplay;