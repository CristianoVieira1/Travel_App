import FaceHearts from "@assets/icons/emojis/face-hearts.svg";
import GrinningFace from "@assets/icons/emojis/grinning-face.svg";
import HeartEyes from "@assets/icons/emojis/heart-eyes.svg";
import Heppy from "@assets/icons/emojis/heppy.svg";
import Kiss from "@assets/icons/emojis/kiss.svg";
import HeartRed from "@assets/icons/emojis/red-heart.svg";
import SmilingFace from "@assets/icons/emojis/smiling-face.svg";
import React from "react";
import * as S from "./styles";

export const Emojis = () => {
  return (
    <S.Container>
      <SmilingFace width={24} height={24} />
      <HeartRed width={24} height={24} />
      <HeartEyes width={24} height={24} />
      <GrinningFace width={24} height={24} />
      <FaceHearts width={24} height={24} />
      <Kiss width={24} height={24} />
      <Heppy width={24} height={24} />
    </S.Container>
  );
};
