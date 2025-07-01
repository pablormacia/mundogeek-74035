import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import ShopStackNavigator from './src/navigation/ShopStackNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf'),
    'Karla-Light': require('./assets/fonts/Karla-Light.ttf'),
    'PressStart2P': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <ShopStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
