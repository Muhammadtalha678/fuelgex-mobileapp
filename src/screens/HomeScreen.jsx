import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {username || 'User'}!</Text>

      <Button
        title="Logout"
        onPress={() => navigation.replace('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
