import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
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
    id: 'titulo 1',
    title: 'A hora da Estrela',
  },
  {
    id: 'categoria 1',
    title: 'Romance',
  },
  {
    id: 'ano 1',
    title: '1977',
  },
  {
    id: 'titulo 2',
    title: 'Dom Casmurro',
  },
  {
    id: 'categoria 2',
    title: 'Romance',
  },
  {
    id: 'ano 2',
    title: '1899',
  },
  {
    id: 'titulo 3',
    title: 'Macunaíma',
  },
  {
    id: 'categoria 3',
    title: 'Romance',
  },
  {
    id: 'ano 3',
    title: '1928',
  },
  {
    id: 'titulo 4',
    title: 'Menino de engenho',
  },
  {
    id: 'categoria 4',
    title: 'Ficção',
  },
  {
    id: 'ano 4',
    title: '1932',
  },
  {
    id: 'titulo 5',
    title: 'O Cortiço',
  },
  {
    id: 'categoria 5',
    title: 'Romance',
  },
  {
    id: 'ano 5',
    title: '1890',
  },
  {
    id: 'titulo 6',
    title: 'Os Sertões',
  },
  {
    id: 'categoria 6',
    title: 'romance-reportagem',
  },
  {
    id: 'ano 6',
    title: '1902',
  },
  {
    id: 'titulo 7',
    title: 'Senhora',
  },
  {
    id: 'categoria 7',
    title: 'Romance',
  },
  {
    id: 'ano 7',
    title: '1874',
  },
  {
    id: 'titulo 8',
    title: 'O Cão Sem Plumas',
  },
  {
    id: 'categoria 8',
    title: 'Poema',
  },
  {
    id: 'ano 8',
    title: '1950',
  },
];

const Item = ({title, onPress, itemstyle}) =>(
  <TouchableOpacity onPress={onPress} style = {itemstyle}>
    <Text style = {itemstyle}>{title}</Text>
  </TouchableOpacity>
);

const Separator = () => (
  <View style={styles.separator} />
);


const onPressRow = (title) => {
  console.log('Item clicado:', title); 
}

const renderItem = ({ item }) => {
  // Define o estilo condicionalmente
  const textStyle = item.id === 'head' ? styles.header : styles.title;
  // const anoStyle = item.id === 'ano' ? styles.contain : styles.title;
  
  return (
    <View style={styles.item}>
        <Item title={item.title} onPress={() => onPressRow(item.title)} itemstyle={textStyle}/>
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
    height: 50,
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center', //centralizar o texto
    flexWrap: 'wrap', //  o texto quebre em várias linhas
  },

  header: {
    color: '#999',
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