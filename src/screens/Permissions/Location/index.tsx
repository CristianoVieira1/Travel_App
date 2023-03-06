import React from "react";
import * as Animatable from "react-native-animatable";

import AnimateLocation from "@assets/animations/location.json";

import { Lottie } from "../../../components/Animations/Lottie";
import { CardPermission } from "../../../components/CardPermission";
import * as S from "./styles";
import useLocationViewModel from "./ViewModel/useLocationViewModel";

const LocationPermition = () => {
  const { requestLocationPermissions, isLoading, location } =
    useLocationViewModel();

  return (
    <>
      <S.Container>
        <S.TopSide>
          <Animatable.View delay={2000} animation="fadeInLeft">
            <Lottie source={AnimateLocation} width={400} height={400} />
          </Animatable.View>
        </S.TopSide>
      </S.Container>
      <CardPermission
        title="Acesso a localização"
        description="Para que possamos te ajudar a encontrar os melhores lugares para você, precisamos ter acesso a sua localização."
        onPress={() => requestLocationPermissions()}
        isLoading={isLoading}
      />
    </>
  );
};

export default LocationPermition;
