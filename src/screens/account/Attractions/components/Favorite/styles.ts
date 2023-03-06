import { FlatList } from "react-native";
import styled from "styled-components/native";
import { heightPercentageToDP } from "../../../../../utils/DeviceResolution";

export const Container = styled.View`
  width: 100%;
  bottom: 100%;
  position: absolute;
`;

export const Content = styled.View`
  bottom: ${heightPercentageToDP("1%")}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 22px;
  text-align: left;
  opacity: 0.7;
`;

export const TextView = styled.View`
  padding: 0 24px;
`;

export const Offers = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 48,
    paddingVertical: 12,
    alignItems: "center",
  },
})`` as unknown as typeof FlatList;
