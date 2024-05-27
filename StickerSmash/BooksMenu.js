import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Livro from './livros';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DATA = [
  { id: 'head', id2: 'head', title: 'Título' },
  { id: 'head', id2: 'head', title: 'Gênero' },
  { id: 'head', id2: 'head', title: 'Ano' },
  { id: 'titulo', id2: 'A_hora_da_estrela', title: 'A hora da Estrela' },
  { id: 'categoria', id2: 'A_hora_da_estrela', title: 'Romance' },
  { id: 'ano', id2: 'A_hora_da_estrela', title: '1977' },
  { id: 'titulo', id2: 'Dom_Casmurro', title: 'Dom Casmurro' },
  { id: 'categoria', id2: 'Dom_Casmurro', title: 'Romance' },
  { id: 'ano', id2: 'Dom_Casmurro', title: '1899' },
  { id: 'titulo', id2: 'Macunaíma', title: 'Macunaíma' },
  { id: 'categoria', id2: 'Macunaíma', title: 'Romance' },
  { id: 'ano', id2: 'Macunaíma', title: '1928' },
  { id: 'titulo', id2: 'Menino_de_engenho', title: 'Menino de engenho' },
  { id: 'categoria', id2: 'Menino_de_engenho', title: 'Ficção' },
  { id: 'ano', id2: 'Menino_de_engenho', title: '1932' },
  { id: 'titulo', id2: 'O_Cortiço', title: 'O Cortiço' },
  { id: 'categoria', id2: 'O_Cortiço', title: 'Romance' },
  { id: 'ano', id2: 'O_Cortiço', title: '1890' },
  { id: 'titulo', id2: 'Os_Sertões', title: 'Os Sertões' },
  { id: 'categoria', id2: 'Os_Sertões', title: 'romance-reportagem' },
  { id: 'ano', id2: 'Os_Sertões', title: '1902' },
  { id: 'titulo', id2: 'Senhora', title: 'Senhora' },
  { id: 'categoria', id2: 'Senhora', title: 'Romance' },
  { id: 'ano', id2: 'Senhora', title: '1874' },
  { id: 'titulo', id2: 'O_Cão_Sem_Plumas', title: 'O Cão Sem Plumas' },
  { id: 'categoria', id2: 'O_Cão_Sem_Plumas', title: 'Poema' },
  { id: 'ano', id2: 'O_Cão_Sem_Plumas', title: '1950' },
];

const Item = ({ title, onPress, itemstyle }) => (
  <TouchableOpacity onPress={onPress} style={itemstyle}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const Separator = () => (
  <View style={styles.separator} />
);

const onPressRow = (id2, navigation) => {
  if(id2 !== 'head'){
    navigation.navigate('Livro', { id2 });
  }
};

const renderItem = ({ item, navigation }) => {
  const textStyle = 
    item.id === 'head' ? styles.header :
    item.id === 'ano' ? styles.ano :
    item.id === 'categoria' ? styles.categoria :
    styles.title;

  return (
    <View style={styles.item}>
      <Item title={item.title} onPress={() => onPressRow(item.id2, navigation)} itemstyle={textStyle} />
    </View>
  );
};

const BooksList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        ItemSeparatorComponent={Separator}
        data={DATA}
        renderItem={({ item }) => renderItem({ item, navigation })}
        keyExtractor={item => item.id2}
      />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const BooksMenu = () => (
  <Stack.Navigator>
    <Stack.Screen name="BooksList" component={BooksList} options={{ title : 'Livros' }}  />
    <Stack.Screen name="Livro" component={Livro} options={{ title : 'Detalhes do Livro' }}  />
  </Stack.Navigator>
);

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
    minHeight: 50,
    fontSize: 12,
    flexGrow: 1,
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
    flexBasis: 0,
  },
  header: {
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

export default BooksMenu;
