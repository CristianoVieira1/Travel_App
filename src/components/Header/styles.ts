import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.spacings.xlarge};
  z-index: 2;
  padding: 10px;
`;
export const Content = styled.View`
  padding: 10px ${({ theme }) => theme.spacings.xlarge};
  flex-direction: row;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacings.xxsmall};
`;

export const TitleArea = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;

export const UserImage = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const UserProfile = styled.TouchableOpacity`
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top: ${({ theme }) => theme.spacings.medium};
`;

export const NotImage = styled.View`
  width: 50px;
  height: 50px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.3;
`;
