import { Animated, StyleSheet } from "react-native";
import * as S from "./styles";

interface IBoxSliderProps {
  id: string;
  image: string;
  state: string;
  onPress: () => void;
}

export const BoxSlider = ({ image, state, onPress }: IBoxSliderProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Title>{state}</S.Title>
      <Animated.Image
        source={{ uri: image }}
        style={[
          StyleSheet.absoluteFillObject,
          { resizeMode: "cover", borderRadius: 10 },
        ]}
      />
    </S.Container>
  );
};
