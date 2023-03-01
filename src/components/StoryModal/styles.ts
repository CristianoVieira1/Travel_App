import styled from "styled-components/native";
import { heightPercentageToDP } from "../../utils/DeviceResolution";

export const ModalBackground = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Container = styled.View`
  padding: ${heightPercentageToDP("8%")}px 0;
`;

export const TextView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  margin-bottom: ${heightPercentageToDP("5%")}px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 26px;
  text-align: justify;
`;

export const Header = styled.View`
  padding: 20px;
`;

export const Image = styled.Image`
  border-radius: 20px;
  width: 80%;
  height: 60px;
`;
