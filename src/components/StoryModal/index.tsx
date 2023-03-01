import { Feather } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import Modal from "react-native-modal";

import { useTheme } from "styled-components";
import { ProgresssBar } from "../Controllers/ProgresssBar";
import * as S from "./styles";

export interface IStoryModalProps {
  isVisible?: boolean;
  onClose: () => void;
  onAction: () => void;
  image?: string;
}

interface IScrollEvent {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
}

export const TestIds: { [key: string]: string } = {
  rootView: "StoryModal/rootView",
};

const StoryModal = (props: IStoryModalProps) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const { onClose, isVisible, onAction, image } = props;
  const [percentage, setPercentage] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  function scrollPorcentage({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: IScrollEvent) {
    const visibleContent = Math.ceil(
      (dimensions.height / contentSize.height) * 100
    );

    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    setPercentage(value < visibleContent ? 0 : value);
  }

  function handleScrollToTop() {
    scrollRef.current?.scrollTo({ y: 0, x: 0, animated: true });
  }

  return (
    <Modal
      propagateSwipe
      isVisible={isVisible}
      accessibilityHint="Modal de historia"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      animationIn={"slideInUp"}
      onBackButtonPress={onClose}
      animationOut={"slideOutDown"}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      
      <S.ModalBackground>
        <ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={(event) => scrollPorcentage(event.nativeEvent)}
        >
          <S.Container>
            <S.Header>
              <Feather
                name="x"
                size={26}
                color={theme.colors.white}
                onPress={() => onClose()}
              />
            </S.Header>
            <S.ImageContainer>
              <S.Image source={{ uri: image }} />
            </S.ImageContainer>
            <S.TextView>
              <S.Title>Santa Catarina</S.Title>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
              <S.Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </S.Subtitle>
            </S.TextView>
          </S.Container>
        </ScrollView>
        <ProgresssBar value={percentage} onMoveTop={handleScrollToTop} />
      </S.ModalBackground>
    </Modal>
  );
};

export default StoryModal;
