/** generated by chat-gpt */
import { act, renderHook } from "@testing-library/react";
import { useLevel } from "./useLevel";

describe("useLevel", () => {
  it("should return correct word length for easy level", () => {
    const { result } = renderHook(() => useLevel());

    act(() => {
      const easyLevelWordLength = result.current.getWordLength("Easy");
      expect(easyLevelWordLength).toEqual({ minLength: 3, maxLength: 5 });
    });
  });

  it("should return correct word length for normal level", () => {
    const { result } = renderHook(() => useLevel());

    act(() => {
      const normalLevelWordLength = result.current.getWordLength("Normal");
      expect(normalLevelWordLength).toEqual({ minLength: 5, maxLength: 10 });
    });
  });

  it("should return correct word length for hard level", () => {
    const { result } = renderHook(() => useLevel());

    act(() => {
      const hardLevelWordLength = result.current.getWordLength("Hard");
      expect(hardLevelWordLength).toEqual({ minLength: 10, maxLength: 20 });
    });
  });
});