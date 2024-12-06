import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import globalStyles from '../../../styles/styles'
import Reels from '../../../components/Reels'

export default function EcommerceScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      <Reels />
      <View style={styles.reelWrapper}>
        <ImageBackground style={styles.reelContainer} source={require('../../../../assets/images/AdBanner.png')} resizeMode='cover'>  
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  reelWrapper: {
    marginBottom: 16
  },
  reelContainer: {
    width: '100%',
    height: 120,
  }
})