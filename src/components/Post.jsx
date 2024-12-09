import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import posts from '../helpers/posts'

export default function Post() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.userHeaderContainer}>
          <View style={styles.userHeader}>
            <Image style={styles.userProfile} source={require('../../assets/images/johnlloyd.jpg')} />
            <View>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.datePosted}>{item.datePosted}</Text>
            </View>
          </View>
          <Image style={styles.moreIcon} source={require('../../assets/images/more-vertical.png')} />
          </View>
          <Text style={styles.content}>{item.content}</Text>
          <Image style={styles.image} source={require('../../assets/images/sample-post.jpg')} sizeMode='cover' />
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Image style={styles.iconStyle} source={require('../../assets/images/thumbs-up.png')} /> 
              <Text style={styles.iconText}>{item.likeCount}</Text>
            </View>
            <View style={styles.icon}>
              <Image style={styles.iconStyle} source={require('../../assets/images/bubble-chat.png')} /> 
              <Text style={styles.iconText}>{item.commentCount}</Text>
            </View>
            <View style={styles.icon}>
              <Image style={styles.iconStyle} source={require('../../assets/images/arrow-reload-horizontal.png')} /> 
              <Text style={styles.iconText}>{item.shareCount}</Text>
            </View>
          </View>
        </View>
      )}
     />
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 20
  },
  userHeaderContainer: {
    gap: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  userProfile: {
    width: 40,
    height: 40,
    borderRadius: 50
  },
  author: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins_500Medium',
  },
  datePosted: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_400Regular',
    color: '#A0A5AF'
  },
  moreIcon: {
    width: 24,
    height: 24
  },
  content: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins_300Light',
  },
  image: {
    width: '100%',
    height: 196,
    borderRadius: 12
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center'
  },
  iconText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#828282'
  },
  iconStyle: {
    width: 20,
    height: 20
  }


})