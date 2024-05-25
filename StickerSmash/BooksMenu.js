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
    id: 'titulo',
    title: 'Title',
  },
  {
    id: 'genero',
    title: 'Gênero',
  },
  {
    id: 'ano',
    title: 'Ano',
  },
  {
    id: 'titulo 1',
    title: 'Livro',
  },
  {
    id: 'categoria 1',
    title: 'Programação 1',
  },
  {
    id: 'titulo 2',
    title: 'Livro',
  },
  {
    id: 'categoria 2',
    title: 'Programação 2',
  },
  {
    id: 'titulo 3',
    title: 'Livro',
  },
  {
    id: 'categoria 3',
    title: 'Programação 3',
  },
  {
    id: 'titulo 4',
    title: 'Livro',
  },
  {
    id: 'categoria 4',
    title: 'Arq. computadores 2',
  },
  {
    id: 'titulo 5',
    title: 'Livro',
  },
  {
    id: 'categoria 5',
    title: 'Linguagens Formais',
  },
  {
    id: 'titulo 6',
    title: 'Livro',
  },
  {
    id: 'categoria 6',
    title: 'Banco de Dados 1',
  },
  {
    id: 'titulo 7',
    title: 'Livro',
  },
  {
    id: 'titulo 7',
    title: 'não sei oq não sei que la',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Separator = () => (
  <View style={styles.separator} />
);


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns= {3}
        ItemSeparatorComponent = {Separator}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
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
    padding: 10,
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