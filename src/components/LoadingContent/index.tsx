import React from "react";
import { DotIndicator } from "react-native-indicators";

import THEME from "../../theme";

interface Props {
  isLoading: boolean;
  loadingColor: string;
  children: JSX.Element;
}

const LoadingContent = ({
  isLoading,
  children,
  loadingColor = THEME.colors.white,
}: Props) => {
  return isLoading ? <DotIndicator size={6} color={loadingColor} /> : children;
};

export default LoadingContent;
