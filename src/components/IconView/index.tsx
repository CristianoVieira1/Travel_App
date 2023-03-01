import React, { FC } from "react";
import { SvgProps } from "react-native-svg";
import * as S from "./styles";

interface IProps {
  title: string;
  icon: FC<SvgProps>;
  onPress?: () => void;
}
export const IconView = ({ title, icon: Icon, onPress }: IProps) => {
  return (
    <S.Container onPress={onPress}>
      {Icon && <Icon width={32} height={32} />}
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
