import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Image, ScrollView, Alert } from 'react-native';
import globalStyles from '../../styles/styles';
import Footer from '../../components/Footer';
import { login } from '../../api/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      Alert.alert('Success', 'Login successful');
      navigation.navigate('Landing');
    } catch (error) {
      Alert.alert('Login failed', error.mresponse?.data?.message || 'An error occured.');
    }
  }
  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <View>
          <View style={styles.container}>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>Login</Text>
                    <Text style={styles.titleContent}>
                      Need <Text style={styles.companyTitle}>Asian Link</Text> Account?
                    <Text style={globalStyles.promptText} 
                      onPress={() => 
                      navigation.navigate('Register')}> Register</Text> here
                  </Text>
              </View>
              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.label}>Email or Phone</Text>
                <TextInput style={globalStyles.input} value={email} onChangeText={setEmail} placeholder='Enter email address or number' />
              </View>
              <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.label}>Password</Text>
                <TextInput style={globalStyles.input} value={password} onChangeText={setPassword} placeholder='Enter password' />
              </View>
              <View>
                <Pressable style={globalStyles.button} onPress={handleLogin}>
                  <Text style={globalStyles.buttonText}>Login</Text>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <Text style={globalStyles.promptText}>Forgot Password</Text>
                </Pressable>     
              </View>
          </View>

          <View style={styles.orDivider}>
            <View style={styles.line}></View>
            <Text style={styles.text}>or</Text>
            <View style={styles.line}></View>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={globalStyles.socialButton}>
              <Image source={require('../../../assets/images/search.png')} />
              <Text style={globalStyles.socialButtonText}>Login with Google</Text>
            </Pressable>
            <Pressable style={globalStyles.socialButton}>
            <Image source={require('../../../assets/images/facebook.png')} />
              <Text style={globalStyles.socialButtonText}>Login with Google</Text>
            </Pressable>
            <Pressable style={globalStyles.socialButton}>
            <Image source={require('../../../assets/images/tik-tok.png')} />
              <Text style={globalStyles.socialButtonText}>Login with Google</Text>
            </Pressable>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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
    fontWeight: 400,
    lineHeight: 21,
    fontFamily: 'Poppins_400Regular',
  },
  companyTitle: {
    fontWeight: 'bold',
  },

  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 12,

  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(11, 11, 11, 0.12)', // Semi-transparent line color
  },

  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins_400Regular',
    lineHeight: 21,
  },
  buttonContainer: {
    gap: 12
  }
});
