import React, { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';
import { ChevronDownIcon, InfoIcon } from '@/components/ui/icon';
import { View, ScrollView } from 'react-native';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import DulceriaCard from './DulceriaCard';

function Dulceria({ navigation }) {
  const [dul, setDul] = useState([
    {
      titulo: "Palomitas",
      precio: '$96.00',
      imagen: require("../image/palomitas.png"),
      detalleRuta: "Detalle",
    },
    
  ]);
  const filas = [];
  for (let i = 0; i < dul.length; i += 2) {
    filas.push(dul.slice(i, i + 2));
  }
  return (
    <View style={{ width: '100%', height: "100%", backgroundColor: '#00235D' }}>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '-10%', backgroundColor: '#00235D' }}>
        <Image
          source={require("../image/cinepolis.jpg")}
          size="2xl"
          resizeMode='contain'
        />
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{color:'white', fontSize:30}}>Destacados</Text>
      </View>
      <ScrollView style={{ backgroundColor: "#00235D", flex: 1 }}>
        <View style={{ padding: 20 }}>
          {filas.map((fila, index) => (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
              {fila.map((dul, idx) => (
                <DulceriaCard key={idx} {...dul} navigation={navigation} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View >

  );
}
export default Dulceria;