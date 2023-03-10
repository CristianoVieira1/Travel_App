import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function FooterButton({ title, icon, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons name={icon} size={24} color={theme.colors.primary} />
      <Title>{title}</Title>
    </Container>
  );
}
