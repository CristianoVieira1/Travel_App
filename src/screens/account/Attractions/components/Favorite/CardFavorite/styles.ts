import styled from "styled-components/native";
import THEME from "../../../../../../theme";

export const Container = styled.View.attrs({
  shadowOpacity: 0.2,
  shadowOffset: { height: 3 },
  shadowColor: THEME.colors.black,
})`
  elevation: 6;
  width: 150px;
  height: 170px;
  margin-right: 12px;
  border-radius: 6px;
`;

export const Content = styled.TouchableOpacity``;

export const Details = styled.View`
  bottom: 0;
  padding: 0 14px;
  padding-bottom: 120px;
  position: absolute;
  justify-content: flex-start;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 3,
  ellipsizeMode: "tail",
})`
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

export const PictureArea = styled.View`
  align-items: center;
  justify-content: center;
  width: 183px;
  height: 280px;
  position: relative;
`;

export const ViewPicture = styled.View`
  flex: 1;
  background-color: "rgba(0,0,0,0.3)";
  z-index: 1;
`;
