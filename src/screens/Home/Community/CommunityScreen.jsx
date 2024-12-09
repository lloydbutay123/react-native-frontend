import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CommunityTab from '../../../components/CommunityTab'
import globalStyles from '../../../styles/styles'
import Reels from '../../../components/Reels'
import Post from '../../../components/Post'

export default function CommunityScreen() {
  return (
    <ScrollView style={globalStyles.screenContainer} showsVerticalScrollIndicator={false} >
      <CommunityTab />
      <Reels />
      <Post />
    </ScrollView>
  )
}