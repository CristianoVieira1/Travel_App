import { render } from "@testing-library/react-native";
import React from "react";
import Button from "../src/components/Button";
import { withTheme } from "../src/theme/withTheme";

describe("Button", () => {
  it("The component rendered", () => {
    const snapshot = render(
      withTheme(
        <Button
          title="Teste"
          fontSize="medium"
          loading={false}
          size="medium"
          type="accept"
          icon={"home"}
          onPress={() => {}}
        />
      )
    ).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
