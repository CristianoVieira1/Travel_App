import React, { Fragment, memo } from "react";
import { ListRenderItem } from "react-native";

import Cityes, { CityesSchema } from "./components/Cityes";

import { Divider, Header, LeftHeaderSide, Offers, Title } from "./styles";

const CityesOffersSection = () => {
  const Cityess: CityesSchema[] = [
    {
      id: 1,
      picture:
        "https://www.sperinde.com/lugar-para-viver-bem/wp-content/uploads/2021/03/118356218_360403815125636_7560510197237954508_n.jpg",
      title: "Porto Alegre",
      description: "Capital",
    },
    {
      id: 2,
      title: "Gramado",
      picture:
        "https://www.correiodopovo.com.br/image/policy:1.467720:1597869346/neve_2013_halder_ramos.jpg.jpg?a=2%3A1&$p$a=9963577",
      description: "Serra Gaúcha",
    },
    {
      id: 3,
      picture:
        "https://www.gramadooficial.com.br/wp-content/uploads/2022/06/A-imponencia-da-Catedral-de-Pedra-de-Canela_RS-scaled.jpg",
      title: "Canela",
      description: "Serra Gaúcha",
    },
    {
      id: 4,
      picture: "https://www.guiadoturismobrasil.com/up/img/1631650079.jpg",
      title: "Bento Gonsalves",
      description: "Serra Gaúcha",
    },
    {
      id: 5,
      picture: "https://www.guiadoturismobrasil.com/up/img/1445594092.jpg",
      title: "Garibalde",
      description: "Serra Gaúcha",
    },
    {
      id: 6,
      picture:
        "https://torres.rs.gov.br/wp-content/uploads/2018/04/torres-6.jpg",
      title: "Torres",
      description: "Litoral Gaúcho",
    },
  ];

  const renderOffer: ListRenderItem<CityesSchema> = ({ item }) => {
    return <Cityes {...item} />;
  };

  return (
    <Fragment>
      <Divider />

      <Header>
        <LeftHeaderSide>
          <Title>Cidades do Rio Grande do Sul</Title>
        </LeftHeaderSide>
      </Header>

      <Offers
        horizontal
        data={Cityess}
        renderItem={renderOffer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(offer) => offer.id.toString()}
      />
    </Fragment>
  );
};

export default memo(CityesOffersSection);
