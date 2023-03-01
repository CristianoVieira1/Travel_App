import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
`;

export const InsideItemView = styled.View.attrs(({ theme }) => ({
  shadowOpacity: 0.1,
  shadowOffset: { height: 2 },
  shadowColor: theme.colors.black,
}))`
  width: auto;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 200px;
  width: 150px;
  elevation: 4;
  padding: 10px;
  border-radius: 6px;
  margin: 6px 2px 10px 2px;
`;

export const TitleView = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 20px;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.opacityBlack};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ItemView = styled.SafeAreaView`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;

  padding-left: 15px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 150px;
  position: absolute;
  border-radius: 8px;
`;
