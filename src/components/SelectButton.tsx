/*
 * SelectButton.tsx
 * SettingUI 안의 아이템 선택 버튼들 컴포넌트
 * 누르면 해당 아이템을 장착
 */

import * as React from "react";
import './SelectButton.css'
import type {ItemData} from "../types/Item.ts";
import {getColor} from "../assets/Color.ts";
import {useEquipmentsStore} from "../store/EquipmentsStore.ts";
import {useEquipUIStore} from "../store/EquipUIStore.ts";

export default function SelectButton(props: {
    itemData: ItemData, //해당 아이템 정보
}) {
    const position = useEquipUIStore((state) => state.position); //인덱스
    const items = useEquipmentsStore((state) => state.equippedItems);
    const equippedItem = useEquipmentsStore((state) => state.equippedItems[position.i][position.j]);
    const isSelected = props.itemData.name === equippedItem?.name; //이미 끼고있는건지

    //비활성화 여부
    const getIsDisabled = () => {
        //끼고있는건 비활성화
        if (isSelected) {
            return true;
        }

        //고유장착 아니면 활성화
        if (!props.itemData.isOnlyOneEquipped) {
            return false;
        }

        for (const row of items) {
            for (const item of row) {
                //빈칸
                if (item === null) {
                    continue;
                }

                //고유장착인데 이미 낀거 있음
                if (item.name === props.itemData.name) {
                    return true;
                }

                //이름 다른 고유장착이어도, 상호 교체는 가능
                if (equippedItem?.name === '가디언 엔젤 링' || equippedItem?.name === '여명의 가디언 엔젤 링') {
                    continue;
                }

                //이름 다른데 고유장착인거 처리
                if (item.name === '여명의 가디언 엔젤 링' && props.itemData.name === '가디언 엔젤 링') {
                    return true;
                }
                if (item.name === '가디언 엔젤 링' && props.itemData.name === '여명의 가디언 엔젤 링') {
                    return true;
                }
            }
        }
        return false;
    }

    //아이템 세트에 따라 배경 색깔 정함
    const backgroundColorStyle: React.CSSProperties = {
        backgroundColor: getColor(props.itemData)
    };

    const changeItem = useEquipmentsStore.getState().changeItem;
    const closeEquipUI = useEquipUIStore.getState().close;

    //선택한 아이템의 정보 제출하는 함수; 버튼의 onClick에 바인딩
    const submit = () => {
        changeItem(position, props.itemData);
        closeEquipUI();
    }

    //dieabled=true면 회색으로 비활성화처럼 표시하는 layer 
    const grayLayer = getIsDisabled() ? <div className="gray-layer"></div> : <></>;

    //이미 장착된 아이템일 경우 체크 그림 
    const checkMark = isSelected ? <div className="check-mark">✔</div> : <></>;

    return (
        <button
            className="item-selector-container"
            onClick={submit}
            style={backgroundColorStyle}
            disabled={getIsDisabled()}
        >
            {/* 아이템 이미지 */}
            <img src={props.itemData.imgSrc} className="select-button-img" alt="이미지"></img>
            <span className="select-button-text">
                {/* 아이템 이름 */}
                <p>{props.itemData.name}</p>
                {/* 아이템 정보들 */}
                <p>
                    {/* 세트 이름 */}
                    <span>{props.itemData.setName ? `[${props.itemData.setName}] ` : ""}</span>
                    {/* 럭키아이템 여부 */}
                    <span>{props.itemData.isLuckyItem ? "[럭키 아이템] " : ""}</span>
                    {/* 고유장착 아이템 여부 */}
                    <span>{props.itemData.isOnlyOneEquipped ? "[중복 장착 불가] " : ""}</span>
                    {/* 한벌옷 여부 */}
                    <span>{props.itemData.isOverall ? "[한벌옷] " : ""}</span>
                </p>
            </span>
            {/* 비활성화 회색 레이어 */}
            {grayLayer}
            {/* 체크 그림 */}
            {checkMark}
        </button>
    );
}
