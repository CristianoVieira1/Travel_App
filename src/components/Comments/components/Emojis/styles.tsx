import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: ${({ theme }) => theme.spacings.xsmall} 0;
`;
