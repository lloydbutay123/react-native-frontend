import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import tags from '../helpers/tags';

export default function Tags() {
  return (
    <FlatList
      data={tags}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.tagContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true} // Allow FlatList to scroll within ScrollView
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 20,
    minWidth: 75,
    borderColor: 'rgba(160, 165, 175, 0.24)',

  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    color: 'rgba(11, 11, 11, 1)',
    fontFamily: 'Poppins_400Regular',

  },
});
