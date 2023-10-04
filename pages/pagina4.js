import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  const home = () => {
    navigation.navigate('Home');
  };

  return (
    
    <View style={styles.container}>
        <Text style={styles.paragraph}> Regras do Par ou Ímpar</Text>
      <Text></Text>

      <ScrollView>

        <View style={styles.regra}>
          <Text style={styles.nome}>Dois jogadores fazem uma aposta escolhendo entre par ou ímpar.
          {"\n"}{"\n"}
            Cada jogador seleciona um número aleatório entre o intervalo par escolhido, usando suas mãos, e mostram os números escolhidos simultaneamente, para que não haja manipulação de resultados com base na escolha do adversário.
            {"\n"}{"\n"}
            Os dois números escolhidos são somados.
            {"\n"}{"\n"}
O jogador cuja aposta corresponder à paridade da soma será o vencedor da rodada.</Text>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity style={styles.botao} onPress={() => {home();}}>
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
  alignItems: "justify",
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