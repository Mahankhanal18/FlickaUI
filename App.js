import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';
import { useFont } from './useFont';
import LoginScreen from './src/screens/LoginScreen';
import OTPScreen from './src/screens/OTPScreen';
import ReelScreen from './src/screens/ReelScreen';
import CollectionScreen from './src/screens/CollectionScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CreatorScreen from './src/screens/CreatorScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await useFont();
      setIsReady(true);
    })();
  }, []);

  return (
    <>
      {
        isReady ?
          (
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ animation: 'none' }}>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Otp"
                  component={OTPScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Video"
                  component={ReelScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Search"
                  component={SearchScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="My Collection"
                  component={CollectionScreen}
                />
                <Stack.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Creators"
                  component={CreatorScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Payment"
                  component={PaymentScreen}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          ) : (
            <ActivityIndicator />
          )
      }
    </>
  );
};