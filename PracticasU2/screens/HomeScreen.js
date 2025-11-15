import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';

function HomeScreen(){
  const navigation = useNavigation();
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title='Details Screen' onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
}

export default HomeScreen;