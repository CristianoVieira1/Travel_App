import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export function LogoutButton({ ...rest }: RectButtonProps) {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons name="logout" size={24} color={colors.darkGray} />
    </Container>
  );
}
