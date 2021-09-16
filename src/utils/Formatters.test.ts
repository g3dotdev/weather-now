import { formatUnixTime } from "./Formatters";

describe("Formatters", () => {
  test("Format UNIX timestamp to locale date", () => {
    const data = formatUnixTime(1631760111);

    expect(data).toBe("9:16:00 PM");
  });
});
