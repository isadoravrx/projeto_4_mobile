import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const Livro = ({ route, navigation }) => {
  const { id2 } = route.params;

  const livrosDetalhes = {
    'A_hora_da_estrela': {
      title: 'A hora da Estrela',
      image: require('./images/a_hora_da_estrela.webp'),
      descricao: 'É o último romance da escritora brasileira Clarice Lispector, publicado em 1977. Trata-se de uma obra instigante e original, de cunho autobiográfico, pertencente à Terceira Geração Modernista. É classificada como um romance intimista, também conhecido como romance psicológico, estilo em que a autora se destaca. Afinal, a obra de Clarice é marcada por suas emoções e sentimentos pessoais.',
      autor: 'Clarice Lispector',
      preco: '124,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'Dom_Casmurro': {
      title: 'Dom Casmurro',
      image: require('./images/dom_casmurro.webp'),
      descricao: 'Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.',
      autor: 'Machado de Assis',
      preco: '24,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
  };

  const livro = livrosDetalhes[id2];
  navigation.setOptions({ title: livro.title });

  const openLink = () => {
    Linking.openURL(livro.link).catch(err => console.error('Erro ao abrir o URL:', err));
  };

  return (
    <View style={styles.container}>
      <Image source={livro.image} style={styles.image} />
      <Text style={styles.descricao}>{livro.descricao}</Text>
      <Text style={styles.autorstyle}>
        <Text style={{ fontWeight: "bold" }}>Autor(a): {livro.autor}</Text>
      </Text>
      <Text style={styles.preco}>R$ {livro.preco}</Text>
      <TouchableOpacity style={styles.button} onPress={openLink}>
        <Text style={styles.buttonText}>Link para acesso</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 350,
    marginBottom: 16,
  },
  descricao: {
    fontSize : 15,
    marginBottom: 8,
  },
  autorstyle: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  preco: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Livro;