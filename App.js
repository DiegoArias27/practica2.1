import React, { useState } from 'react';
import { View, Text, Alert, Button, StyleSheet, TextInput, Switch } from 'react-native';
import Encabezado from './Encabezado';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

function Login() {
  console.log('Inicializando app')
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  const handleLogin = () => {
    console.log('Componente alert activado al iniciar sesión')
    Alert.alert('Autenticación', 'Usuario autenticado');
    setAutenticado(true);
  };
  const handleExit = () => {
    console.log('Componente alert activado al cerrar sesión')
    Alert.alert('Autenticación', 'Se cerro la sesión');
    setAutenticado(false);
  };
  return (
    
    <GluestackUIProvider>
      <View style={styles.container}>
      
      <Encabezado nombre='José Diego Arias Reyes' color='red'></Encabezado>

      <TextInput style={styles.input} placeholder="Usuario" value={usuario} onChangeText={setUsuario}/>
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>

      <View style={styles.btn}>
      <Button title='Sign in' onPress={handleLogin} disabled={autenticado ? true : false} />
      </View>
      <View style={styles.btn}>
      <Button title='Exit' onPress={handleExit} disabled={autenticado ? false : true} />
      </View>
    </View>
    </GluestackUIProvider>
  
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bold:{
    fontWeight:'700',
    color:'white'
  },
  normal:{
    fontWeight:'400'
  },
  input: {
    width: '90%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
  btn:{
    marginTop: 40
  }
});

export default  Login;
