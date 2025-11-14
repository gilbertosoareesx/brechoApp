import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '@/hooks/use-auth';

const mockEstoque = [
  { id: '1', nome: 'Vestido Floral', preco: 49.99, quantidade: 3, ownerId: '1' },
  { id: '2', nome: 'Jaqueta Jeans', preco: 89.99, quantidade: 5, ownerId: '2' },
  { id: '3', nome: 'Blusa Vintage', preco: 29.99, quantidade: 2, ownerId: '3' },
];

export default function EstoqueScreen() {
  const { currentUser } = useAuth();

  const [estoque, setEstoque] = useState(mockEstoque);

  const handleEditar = (id) => {
    setEstoque((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade - 1) } : item,
      ),
    );
  };

  const handleAdicionar = () => {
    const novo = {
      id: String(Date.now()),
      nome: 'Nova peça',
      preco: 0,
      quantidade: 1,
      ownerId: currentUser ? currentUser.id : null,
    };
    setEstoque((prev) => [novo, ...prev]);
  };

  const handleDeletar = (id) => {
    setEstoque((prev) => prev.filter((item) => item.id !== id));
  };

  const canEditOrDelete = (item) => {
    if (!currentUser) return false;
    return currentUser.role === 'admin';
  };

  const renderItem = ({ item }) => {
    const allowed = canEditOrDelete(item);
    return (
      <View style={styles.item}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Preço: R${item.preco.toFixed(2)}</Text>
        <Text>Quantidade: {item.quantidade}</Text>

        <TouchableOpacity
          disabled={!allowed}
          onPress={() => allowed && handleEditar(item.id)}
          style={[styles.botao, !allowed && styles.botaoDisabled]}
        >
          <Text style={[styles.botaoTexto, !allowed && styles.botaoTextoDisabled]}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!allowed}
          onPress={() => allowed && handleDeletar(item.id)}
          style={[styles.botao, styles.deleteButton, !allowed && styles.botaoDisabled]}
        >
          <Text style={[styles.botaoTexto, !allowed && styles.botaoTextoDisabled]}>Deletar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque</Text>
      <FlatList
        data={estoque}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      {currentUser && currentUser.role === 'admin' && (
        <Button title="Adicionar nova peça" onPress={handleAdicionar} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  nome: { fontSize: 18, fontWeight: '600' },
  botao: { marginTop: 10, backgroundColor: '#333', padding: 8, borderRadius: 5 },
  botaoDisabled: { backgroundColor: '#ccc' },
  botaoTexto: { color: '#fff', textAlign: 'center' },
  botaoTextoDisabled: { color: '#666' },
  deleteButton: { backgroundColor: '#b00', marginTop: 8 },
});

