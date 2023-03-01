import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 0 10px;
`;

export const Content = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.white};
`;
