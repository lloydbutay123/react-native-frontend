import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function PageIndicator({ activeStep }) {
  return (
    <View style={styles.indicator}>
      <View style={styles.stepContainer}>
        <View
          style={[
            styles.indicatorBase,
            activeStep >= 1 ? styles.indicatorDone : styles.indicatorInactive,
            activeStep === 1 && styles.indicatorActive,
          ]}
        >
          <Text
            style={[
              styles.stepText,
              activeStep >= 1 ? styles.textDone : styles.textInactive,
              activeStep === 1 && styles.textActive,
            ]}
          >
            1
          </Text>
        </View>
        <View style={[styles.line, activeStep > 1 && styles.lineDone]} />
      </View>
      <View style={styles.stepContainer}>
        <View
          style={[
            styles.indicatorBase,
            activeStep >= 2 ? styles.indicatorDone : styles.indicatorInactive,
            activeStep === 2 && styles.indicatorActive,
          ]}
        >
          <Text
            style={[
              styles.stepText,
              activeStep >= 2 ? styles.textDone : styles.textInactive,
              activeStep === 2 && styles.textActive,
            ]}
          >
            2
          </Text>
        </View>
        <View style={[styles.line, activeStep > 2 && styles.lineDone]} />
      </View>
      <View style={styles.stepContainer}>
        <View
          style={[
            styles.indicatorBase,
            activeStep === 3 ? styles.indicatorActive : styles.indicatorInactive,
          ]}
        >
          <Text
            style={[
              styles.stepText,
              activeStep === 3 ? styles.textActive : styles.textInactive,
            ]}
          >
            3
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicatorBase: {
    width: 40,
    height: 40,
    borderRadius: 20, // Makes the indicator circular
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorInactive: {
    backgroundColor: '#f5f5f5', // Inactive color
    borderColor: 'rgba(219, 219, 220, 0.86)',
    borderWidth: 2,
  },
  indicatorActive: {
    backgroundColor: '#ffffff', // Active step color
    borderColor: 'navy',
    borderWidth: 2,
  },
  indicatorDone: {
    backgroundColor: 'navy', // Completed step color
  },
  stepText: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 24,
  },
  textInactive: {
    fontSize: 16,
    color: 'gray',
    lineHeight: 24,
  },
  textActive: {
    fontSize: 16,
    color: 'navy',
    lineHeight: 24,
  },
  textDone: {
    color: '#ffffff',
  },
  line: {
    width: 60,
    height: 2,
    backgroundColor: '#ccc', // Default line color
  },
  lineDone: {
    backgroundColor: 'navy', // Line color for completed steps
  },
});
