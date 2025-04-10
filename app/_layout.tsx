//cspell:disable 
import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import '../global';
import { useFonts } from 'expo-font';

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    'PTSerif-Regular': require("../assets/fonts/PTSerif-Regular.ttf"),
    'PTSerif-Bold': require("../assets/fonts/PTSerif-Bold.ttf"),
    'PTSerif-BoldItalic': require("../assets/fonts/PTSerif-BoldItalic.ttf"),
    'PTSerif-Italic': require("../assets/fonts/PTSerif-Italic.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default _layout;
