import { heightPercentageToDP } from "@utils/DeviceResolution/index";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const ModalBackground = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 60%;
  border-radius: 16px;
`;

export const Scroll = styled(ScrollView).attrs({})`
  width: 100%;
  height: 500px;
`;

export const ContComments = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.spacings.xsmall} 0;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Content = styled.View`
  flex-direction: column;
  background-color: #deed;
  width: 100%;
  height: 100%;
`;

export const InputArea = styled.View`
  bottom: ${heightPercentageToDP("5%")}px;
  position: absolute;
  width: 100%;
`;

export const UserImage = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const CommentView = styled.View`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.xsmall};
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const NotImage = styled.View`
  width: 50px;
  height: 50px;
`;

export const LikeView = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`;
export const Like = styled.Text``;
