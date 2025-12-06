import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ref, update, remove, onValue } from "firebase/database";
import { db } from "@/firebaseConfig";
import { HStack } from "@/components/ui/hstack";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Modificar() {
    const [users, setUsers] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const [editEmail, setEditEmail] = useState(false);
    const [editPass, setEditPass] = useState(false);

    useEffect(() => {
        const usersRef = ref(db, "users");

        onValue(usersRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const list = Object.keys(data).map((id) => ({
                    id,
                    email: data[id].email,
                    contraseña: data[id].contraseña,
                }));
                setUsers(list);
            }
        });
    }, []);

    function handleSelect(id) {
        setSelectedId(id);

        const usuario = users.find((u) => u.id === id);

        if (usuario) {
            setCorreo(usuario.email);
            setContrasena(usuario.contraseña);
        }
    }


    function guardarCambios() {
        if (!selectedId) return Alert.alert("Selecciona un usuario");

        const refUser = ref(db, "users/" + selectedId);

        update(refUser, {
            email: correo,
            contraseña: contrasena,
        }).then(() => {
            Alert.alert("Éxito", "Usuario actualizado");
            setEditEmail(false);
            setEditPass(false);
        });
    }

    function eliminarUsuario() {
        if (!selectedId) return Alert.alert("Selecciona un usuario");

        Alert.alert(
            "Eliminar",
            "¿Estás seguro?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => {
                        remove(ref(db, "users/" + selectedId))
                            .then(() => {
                                Alert.alert("Cuenta eliminada");
                                setSelectedId("");
                                setCorreo("");
                                setContrasena("");
                            });
                    },
                },
            ]
        );
    }

    return (
        <View style={{ marginTop: 50, alignItems: "center" }}>
            <Text style={{ fontSize: 22, marginBottom: 20 }}>Modificar Usuario</Text>

            {/* ---------------- SELECTOR ---------------- */}
            <Picker
                selectedValue={selectedId}
                onValueChange={handleSelect}
                style={{
                    width: "80%",
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 20,
                }}
            >
                <Picker.Item label="Selecciona un usuario" value="" />
                {users.map((u) => (
                    <Picker.Item key={u.id} label={u.email} value={u.id} />
                ))}
            </Picker>

            <HStack style={{ alignItems: "center" }}>
                <TextInput
                    value={correo}
                    onChangeText={setCorreo}
                    editable={editEmail}
                    placeholder="Correo"
                    style={{
                        padding: 10,
                        borderBottomWidth: 1,
                        borderColor: "#00235D",
                        width: "70%",
                        color: editEmail ? "black" : "gray",
                    }}
                />
                <Pressable onPress={() => setEditEmail(!editEmail)}>
                    <FontAwesome5 name="edit" size={22} color="black" />
                </Pressable>
            </HStack>

            <HStack style={{ alignItems: "center" }}>
                <TextInput
                    value={contrasena}
                    onChangeText={setContrasena}
                    editable={editPass}
                    secureTextEntry
                    placeholder="Contraseña"
                    style={{
                        padding: 10,
                        borderBottomWidth: 1,
                        borderColor: "#00235D",
                        width: "70%",
                        marginTop: 20,
                        color: editPass ? "black" : "gray",
                    }}
                />
                <Pressable onPress={() => setEditPass(!editPass)}>
                    <FontAwesome5 name="edit" size={22} color="black" />
                </Pressable>
            </HStack>

            {(editEmail || editPass) && (
                <Pressable
                    style={{
                        backgroundColor: "green",
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 25,
                    }}
                    onPress={guardarCambios}
                >
                    <Text style={{ color: "white" }}>Guardar Cambios</Text>
                </Pressable>
            )}

            <Pressable
                style={{
                    backgroundColor: "#8b0000",
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 40,
                }}
                onPress={eliminarUsuario}
            >
                <HStack style={{ alignItems: "center" }}>
                    <AntDesign name="delete" size={24} color="white" />
                    <Text style={{ color: "white", marginLeft: 10 }}>
                        Eliminar Usuario
                    </Text>
                </HStack>
            </Pressable>
        </View>
    );
}
