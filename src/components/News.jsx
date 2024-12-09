import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { news } from '../helpers/news'

export default function News() {
  return (
    <View style={styles.container}>
        <FlatList
            horizontal
            data={news}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style={styles.news}>
                    <View style={styles.frame}>
                        <Text style={styles.scope}>{ item.scope }</Text>
                        <View style={styles.icon}>
                            <Image source={require('../../assets/images/bookmark-02.png')} />
                        </View>
                    </View>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.content}>
                       { item.content }
                    </Text>
                    <View style={styles.writer}>
                        <View style={styles.writerContainer}>
                            <Image style={styles.authorProfile} source={require('../../assets/images/johnlloyd.jpg')} />
                            <Text style={styles.author}>{ item.author }</Text>
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>{ item.date }</Text>
                        </View>
                    </View>
                </View>
            )} 
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true} // Allow FlatList to scroll within ScrollView
         />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
    news: {
        padding: 12,
        borderWidth: 1,
        gap: 12,
        borderRadius: 14,
        borderColor: 'rgba(160, 165, 175, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    frame: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 80
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 80,
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    scope: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        lineHeight: 30,
        color: 'rgba(36, 47, 185, 1)'
    },
    image: {
        width: 200,
        height: 140,
        borderRadius: 4
    },
    content: {
        width: 200,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
        flex: 1
    },
    writer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 27
    },
    writerContainer: {
        gap: 4
    },
    authorProfile: {
        width: 20,
        height: 20,
        borderRadius: 80
    },
    author: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 18,
        color: 'rgba(160, 165, 175, 1)'
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    date: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 18,
        color: 'rgba(160, 165, 175, 1)'
    }
})