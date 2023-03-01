import Header from "@components/Header";
import ScreenView from "@components/ScreenView";
import { useSession } from "@context/Session";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { UserEditForm } from "../../../components/Forms/UserEditForm";
import * as S from "./styles";

export const Setings = () => {
  const { session } = useSession();

  return (
    <ScreenView statusbarColor="dark">
      <Header isTitle title="Configurações" />
      <S.Container>
        <S.Content>
          <S.UserImage>
            {session?.user?.photo ? (
              <>
                <S.Image source={{ uri: session.user.photo }} />
                <S.Title>User</S.Title>
                {/* <S.UserName>{session.user.name ? undefined : ""}</S.UserName> */}
              </>
            ) : (
              <>
                <Feather name="camera" size={24} color="white" />
                {/* <S.UserName>{session.user.name ? undefined : ""}</S.UserName> */}
              </>
            )}
          </S.UserImage>
          <S.Title>Cristiano</S.Title>
        </S.Content>
        <S.Form>
          <UserEditForm />
        </S.Form>
      </S.Container>
    </ScreenView>
  );
};
