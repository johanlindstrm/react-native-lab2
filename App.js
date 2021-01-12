import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

// TODO
// CSS touch ups
  // Devices align properly
  // Images imported and used correct

// Total device on 
  // display correct amount of devices on when button is pressed
const kitchen = require('./assets/kitchen.png')
const bedroom = require('./assets/bed.png')
const livingroom = require('./assets/living-room.png')

const Room = ({value, icon}) => {
  return(
    <View style={{backgroundColor:"#40bab9" , width:120, height:140}}>
      <View>
        <Image style={styles.imgSize} source={icon}/>
        <Text style={{textAlign: 'center', fontWeight:'bold', paddingTop:10}}>{value}</Text>
      </View>
    </View>
  );
};

const Rooms = () => {
  return(
    <View style={styles.rowContainer}>
      <Room icon={livingroom} value={"Living Room"} />
      <Room icon={bedroom} value={"Bedroom"} />
      <Room icon={kitchen} value={"Kitchen"} />
    </View>
  );
};


let amount = 0;

const Device = ({value}) => {

const [indicatorColor, setIndicatorColor] = useState('gray');

  return(
    <View style={styles.deviceStyle}>
      <View 
        style={{backgroundColor: indicatorColor, height:20 , width: 20, marginLeft:20}}>
      </View>

      <View style={{flex:0.8, marginLeft:20}}>
        <Text style={{fontSize:18}}>{value}</Text>
      </View>

      <View style={{backgroundColor:'white', width:50, flex:0.15, }}>
        <Button title="On" onPress={() => {
          setIndicatorColor('green')
          console.log('indicator color:', indicatorColor);

        }} />

        <Button title="Off" onPress={() => {
          setIndicatorColor('red');
          console.log('indicator color:', indicatorColor);
        }} />
      </View>
    </View>
  );
};

const Devices = () => {
  return(
    <View style={{alignItems:'center'}}>
      <Device value={"Living Room Lamp"} />
      <Device value={"Heater"} />
      <Device value={"TV"} />

    </View>
  );
};


export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image
          source={require('./assets/house.png')} style={{width:60, height:60}}
        />
        <Text style={styles.header}>
          SmartHome
        </Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Rooms</Text>
      </View>

      <View>
       <Rooms></Rooms>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Devices</Text>
      </View>

      <View style={styles.colContainer}>
        <Devices></Devices>
      </View>

      <View style={styles.titleContainer}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>Total Devices On: {amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    width: '100%',
    height: "100%",
  },

  indicatorLight: {
    width:20,
    height:20,
    //alignSelf:'center'
  },

  imgSize: {
    width: 100,
    height: 100,
    alignSelf:'center',
    marginTop:5
  },

  headerContainer: {
    //backgroundColor: 'lightblue',
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 60,

  },

  header: {
    color: "#40bab9",
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  titleContainer: {
    //backgroundColor: 'lightblue',
    height: '5%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 15,

  },

  title: {
    color: "black",
    fontSize: 22,
    fontWeight: 'bold',
  },

  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: 'yellow',
  },

  colContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },

  deviceStyle: {
    width: 400,
    height: 100,
    backgroundColor: 'beige',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin:5,
    alignItems:'center',
  },




});
