import React, { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { ref, set, push } from "firebase/database";
import { db } from "@/firebaseConfig";


export default function Registro() {

    const [correo, setEmail] = useState("");
    const [contraseña, setPass] = useState("");

    function create() {
        const userRef = push(ref(db, "users"));

        set(userRef, {
            email: correo,
            contraseña: contraseña
        })
            .then(() => alert("Registro exitoso"))
            .catch((error) => alert(error));
    };


    return (

        <View style={{ width: "100%", alignItems: 'center', marginTop: 40 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Crear usuario</Text>
            <TextInput value={correo} onChangeText={(correo) => { setEmail(correo) }} placeholder="Correo electrónico" style={{ padding: 10, borderBottomWidth: 1, borderColor: '#00235D', width: "50%" }}></TextInput>
            <TextInput value={contraseña} onChangeText={(contraseña) => { setPass(contraseña) }} placeholder="Contraseña" style={{ padding: 10, borderBottomWidth: 1, borderColor: '#00235D', width: "50%", marginTop: 20, marginBottom: 30 }}></TextInput>
            <Pressable style={{ backgroundColor: "#00235D", padding: 10, borderRadius: 10 }} onPress={create}>
                <Text style={{ color: 'white' }}>Crear Cuenta</Text>
            </Pressable>
        </View>
    );
}