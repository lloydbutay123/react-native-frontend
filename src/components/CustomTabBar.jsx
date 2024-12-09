import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';

export default function CustomTabBar({ state, descriptors, navigation }) {
  const renderTab = ({ item, index }) => {
    const { options } = descriptors[item.key];
    const label = options.tabBarLabel || item.name;

    const isFocused = state.index === index;

    const onPress = () => {
      if (!isFocused) {
        navigation.navigate(item.name);
      }
    };

    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.tab,
          isFocused ? styles.activeTab : styles.inactiveTab,
        ]}
      >
        <Text
          style={[
            styles.label,
            isFocused ? styles.activeLabel : styles.inactiveLabel,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={state.routes}
        keyExtractor={(item) => item.key}
        renderItem={renderTab}
        horizontal
        showsHorizontalScrollIndicator={false} // Hide scroll indicator for better UX
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(248, 248, 248, 1)', // Background color for the tab bar
  },
  container: {
    alignItems: 'center', // Vertically align tabs
    paddingHorizontal: 20, // Space on either side of the tabs
    paddingBottom: 16,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12, // Horizontal padding for better spacing
    height: 50, // Fixed height for each tab
    marginRight: 6, // Space between tabs
    borderRadius: 50, // Rounded edges
  },
  activeTab: {
    backgroundColor: 'navy',
  },
  inactiveTab: {
    backgroundColor: 'rgba(241, 242, 247, 1)',
    borderWidth: 1,
    borderColor: 'rgba(160, 165, 175, 0.2)',
  },
  label: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins_500Medium',
  },
  activeLabel: {
    color: '#fff',
  },
  inactiveLabel: {
    color: 'rgba(160, 165, 175, 1)',
  },
});
