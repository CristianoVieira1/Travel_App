import DrawerImageCost from "@assets/icons/icon-password.svg";
import styled from "styled-components/native";

interface IHeaderTitleProps {
  visible: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const Title = styled.Text<IHeaderTitleProps>`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, visible }) =>
    visible ? theme.colors.darkGray : theme.colors.primary};
  margin-left: 15px;
  width: 50%;
`;

export const IconView = styled.View`
  margin-left: 20px;
`;

export const IconCost = styled(DrawerImageCost)`
  margin-left: 0px;
  width: 5px;
`;
