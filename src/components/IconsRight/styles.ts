import styled from "styled-components/native";
import { heightPercentageToDP } from "../../utils/DeviceResolution";

export const Container = styled.View`
  position: absolute;
  z-index: 99999999;
  flex-direction: column;
  justify-content: space-between;
  height: ${heightPercentageToDP("30%")}px;
  right: 10px;
  top: ${heightPercentageToDP("20%")}px;
`;

export const IconView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.iconColor};
  opacity: 0.7;
`;
