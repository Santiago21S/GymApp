import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: Conectar con estado global de Zustand para verificar token/sesión real
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/(tabs)" />;
}