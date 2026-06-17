import { render, renderHook, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
// import Counter from "./Counter"
import userEvent from "@testing-library/user-event";
import { useCounter } from "./useCounter";
import { act } from "react";

describe('Counter Hook', () => {
    it('initial value is 5', () => {
        const { result } = renderHook(() => useCounter(5));
        expect(result.current.count).toBe(5)
    })

    it('increment', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0)

        act(() => {
            result.current.increment();
        })
        expect(result.current.count).toBe(1)
    })
    it('decrement', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0)

        act(() => {
            result.current.decrement();
        })
        expect(result.current.count).toBe(-1)
    })
})