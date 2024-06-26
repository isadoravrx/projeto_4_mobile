import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DocumentationMenu from './DocumentationMenu';
import BooksMenu from './BooksMenu';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./images/logo.png")} style={styles.image} />
      <Text style={styles.paragraph}>
        Bem-vindo ao Aplicativo da Escola Interstelar!
      </Text>
      <Text style={styles.message}>
        Aqui, você encontrará informações sobre{" "}
        <Text style={{ fontWeight: "bold" }}>livros</Text> e{" "}
        <Text style={{ fontWeight: "bold" }}>documentos</Text>, bem como seus
        respectivos <Text style={{ fontWeight: "bold" }}>audiobooks.</Text>
      </Text>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name= "Livros" component={BooksMenu } options={{ headerShown: false }} />
          <Tab.Screen name="Documentação" component={DocumentationMenu} options={{ headerShown: false }} />
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
  message: {
    margin: 24,
    fontSize: 12,
    textAlign: 'center',
    bottom: -50
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
