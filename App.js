import React from 'react';
import { SafeAreaView } from 'react-native';
import EstoqueScreen from './app/(tabs)/src/EstoqueScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <EstoqueScreen />
    </SafeAreaView>
  );
}
