import { heightPercentageToDP } from "@utils/DeviceResolution/index";
import styled from "styled-components/native";

export const Form = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${heightPercentageToDP("8%")}px;
`;

export const SociaisButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${heightPercentageToDP("2%")}px;
`;
