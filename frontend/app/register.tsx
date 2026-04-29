import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Switch,
  ScrollView,
} from 'react-native';
import { useRouter, Href } from 'expo-router';
import { authStyles as styles } from '../styles/authStyles';

export default function RegisterScreen() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreator, setIsCreator] = useState(false);

  const handleRegister = () => {
    console.log({ firstName, lastName, username, email, password, isCreator });
    router.replace('/(tabs)' as Href);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.formContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* Logo / Brand */}
        <View style={[styles.logoRow, { marginTop: 24 }]}>
          <View style={styles.logoAccent} />
          <Text style={styles.title}>IronFit</Text>
        </View>
        <Text style={styles.subtitle}>Crea tu cuenta</Text>

        {/* Fields */}
        <Text style={styles.label}>Nombre(s)</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu nombre"
          placeholderTextColor="#333333"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Apellido(s)</Text>
        <TextInput
          style={styles.input}
          placeholder="Tu apellido"
          placeholderTextColor="#333333"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Crea un username único"
          placeholderTextColor="#333333"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="ejemplo@correo.com"
          placeholderTextColor="#333333"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Mínimo 8 caracteres"
          placeholderTextColor="#333333"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Creator toggle */}
        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, isCreator && styles.switchLabelActive]}>
            ¿Eres creador de contenido?
          </Text>
          <Switch
            value={isCreator}
            onValueChange={setIsCreator}
            trackColor={{ false: '#2A2A2A', true: '#0D4C8A' }}
            thumbColor={isCreator ? '#1E8FFF' : '#3A3A3A'}
          />
        </View>

        {/* CTA */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleRegister} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>

        {/* Back to login */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.secondaryText}>
            ¿Ya tienes cuenta?{' '}
            <Text style={styles.secondaryTextAccent}>Inicia sesión</Text>
          </Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}