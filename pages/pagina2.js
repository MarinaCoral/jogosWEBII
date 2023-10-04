import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  const home = () => {
    navigation.navigate('Home');
  };

  return (
    
    <View style={styles.container}>
        <Text style={styles.paragraph}> Regras do adivinhe o número</Text>
      <Text></Text>

      <ScrollView>

        <View style={styles.regra}>
          <Text style={styles.nome}>Adivinhar o número é um jogo onde você deve adivinhar um número secreto formado de um dígito, selecionado pelo computador. O número é formado por dígitos de 0 a 9.</Text>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity
              style={styles.botao}
              onPress={() => {
                home();}}>
              <Text style={styles.textoBotao}> Home </Text>
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

nome: {
  fontSize: 30,
  fontWeight: 'bold',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'justify'
},

btn: {
  justifyContent: 'center',
  alignItems: "center",
  borderRadius: 15,
},

botao: {
  width: 200,
  backgroundColor: '#008080',
  height: 40,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
},

textoBotao: {
  fontSize: 25,
  color: '#000',
  fontWeight: 'bold',
},

regra: {
  flex: 1,
  backgroundColor: "#008080",
  margin: 30,
  justifyContent: 'center',
  padding: 20,
  alignItems: "center",
  borderRadius: 15
},

});