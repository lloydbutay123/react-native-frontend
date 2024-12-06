import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Image, Button } from 'react-native';
import globalStyles from '../../styles/styles';
import AccountInfo from '../../components/AccountInfo';
import PersonalInfo from '../../components/PersonalInfo';
import Confirmation from '../../components/Confirmation';

export default function RegisterScreen({ navigation }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if(step < 3) setStep(step + 1);
  }

  const prevStep = () => {
    if(step > 1) setStep(step - 1);
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <AccountInfo step={step} nextStep= {nextStep} />;
      case 2:
        return <PersonalInfo step={step} nextStep= {nextStep} />;
      case 3:
        return <Confirmation step={step} nextStep= {nextStep} />;
      default:
        return null;
    }
  };

  return (
    <View style={globalStyles.screenContainer}>
      {renderStep()}
    </View>
  );
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
  }
});
