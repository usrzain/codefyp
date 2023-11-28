import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Button } from 'react-native-elements'
import { useRouter } from 'expo-router'

const _layout = () => {

    const router = useRouter()
  return (
    // Empty Stack set the Name of the Fuile on the Top of the Screen
    <Stack>  
            <Stack.Screen name='index' options={{
                title:' '
            }} />

            <Stack.Screen  name='register'  options={{
                title:'Register ',
                headerRight:()=>(
                    <>

                            <Button title='Login' onPress={()=>{router.push('Login')}}
                            style={{
                                borderColor:'green'
                            }}
                            />
                    </>
                )
  
            }}/>

            <Stack.Screen  name='[missing]'  options={{
                title:'404 '
            }}/>

            <Stack.Screen name='Login'  options={{
                title:'Login ',
                presentation:'modal'
            }}/>

            <Stack.Screen name='(tabs)'  options={{
                headerShown:false
            }}/>


            
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})