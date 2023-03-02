import * as S from "./styles";

interface ICardSliderProps {
  image: string;
  title: string;
  scrollY: any;
}

export const CardSlider = ({ image, title, scrollY }: ICardSliderProps) => {
  return (
    <S.Container>
      <S.ImageCard
        style={{
          transform: [{ translateY: scrollY }],
        }}
      >
        <S.ImageBg source={{ uri: image }} />
        <S.Title>{title}</S.Title>
      </S.ImageCard>
    </S.Container>
  );
};
