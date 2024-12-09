import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import communityTab from '../helpers/communityTab'

export default function CommunityTab() {
  return (
    <View style={styles.container}>
        { communityTab.map((item) => {
            return (
                <View style={styles.communityTabContainer}>
                    <Image source={item.icon} />
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 6,
        flexWrap: 'wrap',
        marginBottom: 16
    },
    communityTabContainer: {
        flexBasis: '32%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0, 0, 128, 1)',
        borderRadius: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins_500Medium',
        color: 'white'
    }
})

