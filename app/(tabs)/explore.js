import { StyleSheet, Text, View, FlatList  } from 'react-native'
import React from 'react';
import { markers } from './home';



const explore = () => {

  const renderItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        <Text>Latitude: {item.coordinate.latitude}</Text>
        <Text>Longitude: {item.coordinate.longitude}</Text>
      </View>
    );
  };


  return (
    
    <>
        <Text> List of nearby EV Charging Stations </Text>

        <FlatList
      data={markers}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
    </>
  )
}

export default explore

const styles = StyleSheet.create({})