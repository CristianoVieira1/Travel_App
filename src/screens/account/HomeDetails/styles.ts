import styled from "styled-components/native";
import { heightPercentageToDP } from "../../../utils/DeviceResolution";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 24px;
`;

export const Content = styled.View`
  bottom: ${heightPercentageToDP("50%")}px;
  z-index: 5;
`;

export const Title = styled.Text`
  top: ${heightPercentageToDP("10%")}px;
  width: 60%;
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
  font-family: ${({ theme }) => theme.fonts.aliceMedium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 40px;
  text-align: left;
`;

export const TextView = styled.View`
  padding: 0 24px;
`;

export const ViewPicture = styled.View`
  flex: 1;
  background-color: "rgba(0,0,0,0.5)";
  z-index: 1;
`;
