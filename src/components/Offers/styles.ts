import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Divider = styled.View`
  height: 1px;
  margin: 24px 24px 0;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  margin: 12px 24px 12px;
`;

export const LeftHeaderSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Offers = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 48,
    paddingVertical: 12,
    alignItems: "center",
  },
})`` as unknown as typeof FlatList;
