import { View, Text, ScrollView, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import React from 'react'
import globalStyles from '../styles/styles'
import Footer from './Footer'
import PageIndicator from '../components/PageIndicator';

export default function AccountInfo({ nextStep, step }) {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <View style={styles.container}>
        <PageIndicator activeStep={step} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Registration</Text>
            <Text style={styles.titleContent}>Fill up all the information fields</Text>
          </View>
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Email Address</Text>
            <TextInput style={globalStyles.input} placeholder="e.g. dave@asianlink.ai" keyboardType='email-address' />
          </View>
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Password</Text>
            <TextInput style={globalStyles.input} placeholder="Enter password" secureTextEntry={true} />
          </View>
          <View style={styles.validationContainer}>
            <View style={styles.textContainer}>
              <Image style={styles.icon} source={require('../../assets/images/Vector.png')} />
              <Text style={globalStyles.label}>One uppercase</Text>
            </View>
            <View style={styles.textContainer}>
              <Image style={styles.icon} source={require('../../assets/images/Vector.png')} />
              <Text style={globalStyles.label}>One lowercase</Text>
            </View>
            <View style={styles.textContainer}>
              <Image style={styles.icon} source={require('../../assets/images/Vector.png')} />
              <Text style={globalStyles.label}>One number</Text>
            </View>
            <View style={styles.textContainer}>
              <Image style={styles.icon} source={require('../../assets/images/Vector.png')} />
              <Text style={globalStyles.label}>Min of 8 characters</Text>
            </View>
            <View style={styles.textContainer}>
              <Image style={styles.icon} source={require('../../assets/images/Vector.png')} />
              <Text style={globalStyles.label}>One special character</Text>
            </View>
          </View>
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Password</Text>
            <TextInput style={globalStyles.input} placeholder="retype password" secureTextEntry={true} />
          </View>
          <View>
            <Pressable style={globalStyles.button}>
              <Text style={globalStyles.buttonText} onPress={nextStep}>Continue</Text>
            </Pressable>
          </View>
        </View>
        <Footer />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    isplay: 'flex',
		flexDirection: 'column',
		gap: 16,
		backgroundColor: '#ffffff',
		borderRadius: 20,
		padding: 20,
		zIndex: 50, /* Ensure it appears above the navbar */
    shadowColor: 'rgba(0, 0, 0, 0.12)', // Shadow color
    shadowOffset: { width: 0, height: 0 }, // Shadow offset
    shadowOpacity: 0.12, // Opacity of the shadow
    shadowRadius: 10, // Blur radius
    elevation: 10, // For Android

  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
    lineHeight: 45,
    fontFamily: 'Poppins_500Medium',
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontFamily: 'Poppins_400Regular',
  },
  validationContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 8

  },
  textContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    minWidth: 140,
  },
  icon: {
    width: 12,
    height: 12,
  },
  validation: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 400,
    fontFamily: 'Poppins_400Regular',
  },
  indicator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  indicatorActive: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'navy',
    fontSize: 16,    
    height: 40,
    width: 40,
    borderColor: 'navy',
    borderWidth: 2,
    borderRadius: 40,
  },
  indicatorInactive: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'navy',
    fontSize: 16,
    height: 40,
    width: 40,
    borderColor: 'rgba(219, 219, 220, 0.86)',
    borderWidth: 2,
    borderRadius: 40,
  },
  line: {
    borderWidth: 2,
    borderColor: 'rgba(219, 219, 220, 0.86)',
    width: 60,
    height: 1
  },
  indicatorTextActive: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins_700Bold',
    color: 'navy',
  },
  indicatorText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins_600SemiBold',
  }
});
