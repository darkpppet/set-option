/* 
 * Item.tsx
 * 장비창의 각 아이템들 컴포넌트
 * 장착중인 아이템 정보 표시
 * 누르면 Equipments에서 EquipUI 나옴
 */

import * as React from "react";
import './Item.css'
import type {Position} from "../types/Position.ts";
import type {ItemData} from "../types/Item.ts";
import {getColor} from "../assets/Color.ts";
import {useEquipmentsStore} from "../store/EquipmentsStore.ts";
import {useEquipUIStore} from "../store/EquipUIStore.ts";

export default function Item(props: {
    itemData: ItemData, //해당 아이템 정보
    position: Position //인덱스
}) {
    //비활성화 여부; 상의가 한벌옷일 때 하의가 비활성화
    const disabled = useEquipmentsStore((state) => {
        return props.itemData.partsType === "하의" && state.equippedItems[3][2]?.isOverall
    });

    //SettingUI 여는 함수; onClick에 바인딩
    const openEquipUI = (e: React.MouseEvent) => {
        useEquipUIStore.getState().open(props.position, {x: e.pageX, y: e.pageY});
    };

    //아이템 세트에 따른 배경 색깔
    const colorStyle = {
        backgroundColor: disabled ? 'White' : getColor(props.itemData)
    };

    //아이템 이름 길이에 따른 글씨 크기
    const getFontSizeStyle = () => {
        const nameLength = props.itemData.name.length;

        if (nameLength > 12) {
            return {fontSize: 8};
        }
        if (nameLength > 11) {
            return {fontSize: 9};
        }
        if (nameLength > 9) {
            return {fontSize: 10};
        }
        return {fontSize: 12};
    }

    //disabled면 붉은색, 세트가 없는데 럭키 아니면 회색 layer
    const renderColorLayer = () => {
        if (disabled) {
            return <div className="red-layer"></div>;
        }

        if (!props.itemData.setName && !props.itemData.isLuckyItem) {
            return <div className="light-gray-layer"></div>;
        }

        return <></>
    };

    return (
        <button className="item-button" onClick={openEquipUI} style={colorStyle}>
            {/* 아이템 이미지 */}
            <img src={props.itemData.imgSrc} className="item-img" alt="이미지"></img>
            {/* 아이템 부위 */}
            <h3 className="item-parts-type">{props.itemData.partsType}</h3>
            {/* 아이템 이름 */}
            <p className="item-name" style={getFontSizeStyle()}>{props.itemData.name}</p>
            {/* 비활성화 빨강, 노세트 회색 레이어 */}
            {renderColorLayer()}
        </button>
    );
}
