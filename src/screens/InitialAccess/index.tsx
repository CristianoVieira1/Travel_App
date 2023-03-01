import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import LogoIcon from "@assets/icons/logo_text.svg";
import Background from "@assets/images/background_initial_access.png";

import Button from "@components/Button";
import LocalStorage from "../../persistence/LocalStorage";
import * as S from "./styles";

const screenHeight = (Dimensions.get("window").height * 80) / 70;
const screenWidth = Dimensions.get("window").width;

export const InitialAccess = () => {
  const navigation = useNavigation();

  useEffect(() => {
    clenHost();
  }, []);

  async function clenHost() {
    await LocalStorage.cleanOnboard();
  }

  return (
    <>
      <S.BackgroundImg>
        <ImageBackground
          source={Background}
          resizeMode="stretch"
          style={styles.img}
        />
      </S.BackgroundImg>
      <S.Container>
        <Animatable.View delay={2000} animation="fadeInLeft">
          <S.TopSide>
            <LogoIcon />
          </S.TopSide>
        </Animatable.View>

        <S.BottomSide>
          <Animatable.View delay={1200} animation="fadeIn">
            <S.Title>Bem vindo!</S.Title>
            <S.LoginInButton onPress={() => navigation.navigate("SignIn")}>
              <S.Description>Faça seu login!</S.Description>
            </S.LoginInButton>
          </Animatable.View>
        </S.BottomSide>

        <S.Wrapper>
          <Animatable.View delay={2500} animation="fadeInUp">
            <S.RegisterButton>
              <Button
                type="link"
                title="Ainda não tem conta? Registrar"
                size="large"
                onPress={() => navigation.navigate("Register")}
              />
            </S.RegisterButton>
          </Animatable.View>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default InitialAccess;

const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
