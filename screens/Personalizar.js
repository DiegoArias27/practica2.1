import React, { useState } from "react";
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@/components/ui/slider";
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import {
    FormControl,
    FormControlError,
    FormControlLabel,
    FormControlLabelText,
    FormControlHelper,
    FormControlHelperText,
} from '@/components/ui/form-control';
import { Button, ButtonText } from '@/components/ui/button';
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Pressable } from '@/components/ui/pressable';
import { CircleIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { HStack } from "@/components/ui/hstack";
import { Heading } from '@/components/ui/heading';
import {
    Radio,
    RadioGroup,
    RadioIcon,
    RadioIndicator,
    RadioLabel,
} from '@/components/ui/radio';
import { View } from "react-native";
import { Switch } from '@/components/ui/switch';
import {
    Checkbox,
    CheckboxGroup,
    CheckboxIndicator,
    CheckboxIcon,
    CheckboxLabel,
} from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';
import { Alert } from "react-native";

export default function Personalizar() {
    const [sliderValue, setSliderValue] = useState(90);
    const [values, setValues] = React.useState(['Eng']);
    const [radio, setRadio] = React.useState('Read-only');
    const [valueradio, setR] = React.useState('Eng');
    const [switchEnabled, setSwitchEnabled] = useState(false);
    const [selectedSabor, setSelectedSabor] = useState("Mantequilla");

    const handleSelectSabor = (sabor) => {
        setSwitchEnabled(sabor);
        if (!sabor) {
            setValues((prev) =>
                prev.includes("Mantequilla") ? ["Mantequilla"] : []
            );
        } else {
            setValues((prev) => prev.filter((v) => v !== "Mantequilla"));
        }
    };

    return (

        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <Center style={{ marginTop: 30, width: "100%" }}>
                <View>
                    <FormControl>
                        <VStack space="md">
                            <Heading size="sm">Elige el tamaño</Heading>
                            <RadioGroup>
                                <HStack space="sm">
                                    <Radio value="Monday" size="md">
                                        <RadioIndicator>
                                            <RadioIcon as={CircleIcon} />
                                        </RadioIndicator>
                                        <RadioLabel>Para llevar</RadioLabel>
                                    </Radio>
                                    <Radio value="Tuesday" size="md">
                                        <RadioIndicator>
                                            <RadioIcon as={CircleIcon} />
                                        </RadioIndicator>
                                        <RadioLabel>Jumbo</RadioLabel>
                                    </Radio>
                                    <Radio value="Wednesday" size="md">
                                        <RadioIndicator>
                                            <RadioIcon as={CircleIcon} />
                                        </RadioIndicator>
                                        <RadioLabel>Grandes</RadioLabel>
                                    </Radio>
                                </HStack>
                            </RadioGroup>
                            <Text className="text-sm text-light-500">
                                Elige la opción de tu preferencia
                            </Text>
                        </VStack>
                    </FormControl>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 900 }}>Personaliza el sabor de tus productos</Text>
                </View>
                <CheckboxGroup
                    value={values}
                    onChange={(keys) => {
                        setValues(keys);
                    }}
                >
                    <Checkbox value="Mantequilla" isDisabled={switchEnabled}>
                        <View style={{ width: 100, height: 120, borderColor: values.includes("Mantequilla") ? "#fdd300" : "gray", backgroundColor: values.includes("Mantequilla") ? "#fff6b0" : "#ffffff", borderWidth: 3, borderRadius: 10, justifyContent: 'center', padding: 10, marginTop: 20, alignItems: 'center' }}>
                            <Text>Mantequilla</Text>
                        </View>
                    </Checkbox>
                </CheckboxGroup>
                <View style={{ marginTop: 40 }}>
                    <HStack space="md">
                        <Switch
                            value={switchEnabled}
                            onValueChange={handleSelectSabor}
                            trackColor={{ false: '#d4d4d4', true: '#525252' }}
                            thumbColor="#00235D"
                            activeThumbColor="#fafafaff"
                            ios_backgroundColor="#d4d4d4"
                        />
                        <Text size="md">Añade un nuevo sabor por $25</Text>
                    </HStack>
                </View>
                <CheckboxGroup
                    value={values}
                    onChange={(keys) => {
                        setValues(keys);
                    }}
                >
                    <HStack space="md">
                        <Checkbox value="Caramelo" isDisabled={!switchEnabled}>
                            <View style={{ width: 100, height: 120, borderColor: values.includes("Caramelo") ? "#fdd300" : "gray", backgroundColor: values.includes("Caramelo") ? "#fff6b0" : "#ffffff", borderWidth: 3, borderRadius: 10, justifyContent: 'center', padding: 10, marginTop: 20, alignItems: 'center' }}>
                                <Text>Caramelo</Text>
                            </View>
                        </Checkbox>
                        <Checkbox value="Doritos" isDisabled={!switchEnabled}>
                            <View style={{ width: 100, height: 120, borderColor: values.includes("Doritos") ? "#fdd300" : "gray", backgroundColor: values.includes("Doritos") ? "#fff6b0" : "#ffffff", borderWidth: 3, borderRadius: 10, justifyContent: 'center', padding: 10, marginTop: 20, alignItems: 'center' }}>
                                <Text style={{ textAlign: 'center' }}>Doritos nacho</Text>
                            </View>
                        </Checkbox>
                        <Checkbox value="Chetos" isDisabled={!switchEnabled}>
                            <View style={{
                                width: 100, height: 120, borderColor: values.includes("Chetos") ? "#fdd300" : "gray",
                                backgroundColor: values.includes("Chetos") ? "#fff6b0" : "#ffffff", borderWidth: 3, borderRadius: 10, justifyContent: 'center', padding: 10, marginTop: 20, alignItems: 'center'
                            }}>
                                <Text>Chetos mix</Text>
                            </View>
                        </Checkbox>
                    </HStack>
                </CheckboxGroup>

                <View style={{ marginTop: 50 }}>
                    <Button variant="solid" size="md" action="primary" onPress={() => Alert.alert("Pago exitoso 💳")}>
                        <ButtonText>Pagar</ButtonText>
                    </Button>

                </View>
            </Center>
        </View>

    );
}
