import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import globalStyles from '../../../styles/styles'
import Headlines from '../../../components/Headlines'
import News from '../../../components/News'
import Categories from '../../../components/Categories'

export default function NewsScreen() {
  return (
    <ScrollView style={globalStyles.screenContainer} showsVerticalScrollIndicator={false} >
      <Categories />
      <Headlines />
      <News />
    </ScrollView>
  )
}