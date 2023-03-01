import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.iconColor};
  opacity: 0.7;
  margin-left: 10px;
`;
