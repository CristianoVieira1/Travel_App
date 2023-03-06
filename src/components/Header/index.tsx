import { LogoutButton } from "@components/Controllers/LogoutButton";
import { useSession } from "@context/Session";
import { Feather } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import { RefreshControl } from "react-native";
import LocalStorage from "../../persistence/LocalStorage";
import theme from "../../theme";
import * as S from "./styles";

interface IProps {
  isIconBack?: boolean;
  colorIconBack?: "white" | "black";
  statusBar?: "light" | "dark";
  isIconMenu?: boolean;
  color?: string;
  isImage?: boolean;
  isLogount?: boolean;
  title?: string;
  isTitle?: boolean;
  isMenu?: boolean;
}

const Header = ({
  isIconBack = true,
  isTitle = false,
  title,
  colorIconBack = "white",
  statusBar = "light",
  isImage = false,
  isLogount = false,
  isMenu = false,
  color = theme.colors.white,
}: IProps) => {
  const { session, removeSession, setSession } = useSession();
  const navigation = useNavigation();

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  async function handleSignOut() {
    auth().signOut();
    removeSession();
    await LocalStorage.clean();
    setSession((prevSession) => ({
      ...prevSession,
      autenticated: false,
    }));
  }
  return (
    <S.Container>
      <StatusBar style={statusBar} translucent backgroundColor="transparent" />
      <S.Content>
        {isMenu && (
          <Feather
            name="menu"
            size={26}
            color={color}
            style={{ left: 0, position: "absolute" }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        )}

        {isIconBack && (
          <Feather
            name="chevrons-left"
            size={26}
            color={colorIconBack}
            style={{ left: 0, position: "absolute" }}
            onPress={() => navigation.goBack()}
          />
        )}
        {isTitle && (
          <S.TitleArea>
            <S.Title>{title}</S.Title>
          </S.TitleArea>
        )}

        {isImage ? (
          <S.UserProfile onPress={handleSignOut}>
            <S.UserImage onPress={() => handleProfile()}>
              {session?.user?.photo ? (
                <>
                  <S.Image source={{ uri: session.user.photo }} />
                  {/* <S.UserName>{session.user.name ? undefined : ""}</S.UserName> */}
                </>
              ) : (
                <>
                  <Feather name="camera" size={24} color="white" />
                  {/* <S.UserName>{session.user.name ? undefined : ""}</S.UserName> */}
                </>
              )}
            </S.UserImage>
          </S.UserProfile>
        ) : (
          <S.NotImage></S.NotImage>
        )}

        {isLogount && <LogoutButton onPress={handleSignOut} />}
      </S.Content>
    </S.Container>
  );
};

export default Header;
