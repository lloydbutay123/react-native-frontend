import React, { useEffect, useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_300Light ,Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import BottomTabNavigator from './src/components/BottomTabNavigator';

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_600SemiBold,
        Poppins_500Medium,
    });

    useEffect(() => {
        async function prepare() {
            // Prevent the splash screen from auto-hiding
            await SplashScreen.preventAutoHideAsync();
            if (fontsLoaded) {
                // Hide the splash screen once fonts are loaded
                await SplashScreen.hideAsync();
            }
        }

        prepare();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null; // Keep splash screen visible while loading
    }

    return <BottomTabNavigator />;
}
