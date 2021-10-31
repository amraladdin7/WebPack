import "core-js/stable";
import "regenerator-runtime/runtime";

import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing handling of the form submission", () => {
  test("testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
