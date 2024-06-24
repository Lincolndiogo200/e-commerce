import { it, test, expect } from "vitest";
import { format } from "./format.number";

test("converting", () => {
  const numberFormat = format(5);
  expect(numberFormat).toBe("R$ 5.00");
});
