import styled from "styled-components/native";
import { heightPercentageToDP } from "../../../utils/DeviceResolution";

export const Container = styled.View`
  padding: 24px;
`;

export const Content = styled.View`
  padding-top: ${heightPercentageToDP("5%")}px;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  font-size: 18px;
  margin: ${({ theme }) => theme.spacings.xxsmall};
`;

export const Form = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-top: ${heightPercentageToDP("2%")}px;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 5px 15px;
`;
