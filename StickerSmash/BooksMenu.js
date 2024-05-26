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
    id: 'genero',
    title: 'Programação 1',
  },
  {
    id: 'ano',
    title: '1999',
  },
  {
    id: 'titulo',
    title: 'Programação 2',
  },
  {
    id: 'genero',
    title: 'Livro',
  },
  {
    id: 'ano',
    title: '1999',
  },
  {
    id: 'titulo',
    title: 'Livro',
  },
  {
    id: 'genero',
    title: 'Terror',
  },
  {
    id: 'ano',
    title: '1999',
  },
  {
    id: 'titulo',
    title: 'Linguagens Formais',
  },
  {
    id: 'genero',
    title: 'Ficção',
  },
  {
    id: 'ano',
    title: '1999',
  },
  {
    id: 'titulo',
    title: 'Livro',
  },
  {
    id: 'genero',
    title: 'Romance',
  },
  {
    id: 'ano',
    title: '1999',
  },
];

const Separator = () => (
  <View style={styles.separator} />
);

const renderItem = ({ item }) => {
  // Define o estilo condicionalmente
  const textStyle = 
  item.id === 'head' ? styles.header :
  item.id === 'ano'? styles.ano:
  item.id === 'genero'? styles.genero:
   styles.title;
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
    marginLeft: 15,
    marginBottom: 2,
    padding: 8,
    height: 40,
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'center'
  },

  genero: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    fontSize: 12,
    paddingTop: 3.5,
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'center',
    flexBasis: 0
  },

  ano: {
    width: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    fontSize: 12,
    paddingTop: 3.5,
    flexGrow: 1,
    textAlign: 'center',
    marginLeft: 10,
    flexBasis: 0
  },

  header: {
    color: '#999',
    marginHorizontal: 15,
    marginBottom: 2,
    fontSize: 14,
    padding: 4,
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