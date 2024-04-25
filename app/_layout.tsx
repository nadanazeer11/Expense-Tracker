import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useEffect } from 'react';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {

    initialRouteName: '(tabs)',
};


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const customFonts = {
        'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    };
    const [loaded, error] = useFonts(customFonts);

    useEffect(() => {
        if (error) throw error;
    }, [error]);
    console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
            console.log("hereeeeee")
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }
    if (loaded) {
        console.log("fonts loaded")
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: theme.colors.pageBackground,
                },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerTintColor: theme.colors.black,
                headerBackTitleVisible: false,
                headerBackTitle: ' ',
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
            }}
        />)
        ;
}

