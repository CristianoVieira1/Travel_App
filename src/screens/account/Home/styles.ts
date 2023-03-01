import { heightPercentageToDP } from "@utils/DeviceResolution";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-top: ${heightPercentageToDP("8%")}px;
  padding-bottom: ${heightPercentageToDP("1%")}px;
`;

export const Space = styled.View`
  padding-top: ${heightPercentageToDP("3%")}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  padding-left: ${heightPercentageToDP("1%")}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 24px 10px;
`;

export const Wrapper = styled.View`
  padding-top: ${heightPercentageToDP("1%")}px;
`;

export const ImageBackground = styled.ImageBackground`
  z-index: -1;
`;
