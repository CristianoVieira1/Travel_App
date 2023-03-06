import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";

import { ImageBackground, StyleSheet } from "react-native";
import * as S from "./styles";
export interface CityesSchema {
  id: number;
  title: string;
  picture: any;
  description: string;
  onPress?: () => void;
}

const Cityes = (props: CityesSchema) => {
  const navigation = useNavigation();
  const { title, picture, description, onPress } = props;

  return (
    <S.Container>
      <S.Content onPress={() => navigation.navigate("Attractions")}>
        <S.PictureArea>
          <ImageBackground
            source={{ uri: picture }}
            resizeMode="cover"
            style={[
              StyleSheet.absoluteFillObject,
              { overflow: "hidden", zIndex: -1, borderRadius: 12 },
            ]}
          >
            <S.ViewPicture />
          </ImageBackground>
        </S.PictureArea>
        <S.Details>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Details>
      </S.Content>
    </S.Container>
  );
};

export default memo(Cityes);
