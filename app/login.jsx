import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [type, setType] = useState("");

  const handleLogin = () => {
    if (!username || !password || !organization || !type) {
      alert("Please fill all fields");
      return;
    }
    router.push("/home"); // navigate to home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Picker
        selectedValue={organization}
        style={styles.input}
        onValueChange={(value) => setOrganization(value)}
      >
        <Picker.Item label="Select Organization" value="" />
        <Picker.Item label="Org A" value="orgA" />
        <Picker.Item label="Org B" value="orgB" />
      </Picker>

      <Picker
        selectedValue={type}
        style={styles.input}
        onValueChange={(value) => setType(value)}
      >
        <Picker.Item label="Select Type" value="" />
        <Picker.Item label="Vehicle" value="vehicle" />
        <Picker.Item label="Generator" value="generator" />
      </Picker>

      <Button title="Login" onPress={handleLogin} />

      <Text style={styles.forget}>Forgot Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 12, marginBottom: 15, borderRadius: 5 },
  forget: { marginTop: 10, color: "blue", textAlign: "center" },
});
