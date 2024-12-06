import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import categories from '../helpers/categories'

export default function Categories() {
  return (
   <FlatList
   horizontal
    data={categories}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View key={item.id} style={styles.tagContainer} >
          <Text style={styles.text}>{item.name}</Text>
        </View>
    )}
    showsHorizontalScrollIndicator={false}
    nestedScrollEnabled={true} // Allow FlatList to scroll within ScrollView
    contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 16,
      gap: 16
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins_500Medium',
      color: 'rgba(160, 169, 175, 1)'
    }
})