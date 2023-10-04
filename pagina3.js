import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  const home = () => {
    navigation.navigate('Home');
  };

  return (
    
    <View style={styles.container}>
        <Text style={styles.paragraph}> Regras do Jokenpo</Text>
      <Text></Text>

      <ScrollView>

        <View style={styles.regra}>
          <Text style={styles.nome}>No Jankenpo, os jogadores devem simultaneamente esticar a mão, na qual cada um formou um símbolo (que significa pedra, papel ou tesoura). Então, os jogadores comparam os símbolos para decidir quem ganhou, da seguinte forma:
{"\n"}{"\n"}{"\n"}
Pedra ganha da tesoura (amassando-a ou quebrando-a).
{"\n"}{"\n"}
Tesoura ganha do papel (cortando-o).
{"\n"}{"\n"}
Papel ganha da pedra (embrulhando-a).
{"\n"}{"\n"}
A pedra é simbolizada por um punho fechado.
{"\n"}{"\n"}
A tesoura, por dois dedos esticados.
{"\n"}{"\n"}
O papel, pela mão aberta. 
{"\n"}{"\n"}
Caso dois jogadores façam o mesmo gesto, ocorre um empate, e geralmente se joga de novo até desempatar.</Text>
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