import React, { useState } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@/components/ui/slider";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Pressable } from "@/components/ui/pressable";
import { Center } from "@/components/ui/center";

export default function Detalle() {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <Center style={{ marginTop: 30, width: "100%" }}>
      <Text style={{ fontSize: 16, color: "black", marginBottom: 10 }}>
        Cantidad de boletos
      </Text>

      <Box style={{ width: 300 }}>
        <Slider
          minValue={1}
          maxValue={20}
          step={1}
          size="lg"
          orientation="horizontal"
          isDisabled={false}
          defaultValue={[sliderValue]}
          onChange={(value) => {
            const newVal = Array.isArray(value) ? value[0] : value;
            setSliderValue(newVal);
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            color: "black",
            fontSize: 16,
          }}
        >
          Min: 1  Valor: {sliderValue}  Max: 20
        </Text>
      </Box>

      <Pressable onPress={() => alert(`Compraste ${sliderValue} boleto(s)`)} >
        {({ pressed }) => (
          <Text
            style={{
              color: pressed ? "#1b7ccbff" : "#ffffffff",
              fontSize: 16,
              backgroundColor: "#00235D",
              padding: 12,
              borderRadius: 8,
              marginTop: 20,
            }}
          >
            Comprar boletos
          </Text>
        )}
      </Pressable>
    </Center>
  );
}
