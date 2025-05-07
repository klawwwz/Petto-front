import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PetsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22 },
});