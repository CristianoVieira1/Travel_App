import { Feather } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  BounceIn,
  FadeOut,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import * as S from "./styles";

interface IProgresssBarProps {
  value: number;
  onMoveTop: () => void;
}
export const ProgresssBar = ({ value, onMoveTop }: IProgresssBarProps) => {
  const widthContainer = useSharedValue(200);
  const endReached = value >= 95;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.4 });
  }, [value]);

  return (
    <S.Container style={animatedStyle}>
      {endReached ? (
        <S.IconView entering={BounceIn} exiting={FadeOut}>
          <Feather name="arrow-up" size={24} color="#fff" onPress={onMoveTop} />
        </S.IconView>
      ) : (
        <S.Content entering={BounceIn} exiting={SlideOutDown}>
          <S.Porcentagem>{value.toFixed(0)}%</S.Porcentagem>
          <S.Traker>
            <S.Progress style={{ width: `${value}%` }}></S.Progress>
          </S.Traker>
        </S.Content>
      )}
    </S.Container>
  );
};
