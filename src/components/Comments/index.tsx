import HeatIcon from "@assets/icons/heat.svg";
import { Feather } from "@expo/vector-icons";
import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { useSession } from "../../context/Session";
import { InputComments } from "./components/InputComments";

import * as S from "./styles";

export interface ICommentsProps {
  isVisible?: boolean;
  onClose: () => void;
  onAction: () => void;
}

export const TestIds: { [key: string]: string } = {
  rootView: "Comments/rootView",
};

const Comments = (props: ICommentsProps) => {
  const { session } = useSession();
  const { onClose, isVisible, onAction } = props;
  const scrollRef = useRef<ScrollView>(null);

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
        <S.ContComments>110 comentários</S.ContComments>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <S.Scroll
            ref={scrollRef}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <S.Content>
              <S.CommentView>
                <S.User>
                  <S.UserImage>
                    {session?.user?.photo ? (
                      <S.Image source={{ uri: session.user.photo }} />
                    ) : (
                      <Feather name="user" size={24} color="white" />
                    )}
                  </S.UserImage>
                  <S.Name>Jhow Jhon</S.Name>
                </S.User>
                <S.LikeView>
                  <HeatIcon width={20} height={20} />
                  <S.Like>116</S.Like>
                </S.LikeView>
              </S.CommentView>
            </S.Content>
          </S.Scroll>
          <S.InputArea>
            <InputComments />
          </S.InputArea>
        </KeyboardAvoidingView>
      </S.ModalBackground>
    </Modal>
  );
};

export default Comments;
