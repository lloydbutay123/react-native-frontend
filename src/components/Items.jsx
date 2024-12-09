import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import items from '../helpers/items';

export default function Items() {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.nameContainer}>
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.storeName}>{item.storeName}</Text>
            <Text style={styles.rate}>{item.rate}</Text>
          </View>
          <Text style={styles.price}>₱ {item.price}</Text>
        </View>
      )}
      numColumns={2}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />} // Vertical gap
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper} // Horizontal gap
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between', // Distribute items evenly across columns
    gap: 8, // Horizontal gap between columns
  },
  itemContainer: {
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(160, 165, 175, 0.2)',
    flex: 1, // Adjust width dynamically based on available space
    backgroundColor: 'rgba(255, 255, 255, 1)',
    gap: 8
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productName: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    lineHeight: 18,
  },
  storeName: {
    fontSize: 10,
    color: 'rgba(130, 130, 130, 1)',
    lineHeight: 15,
    fontFamily: 'Poppins_400Regular',
  },
  rate: {
    fontSize: 10,
    color: 'rgba(130, 130, 130, 1)',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 15,
  },
  price: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins_500Medium',
    color: 'rgba(0, 0, 128, 1)',
  },
});
