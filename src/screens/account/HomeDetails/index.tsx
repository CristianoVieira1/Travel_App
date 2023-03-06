import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { useTheme } from "styled-components";
import Header from "../../../components/Header";
import { IconsRight } from "../../../components/IconsRight";
import Offers from "../../../components/Offers";
import ScreenView from "../../../components/ScreenView";
import * as S from "./styles";
interface IProps {
  route: RouteProp<
    {
      params: {
        item?: {
          id: string;
          image: string;
          state: string;
        };
      };
    },
    "params"
  >;
}

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const HomeDetails = (props: IProps) => {
  const theme = useTheme();

  return (
    <ScreenView statusbarColor="light">
      <S.Container>
        <Header
          color={theme.colors.white}
          isIconMenu={false}
          isIconBack={true}
          isMenu={false}
        />

        <S.TextView>
          <S.Title>{props.route.params.item?.state}</S.Title>
        </S.TextView>
      </S.Container>
      <S.Content>
        <Offers />
      </S.Content>
      <ImageBackground
        source={{ uri: props.route.params.item?.image }}
        resizeMode="stretch"
        style={[
          StyleSheet.absoluteFillObject,
          { overflow: "hidden", zIndex: -1 },
        ]}
      >
        <S.ViewPicture />
      </ImageBackground>
      <IconsRight image={props.route.params.item?.image} />
    </ScreenView>
  );
};

export default HomeDetails;
