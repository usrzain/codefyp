import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { Button } from 'react-native-elements'

const SinglePost = () => {

    const {id }  = useLocalSearchParams()

    const router = useRouter()
    
  return (
    <View>
        <Stack.Screen  options={{
            headerTitle:"POST "+ id
        }}/>

        <Button title='BACK'  onPress={()=>{router.back()}}/>
      <Text>This is post No {id} </Text>
    </View>
  )
}

export default SinglePost

const styles = StyleSheet.create({})