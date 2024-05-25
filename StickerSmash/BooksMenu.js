import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'head',
    title: 'Title',
  },
  {
    id: 'head',
    title: 'Gênero',
  },
  {
    id: 'head',
    title: 'Ano',
  },
  {
    id: 'titulo',
    title: 'Livro',
  },
  {
    id: 'categoria 1',
    title: 'Programação 1',
  },
  {
    id: 'ano',
    title: 'Livro',
  },
  {
    id: 'titulo',
    title: 'Programação 2',
  },
  {
    id: 'titulo 3',
    title: 'Livro',
  },
  {
    id: 'ano',
    title: 'Programação 3',
  },
  {
    id: 'titulo',
    title: 'Livro',
  },
  {
    id: 'categoria 4',
    title: 'Arq. computadores 2',
  },
  {
    id: 'ano',
    title: 'Livro',
  },
  {
    id: 'titulo',
    title: 'Linguagens Formais',
  },
  {
    id: 'titulo 6',
    title: 'Livro',
  },
  {
    id: 'ano',
    title: 'Banco de Dados 1',
  },
  {
    id: 'titulo',
    title: 'Livro',
  },
  {
    id: 'titulo 7',
    title: 'Livro',
  },
  {
    id: 'ano',
    title: '3131',
  },
];

const Separator = () => (
  <View style={styles.separator} />
);

const renderItem = ({ item }) => {
  // Define o estilo condicionalmente
  const textStyle = item.id === 'head' ? styles.header : styles.title;
  // const anoStyle = item.id === 'ano' ? styles.contain : styles.title;

  return (
    <View style={styles.item}>
      <Text style={textStyle}>{item.title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns= {3}
        ItemSeparatorComponent = {Separator}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff'
  },
  item: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 2,
    padding: 8,
    height: 40,
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'center',
    textAlign: 'center'
  },

  header: {
    color: '#999',
    marginHorizontal: 15,
    marginBottom: 2,
    fontSize: 14,
    height: 40,
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'center'
  },

  title: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginLeft: 20
  },
});

export default App;