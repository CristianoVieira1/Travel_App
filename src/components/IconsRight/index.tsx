import React, { useState } from "react";
import Chat from "../../assets/icons/tab/chat.svg";
import Heart from "../../assets/icons/tab/heart_tab.svg";
import Share from "../../assets/icons/tab/share.svg";
import Story from "../../assets/icons/tab/story.svg";
import Comments from "../Comments";
import { IconView } from "../IconView";
import StoryModal from "../StoryModal";
import * as S from "./styles";

interface IIconsRightProps {
  image?: string;
}

export const IconsRight = ({ image }: IIconsRightProps) => {
  const [storyOpenModal, setStoryOpenModal] = useState(false);
  const [commentsOpenModal, setCommentsOpenModal] = useState(false);

  function handleModalStory() {
    setStoryOpenModal(!storyOpenModal);
  }

  function handleModalComments() {
    setCommentsOpenModal(!commentsOpenModal);
  }

  return (
    <S.Container>
      <IconView title="1.2k" icon={Heart} />
      <IconView
        title="História"
        icon={Story}
        onPress={() => handleModalStory()}
      />
      <IconView title="300" icon={Chat} onPress={() => handleModalComments()} />
      <IconView title="1.3k" icon={Share} />

      <StoryModal
        image={image}
        onAction={() => {}}
        onClose={() => handleModalStory()}
        isVisible={storyOpenModal}
      />

      <Comments
        onAction={() => {}}
        onClose={() => handleModalComments()}
        isVisible={commentsOpenModal}
      />
    </S.Container>
  );
};
