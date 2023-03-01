import React from "react";
import * as S from "./styles";

interface ISliderTextProps {
  id: string;
  title: string;
  onPress: () => void;
}

export const SliderText = ({ title, onPress }: ISliderTextProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Content>
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
};
