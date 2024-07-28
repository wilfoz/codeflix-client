import { useScroll } from "@/app/hooks/useScroll";
import { renderHook, act } from "@testing-library/react";

describe("Scroll", () => {
  it("should respond to scroll events", () => {
    const { result } = renderHook(() => useScroll());
    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBeTruthy();


    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBeFalsy();
  });
});