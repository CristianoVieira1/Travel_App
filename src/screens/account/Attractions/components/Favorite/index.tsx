import { ListRenderItem } from "react-native";
import CardFavorite, { CardFavoriteSchema } from "./CardFavorite";
import * as S from "./styles";

export const Favorite = () => {
  const Data: CardFavoriteSchema[] = [
    {
      id: 1,
      title: "Orla do Guaíba",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/orla.jpeg?alt=media&token=c24385db-2eca-4218-8bb2-f21e61e53e1c",
    },
    {
      id: 2,
      title: "Parque Farroupilha",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/parque-farroupilha.jpeg?alt=media&token=2fa87eb1-4cc2-4c6f-9838-beee546f7622",
    },
    {
      id: 3,
      title: "Arena do Grêmio",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/arena-gremio.jpeg?alt=media&token=4d4cd473-a7c8-4fea-bf1e-4d3365a3b0b7",
    },
    {
      id: 4,
      title: "Estádio Beira Rio",
      image:
        "https://firebasestorage.googleapis.com/v0/b/travel-e09be.appspot.com/o/beira-rio.jpeg?alt=media&token=688dab4f-c057-4f6e-a6ea-29a94debf189",
    },
  ];
  const renderOffer: ListRenderItem<CardFavoriteSchema> = ({ item }) => {
    return <CardFavorite {...item} />;
  };

  return (
    <>
      <S.Content>
        <S.Container>
          <S.TextView>
            <S.Title>Mais visitados</S.Title>
          </S.TextView>
        </S.Container>
        <S.Offers
          horizontal
          data={Data}
          renderItem={renderOffer}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(offer) => offer.id.toString()}
        />
      </S.Content>
    </>
  );
};
