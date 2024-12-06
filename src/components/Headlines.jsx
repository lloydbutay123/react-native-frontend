import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { headline } from '../helpers/headlines'

export default function Headlines() {
  return (
    <View style={styles.container}>
        <FlatList
            data={headline}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.headline}>
                    <Image style={styles.headlineImage} source={item.image} />
                    <View style={styles.headerTextContainer}>
                        <View style={styles.headlineTextContainer}>
                            <Text style={styles.headlineText} numberOfLines={2}>{ item.content }</Text>
                            <Text style={styles.headlineTextDate}>{ item.date }</Text>
                        </View>
                        <View style={styles.bookmarkContainer}>
                            <Image source={require('../../assets/images/bookmark-02 (1).png')} />
                        </View>
                    </View>
                </View>
            )}
            nestedScrollEnabled={true} // Allow FlatList to scroll within ScrollView
            ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',   
        marginBottom: 20
    },
    headline: {
        display: 'flex',
        flexDirection: 'row',
        gap: 21,
        backgroundColor: 'rgba(0, 0, 128, 1)',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(160, 165, 175, 0.2)',
    },
    headerTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', // Align text and bookmark properly
        flex: 1, // Ensures it takes the available space
        gap: 40,
    },
    headlineText: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'Poppins_500Medium',
        color: '#ffffff',
    },
    headlineTextDate: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins_275Medium',
        color: 'rgba(255, 255, 255, 0.8)',

    },
    headlineTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        flexShrink: 1,
    },
    headlineImage: {
        width: 58,
        height: 60,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 1)',
    },
    bookmarkContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 80,
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    }
})