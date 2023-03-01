import { widthPercentageToDP } from "@utils/DeviceResolution";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48,
  },
})`
  width: 100%;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.subtext};
  text-align: center;
  margin: 12px 0 24px;
  padding: 0 ${widthPercentageToDP("15%")}px; ;
`;
