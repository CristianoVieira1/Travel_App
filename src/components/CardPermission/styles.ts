import styled from "styled-components/native";
import { widthPercentageToDP } from "../../utils/DeviceResolution";

export const Container = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  align-items: center;
`;

export const Card = styled.View`
  padding: ${({ theme }) => theme.spacings.xlarge} 24px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  line-height: 36px;
  text-align: center;
  padding-top: ${widthPercentageToDP("10%")}px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-family: ${({ theme }) => theme.fonts.aliceMedium};
`;

export const Description = styled.Text`
  line-height: 26px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  opacity: 0.7;
`;

interface Button {
  disabled: boolean;
}

export const ButtonArea = styled.View`
  margin-top: ${widthPercentageToDP("5%")}px;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const SubmitButton = styled.TouchableOpacity<Button>`
  width: 300px;
  height: 70px;
  margin-top: 4px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.buttonDisable : theme.colors.orange};
`;

export const SubmitText = styled.Text`
  font-weight: 800;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
`;
