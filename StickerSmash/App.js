import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HomeScreen() {
  return (
    <SafeAreaView style = {styles.container}>
        <Image source={require('./images/logo.png')} style = {styles.image}/>
        <Text style={styles.paragraph}>
          Bem-vindo ao Aplicativo da Escola Interstelar!
        </Text> 
    </SafeAreaView>
  );
}

function LivrosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Livros!</Text>
    </View>
  );
}

function DocumentacaoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Documentação!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Livros" component={LivrosScreen} />
          <Tab.Screen name="Documentação" component={DocumentacaoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
