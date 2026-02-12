/*
 * Equipments.tsx
 * 장비창 컴포넌트
 * Item들 있음
 * 각 Item 누르면 나오는 EquipUI도 포함
 */

import './Equipments.css'
import Item from './Item.tsx';
import EquipUI from "./EquipUI.tsx";
import {useEquipmentsStore} from "../store/EquipmentsStore.ts";

export default function Equipments() {
    const items = useEquipmentsStore((state) => state.equippedItems);

    return (
        <div>
            {/* 장비창 */}
            <table className="equipments-container">
                <tbody>
                {items.map((row, i) => //각 줄에 대해
                    <tr key={i}>
                        {row.map((item, j) => //각 아이템에 대해
                            <td key={j}>
                                {item
                                    ? <Item
                                        itemData={item}
                                        position={{i: i, j: j}}
                                    />
                                    : null
                                }
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
            {/* 장비 변경 UI */}
            <EquipUI/>
        </div>
    );
}
