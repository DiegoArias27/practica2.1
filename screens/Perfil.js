import React from "react";
import { View, Image, ScrollView } from "react-native";
import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    AvatarBadge,
} from '@/components/ui/avatar';
import { Text } from "@/components/ui/text";
import { Grid, GridItem } from '@/components/ui/grid';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert, AlertText, AlertIcon } from '@/components/ui/alert';
import { InfoIcon } from '@/components/ui/icon';
import GridCustom from "./gridcustom";

function Perfil() {
    return (

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 50 }}>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Alert action="success" variant="outline">
                    <AlertIcon as={InfoIcon} />
                    <AlertText>Eliminado de favoritos!</AlertText>
                </Alert>
                <Avatar size="2xl">
                    <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                    <AvatarImage
                        source={require("../image/telefononegro2.jpg")}
                    />
                </Avatar>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700' }}>José Diego Arias Reyes</Text>
                    <Text style={{ fontSize: 18 }}>Gerente</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginBottom: 20 }}>Mis Favoritos</Text>
                </View>

                <Grid
                    className="gap-4"
                    _extra={{
                        className: 'grid-cols-9',
                    }}
                    style={{ width: '80%', marginBottom: -40 }}
                >
                    <GridItem
                        className="bg-background-50 p-3 rounded-md text-center"
                        _extra={{
                            className: 'col-span-3',
                        }}
                        style={{ alignItems: 'center', backgroundColor:'#98bfffff', borderRadius:15}}
                    >
                        <MaterialCommunityIcons name="movie" size={24} color="#00235D" />
                        <Text style={{color:"#00235D"}}>Películas</Text>
                    </GridItem>
                    <GridItem
                        className="bg-background-50 p-3 rounded-md text-center"
                        _extra={{
                            className: 'col-span-3',
                        }}
                        style={{ alignItems: 'center' }}
                    >
                        <MaterialCommunityIcons name="popcorn" size={24} color="black" />
                        <Text>Dulcería</Text>
                    </GridItem>
                    <GridItem
                        className="bg-background-50 p-3 rounded-md text-center"
                        _extra={{
                            className: 'col-span-3',
                        }}
                        style={{ alignItems: 'center' }}
                    >
                        <MaterialIcons name="category" size={24} color="black" />
                        <Text>Categoría</Text>
                    </GridItem>
                </Grid>
            </View>

            <View style={{ backgroundColor: 'white', width: '100%', marginTop: 50 }}>
                <Grid
                    className="gap-3"
                    _extra={{
                        className: 'grid-cols-8',
                    }}
                    style={{ alignContent: 'center' }}
                >
                    <GridItem
                        className="bg-background-50 p-3 rounded-md text-center"
                        _extra={{
                            className: 'col-span-4',
                        }}
                        style={{ width: '100%' }}
                    >
                        <Image source={require("../image/cine.jpg")} style={{ width: '100%', height: 200, borderRadius: 10 }} resizeMode="cover" />
                        <Text style={{fontSize:18, marginTop:25}}>Algunas de tus favoritas</Text>
                    </GridItem>
                    <GridItem
                        className="bg-background-50 p-3 rounded-md text-center"
                        _extra={{
                            className: 'col-span-4',
                        }}
                        style={{ width: '100%', marginTop:-20}}
                    >
                        <Grid
                            className="gap-2"
                            _extra={{
                                className: 'grid-cols-3',
                            }}
                            style={{ flexDirection: 'row', width: '100%' }}
                        >
                            <GridCustom imageSrc={require("../image/volveralfuturo.jpg")} />
                            <GridCustom imageSrc={require("../image/No me sigas.jpg")} />
                            <GridCustom imageSrc={require("../image/apesardeti.jpg")} />
                            <GridCustom imageSrc={require("../image/6exorcismos.jpg")} />
                            <GridCustom imageSrc={require("../image/goodboy_confiaensuinstinto.jpg")} />
                            <GridCustom imageSrc={require("../image/pawpatronespecialdenavidad.jpg")} />
                        </Grid>
                    </GridItem>
                </Grid>
            </View>

        </ScrollView>
    );
}

export default Perfil;