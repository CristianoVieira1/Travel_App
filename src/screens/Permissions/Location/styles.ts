import styled from "styled-components/native";
import { widthPercentageToDP } from "../../../utils/DeviceResolution";

export const Container = styled.View`
  flex: 1;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.locationBackground};
`;

export const TopSide = styled.View`
  padding-top: ${widthPercentageToDP("15%")}px;
`;
