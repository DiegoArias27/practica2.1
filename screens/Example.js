import React,{useState} from 'react';
import { View } from 'react-native';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import {
  FormControl, FormControlLabel, FormControlLabelText,
  FormControlHelper, FormControlHelperText, FormControlError,
  FormControlErrorIcon, FormControlErrorText,
} from '@/components/ui/form-control';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import {
  Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel,
} from '@/components/ui/radio';
import {
  Slider, SliderTrack, SliderFilledTrack, SliderThumb,
} from '@/components/ui/slider';
import { Center } from '@/components/ui/center';
import {
  Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel,
} from '@/components/ui/checkbox';
import { HStack } from '@/components/ui/hstack';
import {
  Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal,
  SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator,
  SelectItem,
} from '@/components/ui/select';
// íconos (si no están instalados sigue los pasos más abajo)
import { ChevronDownIcon, AlertCircleIcon, CircleIcon, CheckIcon } from '@/components/ui/icon'
import { Switch } from '@/components/ui/switch';
import { Pressable } from '@/components/ui/pressable';
import { Link, LinkText } from '@/components/ui/link';
import { Icon } from '@/components/ui/icon';
import { ArrowUpRight } from 'lucide-react-native';

function Example() {
  const [selectedsal, setSelectedsal] = React.useState('Terraza');
  const [eventType, setEventType] = React.useState('XV');
  const [sliderValue, setSliderValue] = useState(1);
  const [values, setValues] = React.useState(['Eng']);

  return (
    <View>
      <FormControl isRequired isInvalid>
        <FormControlLabel>
          <FormControlLabelText>Tipo de evento</FormControlLabelText>
        </FormControlLabel>

        <Select value={eventType} onValueChange={setEventType} defaultValue="XV">
          <SelectTrigger>
            <SelectInput placeholder="Seleccione una opcion" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="XV años" value="XV" />
              <SelectItem label="Boda" value="Boda" />
              <SelectItem label="Bautizo" value="Bautizo" />
              <SelectItem label="Baby Shower" value="Baby Shower" isDisabled={true} />
              <SelectItem label="Aniversario" value="Aniversario" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <FormControlHelper>
          <FormControlHelperText>Seleccione solo una opcion</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Campo Obligatorio</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <CheckboxGroup
        value={values}
        onChange={(keys) => {
          setValues(keys);
        }}
      >
        <FormControl>
          <VStack space="sm">
            <Heading size="sm">Servicios</Heading>
            <Checkbox value='Banquete'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Banquete</CheckboxLabel>
            </Checkbox>
            <Checkbox value='Mobiliario'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Mobiliario</CheckboxLabel>
            </Checkbox>
            <Checkbox value='Música'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Música</CheckboxLabel>
            </Checkbox>
            <Checkbox value='Decoración'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Decoración</CheckboxLabel>
            </Checkbox>
            <Text size="sm">Subscribe to newsletters for updates</Text>
          </VStack>
        </FormControl>
      </CheckboxGroup>

      <VStack space="md">
        <Heading>Seleccione el tipo de salon</Heading>
        <RadioGroup value={selectedsal} onChange={setSelectedsal}>
          <VStack space="sm">
            {['Salon', 'Terraza', 'Hacienda'].map((sal) => (
              <Radio key={sal} value={sal}>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>{sal}</RadioLabel>
              </Radio>
            ))}
          </VStack>
        </RadioGroup>

        <Text className="text-sm text-light-500">
          Seleccione el número de invitados
        </Text>
      </VStack>

      <Center className="w-[300px] h-[150px]">
        <Text className="mb-2">Invitados: {sliderValue}</Text>
        <Slider
          value={sliderValue}
          onChange={(value) => {
            const newVal = Array.isArray(value) ? value[0] : value;
            setSliderValue(newVal);
          }}
          minValue={50}
          maxValue={300}
          step={1}
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
         style={{width:300}}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Center>

      <HStack space="md">
        <Switch
          trackColor={{ false: '#d4d4d4', true: '#525252' }}
          thumbColor="#fafafa"
          activeThumbColor="#fafafa"
          ios_backgroundColor="#d4d4d4"
        />
        <Text>Recibir notificacion</Text>
      </HStack>

      <VStack space="md" />

      <FormControl className="max-w-[200px] w-full">
        <FormControlLabel>
          <FormControlLabelText>Comentarios adicionales</FormControlLabelText>
        </FormControlLabel>
        <Textarea>
          <TextareaInput placeholder="Once upon a time..." />
        </Textarea>

        <FormControlHelper>
          <FormControlHelperText>Agrega detalles sobre tu evento</FormControlHelperText>
        </FormControlHelper>
      </FormControl>

      <Pressable className="p-16 bg-primary-100" style={{width:100, alignItems:'center'}}>
        {({ pressed }) => (
          <Text className={pressed ? 'text-pink-100' : 'text-amber-100'}>Enviar</Text>
        )}
      </Pressable>

      <Text>Para más ideas &nbsp;</Text>
      <Link href={"https://gluestack.io/"}>
        <HStack>
          <LinkText style={{ color: "#006affff", fontSize: 16 }}>Ver </LinkText>
          <Icon as={ArrowUpRight} size="lg" color="#006affff" />
        </HStack>
      </Link>
    </View>
  );
}

export default Example;