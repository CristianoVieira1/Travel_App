import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.iconColor};
  opacity: 0.7;
  margin-top: 3px;
`;
