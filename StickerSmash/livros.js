import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Livro = ({ route }) => {
  const { id2 } = route.params;

  // Dados de exemplo, você pode substituir pelo que precisa
  const livrosDetalhes = {
    'A_hora_da_estrela': {
      title: 'A hora da Estrela',
      genero: 'Romance',
      ano: '1977',
      descricao: 'Descrição detalhada sobre A hora da Estrela.'
    },
    // Adicione os outros livros aqui
  };

  const livro = livrosDetalhes[id2];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{livro.title}</Text>
      <Text>Gênero: {livro.genero}</Text>
      <Text>Ano: {livro.ano}</Text>
      <Text>Descrição: {livro.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  }
});

export default Livro;
