import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  height: ${({ theme }) => theme.device.height * 0.5};
  top: 0;
  width: ${({ theme }) => theme.device.width};
`;

export const Image = styled(Animated.Image)`
  width: ${({ theme }) => theme.device.width};
  height: ${({ theme }) => theme.device.height * 0.5};
  opacity: 0.2;
`;

export const Linear = styled(LinearGradient)`
  width: ${({ theme }) => theme.device.width};
  height: ${({ theme }) => theme.device.height * 0.5};
  position: absolute;
  bottom: 0;
`;
