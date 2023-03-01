import ImageLogo from "@assets/icons/logo_icon.svg";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding-top: ${getStatusBarHeight()}px;
`;

export const Logo = styled(ImageLogo)`
  margin-bottom: 30px;
  margin-left: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;

export const PhotoContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 60px;
  height: 60px;
  border-radius: 40px;
`;

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: 15px;
`;

export const ContainerDrawerList = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 10px;
  margin-left: 10px;
`;

export const Divider = styled.View`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.backgroundOpacity};
  margin-top: 10px;
`;

export const AlterPasswordTouch = styled.TouchableOpacity`
  height: 40px;
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleAlterPassword = styled.Text`
  color: ${({ theme }) => theme.colors.backgroundOpacity};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: 15px;
`;

export const ExitTouch = styled.TouchableOpacity`
  height: 40px;
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleExit = styled.Text`
  color: ${({ theme }) => theme.colors.backgroundOpacity};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: 15px;
`;
