import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../../../styles/styles'
import Headlines from '../../../components/Headlines'
import News from '../../../components/News'
import Tags from '../../../components/Tags'

export default function PublicService() {
  return (
    <ScrollView style={globalStyles.screenContainer}>
      <Headlines />
      <News />
      <Tags />
    </ScrollView>
  )
}