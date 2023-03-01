import Gif from "@assets/icons/gif.svg";
import ImagePicker from "@assets/icons/imagePicker.svg";
import React from "react";
import { Emojis } from "../Emojis";
import * as S from "./styles";

export const InputComments = () => {
  return (
    <S.Container>
      <S.Input
        placeholder="Comente algo legal..."
        numberOfLines={4}
        maxLength={100}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        blurOnSubmit
      />
      <S.Content>
        <Gif width={24} height={24} />
        <ImagePicker
          width={24}
          height={24}
          style={{
            marginLeft: 10,
          }}
        />
      </S.Content>
      <Emojis />
    </S.Container>
  );
};
