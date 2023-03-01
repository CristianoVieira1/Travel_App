import { Feather } from "@expo/vector-icons";
import React from "react";
import theme from "../../theme";
import * as S from "./styles";

interface IIconsRightProps {
  title: string;
  icon: string | any;
  iconColor?: string;
}

export const IconText = ({
  title,
  icon,
  iconColor = theme.colors.white,
}: IIconsRightProps) => {
  return (
    <S.Container>
      <Feather name={icon} size={24} color={iconColor} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
