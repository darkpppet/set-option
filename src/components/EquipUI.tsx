/*
 * EquipUI.tsx
 * Item 버튼 누르면 나오는 세팅 UI
 * 해당하는 부위의 아이템들 중 고를 수 있게 하는 컴포넌트
 */

import * as React from "react";
import './EquipUI.css'
import SelectButton from './SelectButton.tsx'
import {itemsDataGroupedByPartsType} from '../assets/Data'
import {useEquipmentsStore} from "../store/EquipmentsStore.ts";
import {useEquipUIStore} from "../store/EquipUIStore.ts";

export default function EquipUI() {
    //이 컴포넌트의 위치
    const screenPosition = useEquipUIStore((state) => state.screenPosition);
    const positionStyle: React.CSSProperties = {
        left: screenPosition.x,
        top: screenPosition.y
    };

    //이 컴포넌트 닫는 함수; x버튼의 onClick에 바인딩
    const closeUI = useEquipUIStore.getState().close;

    //해당하는 장비칸의 인덱스
    const position = useEquipUIStore((state) => state.position);
    const partsType = useEquipmentsStore((state) => state.equippedItems[position.i][position.j]?.partsType);

    const getPartsTypeName = () => {
        if (partsType === '상의' || partsType === '한벌옷') {
            return '상의/한벌옷';
        }

        return partsType;
    }

    if (useEquipUIStore((state) => !state.isOpen)) {
        return <></>;
    }

    return (
        <div>
            {/* 뒷부분; Item들보단 아래에, 다른애들보단 위에 오도록 추후 구현 */}
            <div className="background-layer" onClick={closeUI}></div>
            {/* 진짜 창 부분 */}
            <div className="setting-ui-container" style={positionStyle}>
                {/* 상단 부분 */}
                <div className="top-bar">
                    {/* 아이템 부위 */}
                    <h2 className="setting-ui-parts-type">{getPartsTypeName()}</h2>
                    {/* 닫기 버튼(x 버튼) */}
                    <button className="close-button" onClick={closeUI}>X</button>
                </div>
                {/* 선택 버튼들 부분 */}
                <div className="select-buttons-container">
                    {partsType && itemsDataGroupedByPartsType[partsType].map((itemData, index) => //해당하는 부위의 아이템들에 대해
                        <SelectButton itemData={itemData} key={index}/>
                    )}
                </div>
            </div>
        </div>
    );
}
