import styled from "styled-components/native";

interface Ifocused {
  focused: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const Title = styled.Text<Ifocused>`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, focused }) =>
    focused ? theme.colors.darkGray : theme.colors.backgroundOpacity};
  margin-left: 20px;
  width: 70%;
`;

export const Bullet = styled.View<Ifocused>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ focused, theme }) =>
    focused ? theme.colors.backgroundOpacity : theme.colors.backgroundOpacity};
`;
