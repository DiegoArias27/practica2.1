import { createDrawerNavigator } from '@react-navigation/drawer';
import FormsScreen from './screens/FormScreens';
import { NavigationContainer } from '@react-navigation/native';
import Detalle from './screens/Detalle';
import Dulceria from './screens/Dulceria';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import "@/global.css";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Personalizar from './screens/Personalizar';
import Comentarios from './screens/Comentarios';
import Example from './screens/Example';
import Perfil from './screens/Perfil';
import Bebidas from './screens/Bebidas';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function PeliculasStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#00235D" } }}>
      <Stack.Screen
        name="PelículasHome"
        component={FormsScreen}
        options={{
          headerTitle: 'Películas',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10, marginRight: 10 }}>
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="Detalle"
        component={Detalle}
        options={{ headerTitle: '', headerShown: true, headerTintColor: 'white' }}
      />
      <Stack.Screen
        name="Personalizar"
        component={Personalizar}
        options={{ headerTitle: 'Personalizar', headerShown: true, headerTintColor: 'white' }}
      />
    </Stack.Navigator>
  );
}

function DulceriaStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#00235D" } }}>
      <Stack.Screen
        name="DulceriaHome"
        component={Dulceria}
        options={{
          headerTitle: 'Dulceria',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 10, marginRight: 10 }}>
              <Ionicons name="menu" size={28} color="#fff" />
            </TouchableOpacity>
          ),
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="Personalizar"
        component={Personalizar}
        options={{ headerTitle: 'Personalizar', headerShown: true, headerTintColor: 'white' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitle: 'Dulcería',
            headerStyle: { backgroundColor: '#00235D' },
            headerTintColor: 'white',
            drawerStyle: { backgroundColor: '#00235D' },
            drawerActiveBackgroundColor: '#001536ff',
            drawerActiveTintColor: 'white',
            drawerInactiveBackgroundColor: '#00235D',
            drawerInactiveTintColor: 'white'
          }}
        >
          <Drawer.Screen
            name="Películas"
            component={PeliculasStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Dulcería"
            component={DulceriaStack}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Comentarios"
            component={Comentarios}
            options={{ headerShown: true, headerTitle:'Comentarios' }}
          />
          <Drawer.Screen
            name="Perfil"
            component={Perfil}
            options={{ headerShown: true, headerTitle:'Perfil' }}
          />
          <Drawer.Screen
            name="Bebidas"
            component={Bebidas}
            options={{ headerShown: true, headerTitle:'Bebidas' }}
          />


        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
