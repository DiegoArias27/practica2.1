import {
    FormControl,
    FormControlError,
    FormControlLabel,
    FormControlLabelText,
    FormControlHelper,
    FormControlHelperText,
} from '@/components/ui/form-control';
import { Text } from '@react-navigation/elements';
import { View } from 'react-native';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Alert } from "react-native";
import { Button, ButtonText } from '@/components/ui/button';
function Comentarios() {
    return (
        <View>
            <View>
                <Text style={{fontSize:20, textAlign:'center', fontWeight:900, marginBottom:30, marginTop:20}}>Califica nuestra aplicación</Text>
            </View>

            <FormControl size="lg" className="max-w-[200px] w-full" style={{alignItems:'center'}}>
                <FormControlLabel>
                    <FormControlLabelText>Deja un comentario</FormControlLabelText>
                </FormControlLabel>
                <Textarea style={{width:300}}>
                    <TextareaInput placeholder="El mejor cine de México..." />
                </Textarea>
                <FormControlHelper>
                    <FormControlHelperText>Deja un comentario</FormControlHelperText>
                </FormControlHelper>
            </FormControl>
            <View style={{alignItems:'center', marginTop:30}}>
                <Button variant="solid" size="md" style={{width:100}} action="primary" onPress={() => Alert.alert("¡Comentario registrado!")}>
                        <ButtonText>Enviar</ButtonText>
                    </Button>
            </View>
        </View>
    );
}

export default Comentarios;
