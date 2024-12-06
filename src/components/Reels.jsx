import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import reels from '../helpers/reels';

export default function Reels() {
  return (
    <View style={styles.reelsContainer}>
      <FlatList
        horizontal
        data={reels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.reelWrapper}>
            <ImageBackground style={styles.reelContainer} source={item.image} resizeMode="cover">
              <Text style={styles.name}>{item.name}</Text>
            </ImageBackground>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true} // Allow FlatList to scroll within ScrollView
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reelsContainer: {
    height: 225, // Constrain the height of the reels section
    marginBottom: 16,
  },
  contentContainer: {
    gap: 8, // Space between items
  },
  reelWrapper: {
    width: 150,
    height: 225,
    borderRadius: 12,
    overflow: 'hidden', // Ensures the child content respects the borderRadius
  },
  reelContainer: {
    flex: 1, // Ensure the image fills the wrapper completely
    justifyContent: 'flex-end',
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 21,
    color: 'white',
  },
});
