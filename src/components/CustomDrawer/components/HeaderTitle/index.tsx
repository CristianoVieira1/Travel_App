import React, { memo } from "react";
import Feather from "react-native-vector-icons/Feather";
import theme from "../../../../theme";
import * as S from "./styles";

interface IHeaderTitleProps {
  title?: string;
  visible?: boolean;
  alterVisible?: () => void;
  notIcon?: boolean;
  icon?: string;
}

function HeaderTitle({
  title,
  visible,
  alterVisible,
  notIcon,
  icon,
}: IHeaderTitleProps) {
  return (
    <S.Container onPress={alterVisible}>
      {title === "Custo" ? (
        <S.IconCost width={25} />
      ) : (
        <></>
        // <MaterialCommunityIcons
        //   name={icon}
        //   size={25}
        //   color={theme.colors.lightGray}
        // />
      )}

      <S.Title visible={true}>{title}</S.Title>
      <S.IconView>
        {!notIcon && (
          <Feather
            name={visible ? "chevron-down" : "chevron-right"}
            size={20}
            color={theme.colors.primary}
          />
        )}
      </S.IconView>
    </S.Container>
  );
}
export default memo(HeaderTitle);
