import { formatUnixTime } from "./Formatters";

describe("Formatters", () => {
  test("Format UNIX timestamp to locale date", () => {
    const data = formatUnixTime(1631767504);

    expect(data).toBe("1:45:04 AM");
  });
});
