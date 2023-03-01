import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  height: 56px;
  background-color: ${({ theme }) => theme.colors.opacityBlack};
  position: absolute;
  bottom: 32px;
  align-self: center;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 0 16px;
`;

export const Content = styled(Animated.View)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const IconView = styled(Animated.View)``;

export const Porcentagem = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-right: 7px;
`;
export const Traker = styled.View`
  flex: 1;
  height: 3px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const Progress = styled.View`
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
