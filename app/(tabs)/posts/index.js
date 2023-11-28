import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const pages = () => {
  return (
    <View>
          <Text>  LIST OF PAGES </Text>
         <Link href='/posts/1' >POST 1</Link>
         <Link href='/posts/2' >POST 2</Link>
         <Link href='/posts/3' >POST 3</Link>
         <Link href='/posts/4' >POST 4</Link>
    </View>
  )
}

export default pages

const styles = StyleSheet.create({})