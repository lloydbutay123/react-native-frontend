import { View, Image, StyleSheet, ImageBackground, Text, Pressable, FlatList } from 'react-native';
import React from 'react';
import { services } from '../../helpers/services';

export default function Landing({ navigation }) {
  return (
    <View>
      <ImageBackground source={require('../../../assets/images/landingbg.gif')} style={styles.gif} resizeMode='cover'>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../../assets/images/asianlinkAI_FINAL APPROVED (1).png')} />
          <Text style={styles.tagline}>Your Connect to News,{"\n"}
          Public Service & E-Commerce</Text>
        </View>
        <Image style={styles.group} source={require('../../../assets/images/Photo.png')} />
        <View style={styles.buttonGroup}>
          <FlatList
            data={services}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate(item.route)} style={styles.button} key={item.id}>
                <View style={styles.btnContent}>
                  <Image style={styles.icon} source={item.icon} />
                  <Text style={styles.buttonText}>{ item.name }</Text>
                </View>
                <Image style={styles.icon} source={require('../../../assets/images/circle-arrow-right-02.png')} />
              </Pressable>
            )}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true} // Allow FlatList to scroll within ScrollView
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  gif: {
    width: '100%',
    height: 477,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  tagline: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 24,
    textAlign: 'center',
    width: 239,
  },
  logo: {
    width: 188,
    height: 92

  },
  group: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  container: {
    position: 'absolute',
    top: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  buttonGroup: {
    position: 'absolute',
    top: 456,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 80,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(36, 47, 185, 0.2)',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 30,
    color: 'navy'
  },
  icon: {
    width: 24, 
    height: 24
  },
  btnContent: {
    display: 'flex',
    gap: 18,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
