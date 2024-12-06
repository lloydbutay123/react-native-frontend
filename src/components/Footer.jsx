import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View>
      <Text style={styles.container}>Copyright 2024 AsianLink.AI All rights reserved.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      textAlign: 'center',
      marginVertical: 20,
      fontSize: 12,
      fontFamily: 'Poppins_400Regular',
    },
})