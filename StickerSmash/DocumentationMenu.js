import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Documento from './documentos';
const DATA = [
  {
    id: 'head',
    id2: 'head',
    title: 'Tema',
  },
  {
    id: 'head',
    id2: 'head',
    title: 'Categoria',
  },
  {
    id: 'tema',
    id2: 'Hello_World!',
    title: 'Hello World!',
  },
  {
    id: 'categoria',
    id2: 'Hello_World!',
    title: 'Programação 1',
  },
  {
    id: 'tema',
    id2: 'Conceitos POO',
    title: 'Conceitos POO',
  },
  {
    id: 'categoria',
    id2: 'Conceitos POO',
    title: 'Programação 2',
  },
  {
    id: 'tema',
    id2: 'ArrayList',
    title: 'ArrayList',
  },
  {
    id: 'categoria',
    id2: 'ArrayList',
    title: 'Programação 3',
  },
  {
    id: 'tema',
    id2: 'Arquitetura em Nuvem',
    title: 'Arquitetura em Nuvem',
  },
  {
    id: 'categoria',
    id2: 'Arquitetura em Nuvem',
    title: 'Arq. computadores 2',
  },
  {
    id: 'tema',
    id2: 'Autômatos finitos',
    title: 'Autômatos finitos',
  },
  {
    id: 'categoria',
    id2: 'Autômatos finitos',
    title: 'Linguagens Formais',
  },
  {
    id: 'tema',
    id2: 'Modelos Conceituais',
    title: 'Modelos Conceituais',
  },
  {
    id: 'categoria',
    id2: 'Modelos Conceituais',
    title: 'Banco de Dados 1',
  },
  {
    id: 'tema',
    id2: 'Busca em profundidade',
    title: 'Busca em profundidade',
  },
  {
    id: 'categoria',
    id2: 'Busca em profundidade',
    title: 'Grafos',
  },
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
  navigation.navigate('Documento', { id2 });
};

const renderItem = ({ item, navigation }) => {
  // Define o estilo condicionalmente
  const textStyle = 
  item.id === 'tema' ? styles.header :
  item.id === 'categoria' ? styles.categoria:
  styles.title;
  // const anoStyle = item.id === 'ano' ? styles.contain : styles.title;

  return (
    <View style={styles.item}>
      <Item title={item.title} onPress={() => onPressRow(item.id2, navigation)} itemstyle={textStyle} />
    </View>
  );
};


const DocumentList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        ItemSeparatorComponent={Separator}
        data={DATA}
        renderItem={({ item }) => renderItem({ item, navigation })}
        keyExtractor={item => item.id2}
      />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const DocumentsMenu = () => (
  <Stack.Navigator>
    <Stack.Screen name="DocumentList" component={DocumentList} options={{ title : 'Documentos' }}  />
    <Stack.Screen name="Documento" component={Documento} options={{ title : 'Detalhes do Documento' }}  />
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

export default DocumentsMenu;