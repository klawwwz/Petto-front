import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRoutes from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}