import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Brechó</Text>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/(tabs)/LoginScreen')}>
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => router.push('/(tabs)/RegisterScreen')}
      >
        <Text style={styles.buttonText}>Ir para Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 32, fontWeight: 'bold', color: '#7361B0', marginBottom: 50 },
  loginButton: {
    backgroundColor: '#311498',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#7361B0',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
