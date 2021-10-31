import "core-js/stable";
import "regenerator-runtime/runtime";

import { textCheck } from "../src/client/js/textChecker";

describe("Testing text checker", () => {
  test("testing the textCheck() function", () => {
    expect(textCheck("abcadsadsadasdasdasdasdasdasdadasdasdasd")).toBe(true);
  });
});
