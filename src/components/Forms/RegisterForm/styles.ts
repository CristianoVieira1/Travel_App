import styled from "styled-components/native";

export const Form = styled.View``;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const ViewButton = styled.View`
  z-index: 99999;
`;
