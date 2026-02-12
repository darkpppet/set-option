import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";
import type {Position} from "../types/Position.ts";
import type {ItemData} from "../types/Item.ts";
import type {SetName} from "../types/Set.ts";
import type {SetData} from "../types/SetEffects.ts";
import {SET_NAME_TO_SET_DATA} from "../assets/Data.ts";
import equipmentsObj from '../data/defaultEquipmentsData.json';

type Slot = ItemData | null;

interface Equipments {
    equippedItems: Slot[][];
    changeItem: (pos: Position, item: ItemData) => void;
    reset: () => void;
}

export const useEquipmentsStore = create<Equipments>()(
    immer((set) => ({
        equippedItems: equipmentsObj as Slot[][],

        changeItem: (pos: Position, item: ItemData) =>
            set((state) => {
                state.equippedItems[pos.i][pos.j] = item;
            }),

        reset: () => set({equippedItems: equipmentsObj as Slot[][]}),
    }))
);

interface SetUIData {
    readonly setData: SetData,
    readonly items: readonly ItemData[]
}

export const getSets = (state: Equipments) => {
    const sets = new Map<SetName, ItemData[]>;

    const isEquipOverall = state.equippedItems[3][2]?.isOverall;
    let appliedLuckyItem: ItemData | undefined = undefined;

    for (const row of state.equippedItems) {
        for (const item of row) {
            if (item === null) {
                continue;
            }

            if (item.partsType === '하의' && isEquipOverall) {
                continue;
            }

            if (item.isLuckyItem) {
                const isHighestPriority = !appliedLuckyItem || item.luckyItemPriority! > appliedLuckyItem.luckyItemPriority!;
                if (isHighestPriority) {
                    appliedLuckyItem = item;
                }
            }

            if (item.setName === undefined) {
                continue;
            }

            let set = sets.get(item.setName);
            if (!set) {
                set = [];
                sets.set(item.setName, set);
            }

            set.push(item);
        }
    }

    const setUIData: SetUIData[] = [];
    for (const [setName, items] of sets) {
        const setItems = [...SET_NAME_TO_SET_DATA[setName].items];

        if (appliedLuckyItem && items.length >= 3) {
            for (let i = 0; i < setItems.length; i++) {
                const setItem = setItems[i];
                if (setItem.partsType !== appliedLuckyItem.partsType) {
                    continue;
                }

                if (items.some(i => i.partsType === setItem.partsType)) {
                    continue;
                }

                setItems[i] = appliedLuckyItem;
                items.push(appliedLuckyItem);
                break;
            }
        }

        const setEffects = SET_NAME_TO_SET_DATA[setName].effects;
        for (const key in setEffects) {
            if (items.length >= Number(key)) {
                const tempSetData: SetData = {
                    name: SET_NAME_TO_SET_DATA[setName].name,
                    effects: SET_NAME_TO_SET_DATA[setName].effects,
                    items: setItems,
                }
                setUIData.push({
                    setData: tempSetData,
                    items: items
                })
            }
            break; //첫번째 값만 비교하는거라 ㄱㅊ
        }
    }

    return setUIData;
}