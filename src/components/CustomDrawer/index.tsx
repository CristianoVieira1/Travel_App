import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import HeaderTitle from "./components/HeaderTitle";
import * as S from "./styles";

const CustomDrawer = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <DrawerContentScrollView>
        <S.Logo />
        <S.Header>
          <S.PhotoContainer>
            <S.Name>opop</S.Name>
          </S.PhotoContainer>
          <S.UserName>lklk</S.UserName>
        </S.Header>
        <S.ContainerDrawerList>
          <HeaderTitle
            title="Visão Geral"
            notIcon
            icon="home"
            alterVisible={() => {
              navigation.navigate("Home");
            }}
          />
          <HeaderTitle
            icon="cash"
            title="Custo"
            visible={true}
            alterVisible={() => {}}
          />
        </S.ContainerDrawerList>
      </DrawerContentScrollView>
      <S.Divider />
      <S.AlterPasswordTouch onPress={() => {}}>
        <Feather name="lock" size={20} color={theme.colors.drawerIcons} />
        <S.TitleAlterPassword> Alterar Senha </S.TitleAlterPassword>
      </S.AlterPasswordTouch>
      {/* <S.ExitTouch onPress={removeSession}>
        <Feather name="power" size={20} color={theme.colors.drawerIcons} />
        <S.TitleExit> Sair </S.TitleExit>
      </S.ExitTouch> */}
    </S.Container>
  );
};

export default CustomDrawer;
