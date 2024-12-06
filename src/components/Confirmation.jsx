
import { View, Text, ScrollView, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import React from 'react'
import globalStyles from '../styles/styles';
import Footer from './Footer';
import PageIndicator from './PageIndicator';

export default function confirmation() {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <View style={styles.container}>
        <PageIndicator activeStep={step} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Review Form</Text>
            <Text style={styles.titleContent}>Review the information filled up</Text>
          </View>
          <View style={globalStyles.inputContainer}>
            <View style={styles.label}><Text style={styles.label}>Email Address</Text><Image source={require('../../assets/images/edit-02.png')} /></View>
            <Text style={styles.review}>anna_lopez@example.com</Text>
          </View>
          <View style={globalStyles.inputContainer}>
            <View style={styles.label}><Text style={styles.label}>Birthday</Text><Image source={require('../../assets/images/edit-02.png')} /></View>
            <Text style={styles.review}>anna_lopez@example.com</Text>
          </View>
          <View style={globalStyles.inputContainer}>
            <View style={styles.label}><Text style={styles.label}>Mobile Number</Text><Image source={require('../../assets/images/edit-02.png')} /></View>
            <Text style={styles.review}>anna_lopez@example.com</Text>
          </View>
          <View>
            <Pressable style={globalStyles.button}>
              <Text style={globalStyles.buttonText} onPress={() => alert('Submitted')}>Submit</Text>
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
        gap: 20,
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
    review: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 400,
        fontFamily: 'Poppins_400Regular',
        color: 'gray'
    },
    indicator: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      indicatorActive: {
        height: 40,
        width: 40,
        borderColor: 'navy',
        borderWidth: 2,
        borderRadius: 40,
      },
      indicatorInactive: {
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
      lineDone: {
        borderWidth: 2,
        borderColor: 'navy',
        width: 60,
        height: 1
      },
      indicatorDone: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: 'navy',
      },
      label: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular'

      }
  });
  