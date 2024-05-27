import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

const Livro = ({ route, navigation }) => {
  const { id2 } = route.params;

  const livrosDetalhes = {
    'A_hora_da_estrela': {
      title: 'A hora da Estrela',
      image: require('./images/livros/a_hora_da_estrela.webp'),
      descricao: 'É o último romance da escritora brasileira Clarice Lispector, publicado em 1977. Trata-se de uma obra instigante e original, de cunho autobiográfico, pertencente à Terceira Geração Modernista. É classificada como um romance intimista, também conhecido como romance psicológico, estilo em que a autora se destaca. Afinal, a obra de Clarice é marcada por suas emoções e sentimentos pessoais.',
      autor: 'Clarice Lispector',
      preco: '124,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'Dom_Casmurro': {
      title: 'Dom Casmurro',
      image: require('./images/livros/dom_casmurro.webp'),
      descricao: 'Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.',
      autor: 'Machado de Assis',
      preco: '24,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'Macunaíma': {
      title: 'Macunaíma',
      image: require('./images/livros/macunaima.webp'),
      descricao: 'Obra-prima do Modernismo brasileiro, Macunaíma foi escrito por Mário de Andrade em 1928 e ainda hoje é um livro fundamental para compreendermos nossa diversidade cultural. Nasceu a partir de uma vasta pesquisa linguística do autor e reflete, por meio da mistura de lendas, mitos e histórias populares, a busca de uma identidade nacional afastada pela colonização. "Brasileiros, chegou a hora de realizar o Brasil". dizia o criador do anti - herói nascido na selva amazônica e transformado em um dos personagens mais estudados de todos os tempos no país.',
      autor: 'Mário de Andrade',
      preco: '38,00',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'Menino_de_engenho': {
      title: 'Menino de Engenho',
      image: require('./images/livros/menino_de_engenho.webp'),
      descricao: 'Primeiro romance de de José Lins do Rego, Menino de engenho é narrativa cativante composta pelas aventuras e desventuras da meninice de Carlos. A trama revela a grandeza literária de seu autor, que compõe, com minúcia e de forma magistral, as alegrias, inquietações e angústias do menino diante de sensações e situações por ele vivenciadas pela primeira vez. Publicado pela primeira vez em 1932, o livro comprova, sem sombra de dúvidas, o talento monumental de um escritor, cuja obra nortearia os rumos do moderno regionalismo brasileiro.A edição ora publicada pela Global marca o ingresso do autor em sua nova casa editorial. O projeto gráfico de capa e a ilustração são de Mauricio Negro. O livro traz um texto de apresentação do Prof. João Cezar de Castro Rocha, professor titular de Literatura Comparada da UERJ, especialmente encomendado para esta edição.',
      autor: 'José Lins do Rego',
      preco: '65,00',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'O_Cortiço': {
      title: 'O Cortiço',
      image: require('./images/livros/o_cortico.webp'),
      descricao: 'Pobreza, corrupção, injustiça, traição são elementos integram O cortiço, principal obra do Naturalismo brasileiro. Nela, Aluísio Azevedo denuncia as mazelas sociais enfrentadas pelos moradores de um cortiço no Rio de Janeiro no século XIX. É um romance que convida a analisar por meio da observação crítica do cotidiano das personagens a animalização do ser humano, questão que se mostra, mais do que nunca, atual.',
      autor: 'Aluísio Azevedo',
      preco: '29,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'Os_Sertões': {
      title: 'Os Sertões',
      image: require('./images/livros/os_sertoes.webp'),
      descricao: 'Os sertões é dividido em seções. A primeira parte, "A terra", são considerações técnicas e científicas a respeito do solo, do clima e do espaço geográfico do sertão baiano.A segunda parte, "O homem", traz características antropológicas a respeito do sertanejo, com todos os seus conflitos sociais, políticos e psicológicos. A última parte, "A luta" narra a Guerra de Canudos desde o início. A verossimilhança da obra é marcada pela rica apresentação de características do espaço, tempo, personagens, como Antônio Conselheiro, e contexto histórico pelo narrador-observador.',
      autor: 'Euclides da Cunha',
      preco: '34,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'Senhora': {
      title: 'Senhora',
      image: require('./images/livros/senhora.webp'),
      descricao: 'Obra da fase urbana de José de Alencar, considerado o mestre do romantismo o brasileiro, Senhora revela as convenções da sociedade burguesa carioca do século XIX. Pelos desencontros amorosos de Aurélia Camargo, Fernanda Seixas e Adelaide Amaral, o autor traça um painel da vida da corte e critica os costumes da época, como casamento por interesse e arrivismo social.',
      autor: 'José de Alencar',
      preco: '29,90',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
    'O_Cão_Sem_Plumas': {
      title: 'O Cão Sem Plumas',
      image: require('./images/livros/o_cao_sem_plumas.jpeg'),
      descricao: 'Neste volume estão reunidos os primeiros livros de João Cabral de Melo Neto, a começar por Pedra do sono, de 1942, até O cão sem plumas, de 1950. Considerado uma obra-prima desde que foi publicado, o poema alçou o escritor pernambucano ao patamar mais elevado da literatura brasileira, colocando-o ao lado de nomes fundamentais, como Carlos Drummond de Andrade e Manuel Bandeira.',
      autor: 'João Cabral de Melo Neto',
      preco: '42,50',
      link: 'https://proj2-web-mobile.vercel.app/livros.html',
    },
  };

  const livro = livrosDetalhes[id2];
  navigation.setOptions({ title: livro.title });

  const openLink = () => {
    Linking.openURL(livro.link).catch(err => console.error('Erro ao abrir o URL:', err));
  };

  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 50,
  },
  descricao: {
    fontSize : 15,
    marginBottom: 50,
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