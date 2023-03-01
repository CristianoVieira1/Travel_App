import styled from "styled-components/native";

export const ModalBackground = styled.View`
  border-radius: 26px;
  background-color: transparent;
  /* background-color: ${({ theme }) => theme.colors.white}; */
`;

export const Container = styled.View`
  width: 100%;
`;

export const TextView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 32px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;
