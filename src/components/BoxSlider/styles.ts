import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 280px;
  height: 360px;
  margin: 0 10px;
`;

export const Title = styled.Text`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: ${({ theme }) => theme.fonts.sizes.xxlarge};
  font-family: ${({ theme }) => theme.fonts.aliceMedium};
  color: ${({ theme }) => theme.colors.white};
  line-height: 40px;
  z-index: 99999;
`;
