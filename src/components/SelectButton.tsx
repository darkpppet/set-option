/*
 * SelectButton.tsx
 * SettingUI 안의 아이템 선택 버튼들 컴포넌트
 * 누르면 해당 아이템을 장착
 */

import type { ItemData } from '../assets/Parts'
import type {ChangeSettingUIType} from '../assets/ChangeSettingUIType';
import getColor from '../assets/getColor'
import './SelectButton.css'

export default function SelectButton(props: {
    itemData: ItemData, //해당 아이템 정보
    setItemData: (e: ItemData) => void, //해당 아이템 setter
    activateSettingUI: ChangeSettingUIType, //SettingUI 활성화/비활성화 함수
    selected: boolean, //이미 선택되었는지 여부
    disabled: boolean //비활성화 여부
}) {
    //아이템 세트에 따라 배경 색깔 정함
    const backgroundColorStyle : React.CSSProperties = {
        backgroundColor: getColor(props.itemData)
    };

    //선택한 아이템의 정보 제출하는 함수; 버튼의 onClick에 바인딩
    const submit = (): void => {
        props.setItemData(props.itemData);
        props.activateSettingUI(false);
    }

    //dieabled=true면 회색으로 비활성화처럼 표시하는 layer 
    const grayLayer = props.disabled ? <div className="gray-layer"></div> : <></>;

    //이미 장착된 아이템일 경우 체크 그림 
    const checkMark = props.selected ? <div className="check-mark">✔</div>: <></>;

    return (
        <button
            className="item-selector-container"
            onClick={submit}
            style={backgroundColorStyle}
            disabled={props.disabled}
        >
            {/* 아이템 이미지 */}
            <img src={props.itemData.imgSrc} className="select-button-img"></img>
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
                    <span>{props.itemData.isOnlyOneEquipped ? "[고유장착 아이템] " : ""}</span>
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
