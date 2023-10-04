import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  const pagina2 = () => {
    navigation.navigate('Pagina2');
  };
  const pagina3 = () => {
    navigation.navigate('Pagina3');
  };
  const pagina4 = () => {
    navigation.navigate('Pagina4');
  };


  return (
    
    <View style={styles.container}>
        <Text style={styles.paragraph}>
          Jogos WEB II
        </Text>
      <Text></Text>

      <ScrollView>

        <View style={styles.fotos1}>
          <Text style={styles.nome}>Adivinhe o número</Text>
          <Image style={styles.img} resizeMode = "center" source={require("../assets/adivinhe.png")} />
            <TouchableOpacity style={styles.botao} onPress={pagina2}>
              <Text style={styles.textoBotao}> Regras </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.fotos2}>
          <Text style={styles.nome}>Jokenpo</Text>
          <Image style={styles.img} resizeMode = "center" source={require("../assets/jo-ken-po.jpg")} />
              <TouchableOpacity style={styles.botao} onPress={pagina3}>
              <Text style={styles.textoBotao}> Regras </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.fotos3}>
          <Text style={styles.nome}>Par ou Ímpar</Text>
          <Image style={styles.img} resizeMode = "center" source={require("../assets/par-impar.jpg")} />
              <TouchableOpacity style={styles.botao} onPress={pagina4}>
              <Text style={styles.textoBotao}> Regras </Text>
            </TouchableOpacity>
        </View>

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: '#C4C9C9'
},

paragraph: {
  marginTop: 40,
  fontSize: 35,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#000' 
},

img: {
  width: 300,
  height: 200,
  borderRadius: 10,
  padding: 10,
  margin: 35,
},

nome: {
  fontSize: 30,
  fontWeight: 'bold',
  justifyContent: 'center',
  color: '#fff',
},

botao: {
  width: 200,
  backgroundColor: '#C4C9C9',
  height: 40,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
},

textoBotao: {
  fontSize: 25,
  color: '#000',
  fontWeight: 'bold',
},

fotos1: {
  flex: 1,
  backgroundColor: "#008080",
  margin: 20,
  justifyContent: 'center',
  padding: 25,
  alignItems: "center",
  borderRadius: 15
},

fotos2: {
  flex: 1,
  backgroundColor: "#008080",
  margin: 20,
  justifyContent: 'center',
  padding: 25,
  alignItems: "center",
  borderRadius: 15
},

  fotos3: {
  flex: 1,
  backgroundColor: "#008080",
  margin: 20,
  justifyContent: 'center',
  padding: 25,
  alignItems: "center",
  borderRadius: 15
},

});