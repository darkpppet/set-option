import {create} from "zustand/react";
import type {Position, ScreenPosition} from "../types/Position.ts";

interface EquipUI {
    isOpen: boolean,
    position: Position,
    screenPosition: ScreenPosition,
    open: (position: Position, screenPosition: ScreenPosition) => void,
    close: () => void,
}

export const useEquipUIStore = create<EquipUI>((set) => ({
    isOpen: false,
    position: {i: 0, j: 0},
    screenPosition: {x: 0, y: 0},
    open: (position: Position, screenPosition: ScreenPosition) => set({
        isOpen: true,
        position: position,
        screenPosition: screenPosition
    }),
    close: () => set({isOpen: false})
}));

