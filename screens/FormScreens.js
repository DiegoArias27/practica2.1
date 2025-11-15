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
import PeliculaCard from './PeliculaCard';

function FormScreens({ navigation }) {
  const [peliculas, setPeliculas] = useState([
    {
      titulo: "No me sigas",
      duracion: '89 min',
      clasificacion: "B",
      imagen: require("../image/No me sigas.jpg"),
      link: "https://cinepolis.com/mx/detalle?movie=no-me-sigas",
      detalleRuta: "Detalle",
    },
    {
      titulo: "Teléfono Negro 2",
      duracion: '120 min',
      clasificacion: "B15",
      imagen: require("../image/telefononegro2.jpg"),
      link: "https://cinepolis.com/mx/detalle?movie=telefono-negro-2",
      detalleRuta: "Detalle",
    },
    {
      titulo: "A Pesar De Ti",
      duracion: '116 min',
      clasificacion: "B",
      imagen: require("../image/apesardeti.jpg"),
      link: "https://cinepolis.com/mx/detalle?movie=a-pesar-de-ti",
      detalleRuta: "Detalle",
    },
    {
      titulo: "Cuando El Cielo Se Equivoca",
      duracion: '98 min',
      clasificacion: "B",
      imagen: require("../image/cuandoelcieloseequivoca.jpg"),
      link: "https://cinepolis.com/mx/detalle?movie=cuando-el-cielo-se-equivoca",
      detalleRuta: "Detalle",
    },
    {
      titulo: "6 Exorcismos",
      duracion: '105 min',
      clasificacion: "B15",
      imagen: require("../image/6exorcismos.jpg"),
      link: "https://cinepolis.com/mx/detalle?movie=6-exorcismos",
      detalleRuta: "Detalle",
    },
    {
      titulo: "Good Boy: Confia En Su Instinto",
      duracion: '75 min',
      clasificacion: "B",
      imagen: require("../image/goodboy_confiaensuinstinto.jpg"),
      link: "https://cinepolis.com/mx/detalle?movie=good-boy-confia-en-su-instinto",
      detalleRuta: "Detalle",
    },
    {
      titulo: "Volver Al Futuro",
      duracion: '116 min',
      clasificacion: "A",
      imagen: require("../image/volveralfuturo.jpg"),
      link: "https://cinepolis.com/mx/detalle?cinema=cinepolis-espacio-aguascalientes&movie=volver-al-futuro",
      detalleRuta: "Detalle",
    },
    {
      titulo: "Paw Patrol Especial De Navidad",
      duracion: '67 min',
      clasificacion: "AA",
      imagen: require("../image/pawpatronespecialdenavidad.jpg"),
      link: "https://cinepolis.com/mx/detalle?movie=paw-patrol-especial-de-navidad",
      detalleRuta: "Detalle",
    },
  ]);
  const filas = [];
  for (let i = 0; i < peliculas.length; i += 2) {
    filas.push(peliculas.slice(i, i + 2));
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
      <View style={{ width: '100%', alignItems: 'center', marginTop: -40 }}>
        <Select>
          <SelectTrigger variant="underlined" size="xl" borderColor="white">
            <SelectInput placeholder="Selecciona el cine" style={{ color: "white" }} placeholderTextColor="White" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Espacio Aguascalientes" value="ux" />
              <SelectItem label="Altaria" value="web" />
              <SelectItem label="Altaria VIP" value="Cross Platform Development Process" />
              <SelectItem label="Aguascalientes" value="ui" />
              <SelectItem label="Sur Aguascalientes" value="backend" />
              <SelectItem label="Velaria Mall" value="backend" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </View>
      <ScrollView style={{ backgroundColor: "#00235D", flex: 1 }}>
        <View style={{ padding: 20 }}>
          {filas.map((fila, index) => (
            <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
              {fila.map((peli, idx) => (
                <PeliculaCard key={idx} {...peli} navigation={navigation} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View >

  );
}
export default FormScreens;