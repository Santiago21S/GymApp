import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter, Href } from 'expo-router';
import { authStyles as styles } from '../styles/authStyles';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/(tabs)' as Href);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>

        {/* Logo / Brand */}
        <View style={styles.logoRow}>
          <View style={styles.logoAccent} />
          <Text style={styles.title}>IronFit</Text>
        </View>
        <Text style={styles.subtitle}>Tu entrenamiento. Tu reglas.</Text>

        {/* Fields */}
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. hannah_itc"
          placeholderTextColor="#333333"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#333333"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* CTA */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>o</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Switch to register */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/register' as Href)}
          activeOpacity={0.7}
        >
          <Text style={styles.secondaryText}>
            ¿Sin cuenta?{' '}
            <Text style={styles.secondaryTextAccent}>Regístrate gratis</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}