import { StyleSheet, Text, View, ActivityIndicator ,Dimensions,FlatList, Callout } from 'react-native'
import React , { useState, useEffect} from 'react'
import { Button } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {Link,useLocalSearchParams,useRoute, useRouter } from 'expo-router'


export let markers = [{
  key:1,
  title:'Shell Ev Charging Station',
  coordinate: { latitude: 24.900367915499, longitude: 67.116809226573 },
  pinColor: 'orange'
},
{
  key:2,
  title:'ABB Charging Station',
  coordinate: { latitude: 24.9851725, longitude: 67.1330089 },
  pinColor: 'red'
}
,
{
  key:3,
  title:'BMW Charging Station',
  coordinate: { latitude: 24.8795746, longitude: 67.0811159 },
  pinColor: 'red'
},
{
  key:4,
  title:'Shell Recharge Charging Station',
  coordinate: { latitude: 24.8177669, longitude: 66.9831627 },
  pinColor: 'red'
},
{
key:5,
title:'RA Engineering Pvt LTD',
coordinate: { latitude: 24.8973252, longitude: 66.9951342 },
pinColor: 'red'
},
]



const tabone = () => {

  const router =  useRouter()
  // const usrData = route.params?.usrData || 'Undefined';
  // const {usrdata}= useLocalSearchParams();
  // console.log(usrdata)
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  // const [markers, setMarkers] = useState( { title: 'Marker 1', coordinate: { latitude: 37.78825, longitude: -122.4324 } });
  const renderItem = ({ item }) => {
    return (
      <Marker coordinate={item.coordinate} title={item.title} pinColor="yellow" />
    );
  };
 

  //   Getting user's current location 

  // 24.9851725,67.1330089

  useEffect(() => {
    // Get user's current location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log("Current location",location.coords.latitude, location.coords.longitude)
    })();
  }, []);

  // Add additional locations as needed
  // useEffect(() => {
  //   // Example: Adding a few static markers
  //   setMarkers([
  //     { title: 'Marker 1', coordinate: { latitude: 37.78825, longitude: -122.4324 } },
  //     { title: 'Marker 2', coordinate: { latitude: 37.75825, longitude: -122.4624 } },
  //     // ... add more markers here
  //   ]);

  //   console.log((markers))
  // }, []);


  // const location1 = {Latitude:24.8895, longitude:67.0893 }
 
  return (
    <View>


      {/* {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
       */}
      {/* {!isLoading && !usrdata && ( */}
        <>
     
      {/* <Text>Home zinda </Text>
      <Button title='Go back' onPress={()=>{router.back()}}  style={{ backgroundColor:'green'}}/> */}
      {/* <Text>{data.user.id}</Text> */}

      <View style={{ flex: 1}}>

      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 24.8607,
            longitude: 67.0011,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* User's location marker */}
          <Marker coordinate={location} title="Your Location" pinColor="red" />
          {/* <Marker coordinate={markers[0].coordinate} title={markers[0].title} pinColor="yellow" /> */}
          
          <Marker coordinate={markers[0].coordinate} title={markers[0].title} pinColor="blue" />
          <Marker coordinate={markers[1].coordinate} title={markers[1].title} pinColor="blue" />
          <Marker coordinate={markers[2].coordinate} title={markers[2].title} pinColor="blue" />
          <Marker coordinate={markers[3].coordinate} title={markers[3].title} pinColor="blue" />
          <Marker coordinate={markers[4].coordinate} title={markers[4].title} pinColor="blue" />

          {/* {markers.map((marker) => (
        <Marker
          key={marker.key}
          coordinate={marker.coordinate}
          title={marker.title}
        >
          <Callout showsOnStart={true}>
            <Text>{marker.title}</Text>
          </Callout>
        </Marker>
      ))} */}
          
                  

          {/* {
            markers.map((marker)=>{
              <>
                  <Marker coordinate={marker.coordinate} title={marker.title} pinColor={marker.pinColor} key={marker.key}/>
                  
              </>
            })
          } */}

          {/*<Marker coordinate={location1} title="Your Location" pinColor="blue" />*/}

          {/* <Marker coordinate= {location1} pinColor="yellow" /> */}
          {/* Other markers */}
          {/* {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              pinColor='orange'
            />
          ))} */}
        </MapView>
      )}
    </View>

      </>
      

      {/* )} */}
    </View>
  )
}

export default tabone

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height *0.9,
  },
});