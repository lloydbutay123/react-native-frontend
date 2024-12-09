import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../../../styles/styles'
import Reels from '../../../components/Reels'
import Items from '../../../components/Items'

export default function EcommerceScreen() {
  return (
    <ScrollView style={globalStyles.screenContainer} showsVerticalScrollIndicator={false}>
      <Reels />
      <View style={styles.reelWrapper}>
        <ImageBackground style={styles.reelContainer} source={require('../../../../assets/images/AdBanner.png')} resizeMode='cover'>  
        </ImageBackground>
      </View>
      <Items />
    </ScrollView>
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