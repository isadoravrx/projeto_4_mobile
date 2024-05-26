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
    title: 'Tema',
  },
  {
    id: 'head',
    title: 'Categoria',
  },
  {
    id: 'titulo 1',
    title: 'Hello World!',
  },
  {
    id: 'categoria',
    title: 'Programação 1',
  },
  {
    id: 'titulo 2',
    title: 'Conceitos POO',
  },
  {
    id: 'categoria',
    title: 'Programação 2',
  },
  {
    id: 'titulo 3',
    title: 'ArrayList',
  },
  {
    id: 'categoria',
    title: 'Programação 3',
  },
  {
    id: 'titulo 4',
    title: 'Arquitetura em Nuvem',
  },
  {
    id: 'categoria',
    title: 'Arq. computadores 2',
  },
  {
    id: 'titulo 5',
    title: 'Autômatos finitos',
  },
  {
    id: 'categoria',
    title: 'Linguagens Formais',
  },
  {
    id: 'titulo 6',
    title: 'Modelos Conceituais',
  },
  {
    id: 'categoria',
    title: 'Banco de Dados 1',
  },
  {
    id: 'titulo 7',
    title: 'Busca em rofundidade',
  },
  {
    id: 'categoria',
    title: 'Grafos',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => {
  // Define o estilo condicionalmente
  const textStyle = 
  item.id === 'head' ? styles.header :
  item.id === 'categoria' ? styles.categoria:
  styles.title;
  // const anoStyle = item.id === 'ano' ? styles.contain : styles.title;

  return (
    <View style={styles.item}>
      <Text style={textStyle}>{item.title}</Text>
    </View>
  );
};

const Separator = () => (
  <View style={styles.separator} />
);


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns= {2}
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
    padding: 10,
    height: 40,
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'center'
  },
  title: {
    fontSize: 12,
  },
  header: {
    color: '#999',
    marginHorizontal: 15,
    marginBottom: 2,
    fontSize: 14,
    padding: 2,
    height: 40,
    flexGrow: 1,
    flexBasis: 0
  },
  categoria: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    fontSize: 12,
    paddingTop: 3.5,
    flexGrow: 1,
    textAlign: 'center',
    flexBasis: 0
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginLeft: 20
  },
});

export default App;