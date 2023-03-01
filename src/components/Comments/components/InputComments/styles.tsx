import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 40px;
  bottom: 70px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.placeholderInput,
  fontFamily: theme.fonts.regular,
  padding: 10,
  borderRadius: 10,
  fontSize: 20,
  lineHeight: 20,
}))`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
`;
