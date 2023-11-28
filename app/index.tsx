import { StyleSheet, Text,View,ImageBackground,Dimensions,Image } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Button } from 'react-native-elements';
// import image from  ;

import 'react-native-url-polyfill/auto'
import { useRouter } from 'expo-router';




const Index = () => {

  const { width, height } = Dimensions.get('window');
  const imageHeight = height * 0.5;
const imageWidth = width * 0.5;



const router =  useRouter()
let count = 0;

const next = ()=>{
   
}
  return (
    // <View>
    //   <Text>Home Page </Text>
    //   {/* It will by default go to register;s index file  */}
    //   <Link href='register' asChild>
    //     <Button title='GO to Reg ' />
          
    //   </Link>

    //   <Link href='/home' >
    //     GO TO home
          
    //   </Link>

    //   <View style={{ }}>
    //       <Link href='Login' asChild>
    //         <Button title='GO to Login' />
              
    //       </Link>
    //   </View>

    // </View>

    <>

      <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/1680723223972.jpg')}
            style={styles.background}
          > 
            
          </ImageBackground>
        </View>
      <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/front.jpg')}
            style={styles.background}
          > 

                    <View style={styles.container}>
                      <Text style={styles.text}>Find, Charge and                              
                   </Text>
                      <Text style={styles.text}>                              
                      Drive with Confidence </Text>

                      <View style={styles.buttonhead}>
                      <View style={styles.buttonContainer}>
                        <Button title='Skip'  style={styles.navButton}  onPress={()=>{
                          router.push('home')
                        }}/>
                        <Button title='Next' style={styles.navButton} onPress={next}/>
                      </View>
                    </View>


                    </View>

  
            
          </ImageBackground>
        </View>

  {/* <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/aerial-clean-top-view-of-the-night-time-city-map-with-street-and-river-blank-urban-imagination-map-gps-map-navigator-concept-illustration-vector.jpg')}
        style={{ height: imageHeight}}
      > 
        
      </ImageBackground>
     

      <Text style={styles.headerText}>
        Find, Charge
      </Text>
  </View> */}

{/* <View style={styles.container}>
    <ImageBackground source={path} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View> */}

     
    
    </>
 
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonhead:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingHorizontal: 20,
    marginBottom: 100,
    fontSize:20
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    lineHeight: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 fontWeight: 'bold'
  },

  navButton:{
    // padding:20,
    // // textAlign:'center',
    // color:'black',
    // margin: 10
    
  }
})