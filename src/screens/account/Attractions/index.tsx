import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import Header from "../../../components/Header";
import theme from "../../../theme";
import { BackDrop } from "./components/BackDrop";
import { CardSlider } from "./components/CardSlider";
import { Favorite } from "./components/Favorite";
import * as S from "./styles";

interface IAttractions {
  id: number;
  title: string;
  image: string;
}

const data: IAttractions[] = [
  {
    id: 1,
    title: "Orla do Guaíba",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/orla.jpeg?alt=media&token=c24385db-2eca-4218-8bb2-f21e61e53e1c",
  },
  {
    id: 2,
    title: "Parque Farroupilha",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/parque-farroupilha.jpeg?alt=media&token=2fa87eb1-4cc2-4c6f-9838-beee546f7622",
  },
  {
    id: 3,
    title: "Arena do Grêmio",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/arena-gremio.jpeg?alt=media&token=4d4cd473-a7c8-4fea-bf1e-4d3365a3b0b7",
  },
  {
    id: 4,
    title: "Estádio Beira Rio",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/beira-rio.jpeg?alt=media&token=688dab4f-c057-4f6e-a6ea-29a94debf189",
  },
  {
    id: 5,
    title: "Calçadão de Ipanema",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/ipanema.jpeg?alt=media&token=9f16df78-e05b-42fd-b42c-bbc898dca82f",
  },
  {
    id: 6,
    title: "Parque Pontal",
    image:
      "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/pontal.jpeg?alt=media&token=c099eb74-7549-4dcb-9822-ac1cb55fca70",
  },
];

const ANCHO_CONTENEDOR = theme.device.width * 0.7;
const ESPACIO_CONTENEDOR = (theme.device.width - ANCHO_CONTENEDOR) / 2;

export const Attractions = () => {
  const [attractions, setAttractions] = useState<IAttractions[]>(data);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setAttractions(data);
  }, [attractions]);

  return (
    <S.Background>
      <Header isIconMenu={false} isIconBack={true} />
      <BackDrop
        scrollX={scrollX}
        images={attractions.map((attractions) => {
          return attractions.image;
        })}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 200,
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={attractions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <CardSlider
              image={item.image}
              scrollY={scrollY}
              title={item.title}
            />
          );
        }}
      />
      <Favorite />
    </S.Background>
  );
};
