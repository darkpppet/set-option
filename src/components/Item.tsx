/* 
 * Item.tsx
 * 장비창의 각 아이템들 컴포넌트
 * 장착중인 아이템 정보 표시
 * 누르면 Equipments에서 SettingUI 나옴
 */

import type { ItemData } from '../assets/Parts'
import getColor from '../assets/getColor'
import type {ChangeSettingUIType} from '../assets/ChangeSettingUIType';
import './Item.css'

export default function Item(props: {
    itemData: ItemData, //해당 아이템 정보
    setItemData: (e: ItemData) => void, //해당 아이템 setter
    activateSettingUI: ChangeSettingUIType, //SettingUI 활성화/비활성화 하는 함수
    disabled: boolean //비활성화 여부
}) {
    //SettingUI 여는 함수; onClick에 바인딩
    const openSettingUI = (e: React.MouseEvent): void => {
        props.activateSettingUI(true, props.itemData, props.setItemData, e);
    };

    //아이템 세트에 따른 배경 색깔
    const colorStyle: React.CSSProperties = {
        backgroundColor: props.disabled
            ? 'White'
            : getColor(props.itemData)
    };

    //disabled=true면 붉게 비활성화처럼 표시하는 layer 
    const redLayer = props.disabled ? <div className="red-layer"></div> : <></>;

    return (
        <button className="item-button" onClick={openSettingUI} style={colorStyle}>
            {/* 아이템 이미지 */}
            <img src={props.itemData.imgSrc} className="item-img"></img>
            {/* 아이템 부위 */}
            <h3 className="item-parts-type">{props.itemData.partsType}</h3>
            {/* 아이템 이름 */}
            <p className="item-name">{props.itemData.name}</p>
            {/* 비활성화 빨강 레이어 */}
            {redLayer}
        </button>
    );
}
