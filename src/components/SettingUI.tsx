/*
 * SettingUI.tsx
 * Item 버튼 누르면 나오는 세팅 UI
 * 해당하는 부위의 아이템들 중 고를 수 있게 하는 컴포넌트
 */

import { ItemData } from '../assets/Parts'
import { itemsData } from '../assets/Data'
import ChangeSettingUIType from '../assets/ChangeSettingUIType'
import SelectButton from './SelectButton'
import './SettingUI.css'

export default function SettingUI(props: {
    itemsData: (ItemData | null)[][], //끼고있는 아이템들 데이터
    itemData: ItemData, //해당 아이템 정보
    setItemData: (e: ItemData) => void, //해당 아이템 setter
    activateSettingUI: ChangeSettingUIType //SettingUI 활성화/비활성화 하는 함수
    position: [number, number] //이 컴포넌트의 위치
}) {
    //이 컴포넌트의 위치
    const positionStyle: React.CSSProperties = {
        left: props.position[0],
        top: props.position[1]
    };

    //이 컴포넌트 닫는 함수; x버튼의 onClick에 바인딩
    const closeUI = (): void => {
        props.activateSettingUI(false);
    };

    //이 아이템이 장착되어 있는지 반환하는 함수
    const isSelected = (itemData: ItemData): boolean => (
        itemData.name === props.itemData.name
    );

    //이 아이템을 선택할 수 없는지 반환하는 함수; 이미 장착 or 고유장착이 이미 장착
    const isDisabled = (itemData: ItemData): boolean => (
        isSelected(itemData)
        || ((itemData.isOnlyOneEquipped ? true : false) && props.itemsData.flat().some(x => 
            x?.name === itemData.name
            || (itemData.name === "여명의 가디언 엔젤 링" && x?.name ==="가디언 엔젤 링")
            || (itemData.name === "가디언 엔젤 링" && x?.name ==="여명의 가디언 엔젤 링")
        ))
    );

    return (
        <div className="setting-ui-container" style={positionStyle}>
            {/* 상단 부분 */}
            <div className="top-bar">
                {/* 아이템 부위 */}
                <h2 className="setting-ui-parts-type">{props.itemData.partsType}</h2>
                {/* 닫기 버튼(x 버튼) */}
                <button className="close-button" onClick={closeUI}>X</button>
            </div>
            {/* 선택 버튼들 부분 */}
            <div className="select-buttons-container">
            {itemsData.filter(itemData => itemData.partsType === props.itemData.partsType).map((itemData, index) => //해당하는 부위의 아이템들에 대해
                <SelectButton
                    itemData={itemData}
                    setItemData={props.setItemData}
                    activateSettingUI={props.activateSettingUI}
                    selected={isSelected(itemData)}
                    disabled={isDisabled(itemData)}
                    key={index}
                />
            )}
            </div>
        </div>
    );
}
