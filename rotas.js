import {createStackNavigator} from '@react-navigation/stack';

import home from './home';
import pagina2 from './pagina2';
import pagina3 from './pagina3';
import pagina4 from './pagina4';

const Stack = createStackNavigator();

export default function Rotas(){
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={home} options={{headerShown:false, title:"home"}}/>
    <Stack.Screen name="Pagina2" component={pagina2} options={{headerShown:false, title:"pagina2"}}/>
    <Stack.Screen name="Pagina3" component={pagina3} options={{headerShown:false, title:"pagina3"}}/>
    <Stack.Screen name="Pagina4" component={pagina4} options={{headerShown:false, title:"pagina4"}}/>
    </Stack.Navigator>
  );
}