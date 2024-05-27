import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const Documento = ({ route, navigation }) => {
  const { id2 } = route.params;

  const documentosDetalhe = {
    'Hello_World!': {
      title: 'Hello World!',
      image: require('./images/livros/a_hora_da_estrela.webp'),
      descricao: 'É o último romance da escritora brasileira Clarice Lispector, publicado em 1977. Trata-se de uma obra instigante e original, de cunho autobiográfico, pertencente à Terceira Geração Modernista. É classificada como um romance intimista, também conhecido como romance psicológico, estilo em que a autora se destaca. Afinal, a obra de Clarice é marcada por suas emoções e sentimentos pessoais.',
      autor: 'Clarice Lispector',
      preco: '124,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
  };

  const documento = documentosDetalhe[id2];
  navigation.setOptions({ title: documento.title });

  const openLink = () => {
    Linking.openURL(documento.link).catch(err => console.error('Erro ao abrir o URL:', err));
  };

  return (
    <View style={styles.container}>
      <Image source={documento.image} style={styles.image} />
      <Text style={styles.descricao}>{documento.descricao}</Text>
      <Text style={styles.autorstyle}>
        <Text style={{ fontWeight: "bold" }}>Autor(a): {documento.autor}</Text>
      </Text>
      <Text style={styles.preco}>R$ {documento.preco}</Text>
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

export default Documento;