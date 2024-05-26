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
    title: 'Título',
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
    title: 'A hora da Estrela',
  },
  {
    id: 'categoria',
    title: 'Romance',
  },
  {
    id: 'ano',
    title: '1977',
  },
  {
    id: 'titulo',
    title: 'Dom Casmurro',
  },
  {
    id: 'categoria',
    title: 'Romance',
  },
  {
    id: 'ano',
    title: '1899',
  },
  {
    id: 'titulo',
    title: 'Macunaíma',
  },
  {
    id: 'categoria',
    title: 'Romance',
  },
  {
    id: 'ano',
    title: '1928',
  },
  {
    id: 'titulo',
    title: 'Menino de engenho',
  },
  {
    id: 'categoria',
    title: 'Ficção',
  },
  {
    id: 'ano',
    title: '1932',
  },
  {
    id: 'titulo',
    title: 'O Cortiço',
  },
  {
    id: 'categoria',
    title: 'Romance',
  },
  {
    id: 'ano',
    title: '1890',
  },
  {
    id: 'titulo',
    title: 'Os Sertões',
  },
  {
    id: 'categoria',
    title: 'romance-reportagem',
  },
  {
    id: 'ano',
    title: '1902',
  },
  {
    id: 'titulo',
    title: 'Senhora',
  },
  {
    id: 'categoria',
    title: 'Romance',
  },
  {
    id: 'ano',
    title: '1874',
  },
  {
    id: 'titulo',
    title: 'O Cão Sem Plumas',
  },
  {
    id: 'categoria',
    title: 'Poema',
  },
  {
    id: 'ano',
    title: '1950',
  },
];

const Item = ({title, onPress, itemstyle}) =>(
  <TouchableOpacity onPress={onPress} style = {itemstyle}>
    <Text>{title}</Text>
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
  const textStyle = 
  item.id === 'head' ? styles.header :
  item.id === 'ano'? styles.ano:
  item.id === 'categoria'? styles.categoria:
   styles.title;
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
    marginLeft: 15,
    marginBottom: 2,
    padding: 8,
    height: 50,
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'center'
  },

  categoria: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    fontSize: 12,
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 0
  },

  ano: {
    width: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc',
    fontSize: 12,
    flexGrow: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 0
  },

  header: {
    marginBottom: 2,
    fontSize: 14,
    padding: 4,
    height: 40,
    flexGrow: 1,
    flexBasis: 0,
    color: '#999',
    justifyContent: 'center'
  },

  title: {
    fontSize: 12
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginLeft: 20
  },
});

export default App;