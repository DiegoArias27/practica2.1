import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Encabezado = (props) => {
  console.log('Invcocando componente propio')
    return(
        <View style={[styles.box, {backgroundColor: props.color}]}>
                <Text style={styles.bold}>{props.nombre}</Text>
                <Text style={styles.bold}>React Native - <Text style={styles.normal}>User registration</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
  box: {
    width: '90%',
    height: '10%',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius:10
  },
  bold:{
    fontWeight:'700',
    color:'white'
  },
  normal:{
    fontWeight:'400'
  }
});

export default Encabezado;