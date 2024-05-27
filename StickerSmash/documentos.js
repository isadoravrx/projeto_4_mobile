import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

const Documento = ({ route, navigation }) => {
  const { id2 } = route.params;

  const documentosDetalhe = {
    'Hello_World!': {
      title: 'Hello World!',
      image: require('./images/documentos/Hello_World.jpeg'),
      descricao: 'O programa "Hello World" é um clássico na programação, utilizado para introduzir os conceitos básicos de uma linguagem. Em Java, este programa é simples e serve como um ponto de partida para aprender a sintaxe e estrutura da linguagem.',
      link: 'https://docs.oracle.com/javase/tutorial/getStarted/cupojava/index.html',
    },
    'Conceitos_POO': {
      title: 'Conceitos POO',
      image: require('./images/documentos/Conceitos_POO.jpeg'),
      descricao: 'A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em torno de "objetos", que representam entidades do mundo real. Cada objeto possui características (atributos) e comportamentos (métodos). A POO visa tornar o código mais modular, reutilizável e fácil de manter, especialmente para projetos complexos.',
      link: 'https://docs.oracle.com/javase/tutorial/java/concepts/index.html',
    },
    'ArrayList': {
      title: 'ArrayList',
      image: require('./images/documentos/ArrayList.jpeg'),
      descricao: 'Em Java, o ArrayList é uma implementação popular de uma lista redimensionável. Diferente de arrays tradicionais, que possuem tamanho fixo, o ArrayList permite adicionar, remover e acessar elementos de forma dinâmica.',
      link: 'https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html',
    },
    'Arquitetura_em_Nuvem':{
      title: 'Arquitetura em Nuvem',
      image: require('./images/documentos/Arquitetura_em_Nuvem.jpeg'),
      descricao: 'A arquitetura de nuvem é a forma como as tecnologias individuais são integradas para criar nuvens. Elas são ambientes de TI que abstraem, agrupam e compartilham recursos escaláveis em uma rede. A arquitetura é como todos os componentes e recursos necessários no desenvolvimento de uma nuvem são conectados para construir uma plataforma online em que as aplicações serão executadas.',
      link: 'https://www.redhat.com/pt-br/topics/cloud-computing/what-is-cloud-architecture',
    },
    'Autômatos_finitos':{
      title: 'Autômatos finitos',
      image: require('./images/documentos/automatos_finitos.jpeg'),
      descricao: 'No reino da computação, os autômatos finitos reinam supremos sobre o processamento de sequências simples. Imagine um robô obediente que segue regras rígidas para navegar em um labirinto ou analisar uma frase em um idioma específico. Essa é a essência dos autômatos finitos, máquinas abstratas que operam com base em um conjunto finito de estados e regras de transição.',
      link: 'https://www.dca.fee.unicamp.br/cursos/EA876/apostila/HTML/node46.html#:~:text=Um%20aut%C3%B4mato%20finito%20tem%20um,transi%C3%A7%C3%A3o%20especificadas%20para%20o%20aut%C3%B4mato.',
    },
    'Modelos_Conceituais':{
      title: 'Modelos Conceituais',
      image: require('./images/documentos/Modelos_Conceituais.jpeg'),
      descricao: 'Os modelos conceituais servem como uma ponte entre o mundo real e sua representação em sistemas de informação. Eles fornecem uma visão abstrata e simplificada dos principais componentes e seus relacionamentos dentro de um domínio específico, facilitando a compreensão e o desenvolvimento de sistemas eficientes e eficazes.',
      link: 'https://irlabr.wordpress.com/apostila-de-ihc/modelos-conceituais/',
    },
    'Busca_em_profundidade':{
      title: 'Busca em profundidade',
      image: require('./images/documentos/Busca_em_profundidade.jpeg'),
      descricao: 'A pesquisa em profundidade (DFS) é um algoritmo fundamental na ciência da computação, utilizado para explorar e analisar estruturas de dados complexas, como grafos e árvores. Sua característica principal reside na exploração sistemática de um caminho até o seu ponto final antes de retroceder e analisar outros caminhos.',
      link: 'https://materialpublic.imd.ufrn.br/curso/disciplina/5/69/9/3#:~:text=No%20algoritmo%20DFS%2C%20percorre%2Dse,a%20profundidade%20%C3%A9%20de%20um.',
    },

  };

  const documento = documentosDetalhe[id2];
  navigation.setOptions({ title: documento.title });

  const openLink = () => {
    Linking.openURL(documento.link).catch(err => console.error('Erro ao abrir o URL:', err));
  };

  return (
    <ScrollView>  
      <View style={styles.container}>
        <Image source={documento.image} style={styles.image} />
        <Text style={styles.descricao}>{documento.descricao}</Text>
        <TouchableOpacity style={styles.button} onPress={openLink}>
          <Text style={styles.buttonText}>Referência</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 50,
  },
  descricao: {
    fontSize : 15,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Documento;