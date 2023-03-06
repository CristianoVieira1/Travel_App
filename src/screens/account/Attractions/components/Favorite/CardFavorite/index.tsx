import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";

import { ImageBackground, StyleSheet } from "react-native";
import * as S from "./styles";
export interface CardFavoriteSchema {
  id: number;
  title: string;
  image: any;
  onPress?: () => void;
}

const CardFavorite = (props: CardFavoriteSchema) => {
  const navigation = useNavigation();
  const { title, image, onPress } = props;

  return (
    <S.Container>
      <S.Content onPress={() => {}}>
        <S.PictureArea>
          <ImageBackground
            source={{ uri: image }}
            resizeMode="cover"
            style={[
              StyleSheet.absoluteFillObject,
              {
                overflow: "hidden",
                zIndex: -1,
                borderRadius: 12,
                width: 150,
                height: 170,
              },
            ]}
          >
            <S.ViewPicture />
          </ImageBackground>
        </S.PictureArea>
        <S.Details>
          <S.Title>{title}</S.Title>
        </S.Details>
      </S.Content>
    </S.Container>
  );
};

export default memo(CardFavorite);
