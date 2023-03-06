import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Background = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkGray};
  justify-content: center;
`;
