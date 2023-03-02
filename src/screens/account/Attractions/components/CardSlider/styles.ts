import { Animated, Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${({ theme }) => theme.device.width * 0.7};
`;

export const ImageCard = styled(Animated.View)`
  margin: 0 ${({ theme }) => theme.spacings.xsmall};
  padding: ${({ theme }) => theme.spacings.xsmall};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  align-items: center;
`;

export const ImageBg = styled(Image).attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: ${({ theme }) => theme.device.width * 0.7};
  border-radius: 14px;
  margin-bottom: ${({ theme }) => theme.spacings.xsmall};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.darkGray};
`;
