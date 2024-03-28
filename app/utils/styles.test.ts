/** generated by chat-gpt */
import { toPixel } from "./styles";

describe("toPixel", () => {
  it("should return undefined when input is undefined", () => {
    expect(toPixel(undefined)).toBe(undefined);
  });

  it("should add px to the end when input is a number", () => {
    expect(toPixel(20)).toBe("20px");
    expect(toPixel(0)).toBe("0px");
  });

  it("should return the input as is when it already ends with px or %", () => {
    expect(toPixel("20px")).toBe("20px");
    expect(toPixel("20%")).toBe("20%");
  });

  it("should add px to the end when input is a string not ending with px or %", () => {
    expect(toPixel("20")).toBe("20px");
    expect(toPixel("0")).toBe("0px");
  });

  it("should handle negative numbers correctly", () => {
    expect(toPixel(-20)).toBe("-20px");
  });

  it("should handle decimal numbers correctly", () => {
    expect(toPixel(20.5)).toBe("20.5px");
  });

  it("should handle negative decimal numbers correctly", () => {
    expect(toPixel(-20.5)).toBe("-20.5px");
  });

  it("should handle strings representing negative numbers correctly", () => {
    expect(toPixel("-20")).toBe("-20px");
  });

  it("should handle strings representing decimal numbers correctly", () => {
    expect(toPixel("20.5")).toBe("20.5px");
  });

  it("should handle strings representing negative decimal numbers correctly", () => {
    expect(toPixel("-20.5")).toBe("-20.5px");
  });

  it("should return 0px when it is an empty string", () => {
    expect(toPixel("")).toBe("0px");
  });
});
