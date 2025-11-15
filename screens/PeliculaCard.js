// components/PeliculaCard.jsx
import React from "react";
import { View, Image } from "react-native";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { InfoIcon } from "lucide-react-native"; // o tu librería de íconos
import { useNavigation } from "@react-navigation/native";

export default function PeliculaCard({ titulo, duracion, clasificacion, imagen, link }) {
  const navigation = useNavigation();

  return (
    <View style={{ marginBottom: 30, alignItems: "center", flex: 1 }}>
      <Pressable onPress={() => navigation.navigate("Detalle")}>
        <Image source={imagen} style={{ width: 160, height: 220, borderRadius: 5 }} resizeMode="cover" />
      </Pressable>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View
          style={{
            backgroundColor: "#fdd300ff",
            width: "auto",
            minWidth: 20,
            paddingLeft:5,
            paddingRight:5,
            height: 20,
            borderRadius: 5,
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <Text style={{color: 'black'}}>{clasificacion}</Text>
        </View>
        <Text style={{ color: "white" }}>{duracion}</Text>
      </View>

      <Text style={{ color: "white", fontSize: 18, height: 'auto', minHeight:30, maxHeight:50, textAlign: "center" }}>
        {titulo}
      </Text>

      <Link href={link}>
        <HStack>
          <LinkText style={{ color: "#006affff", fontSize: 16 }}>Ver sinopsis </LinkText>
          <Icon as={InfoIcon} size="lg" color="#006affff" />
        </HStack>
      </Link>
    </View>
  );
}
