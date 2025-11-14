import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const mockProdutos = [
  { id: '1', nome: 'Vestido Floral', preco: 49.99, descricao: 'Estampa leve, corte evasê' },
  { id: '2', nome: 'Jaqueta Jeans', preco: 89.99, descricao: 'Lavagem escura, bolsos frontais' },
  { id: '3', nome: 'Blusa Vintage', preco: 29.99, descricao: 'Manga curta, tecido leve' },
];

export default function VitrineScreen() {
  const [produtos] = useState(mockProdutos);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R${item.preco.toFixed(2)}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vitrine</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  nome: { fontSize: 18, fontWeight: '600' },
  preco: { marginTop: 4, color: '#333' },
  descricao: { marginTop: 6, color: '#666' },
  botao: {
    marginTop: 10,
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  botaoTexto: { color: '#fff', textAlign: 'center' },
});

