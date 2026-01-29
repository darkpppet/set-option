/*
 * Equipments.tsx
 * 장비창 컴포넌트
 * Item들 있음
 * 각 Item 누르면 나오는 SettingUI도 포함
 */

import { useState } from 'react'
import { type ItemData, isItemData } from '../assets/Parts'
import type {ChangeSettingUIType} from '../assets/ChangeSettingUIType';
import Item from './Item';
import SettingUI from './SettingUI';
import './Equipments.css'

export default function Equipments(props: {
    itemsData: (ItemData | null)[][], //끼고있는 아이템들 데이터
    setItemsData: (indexI: number, indexJ: number, itemData: ItemData) => void //끼고있는 아이템 데이터들 설정하는 함수
}) {
    //SettingUI
    const [settingUI, setSettingUI] = useState(<></>);

    //SettingUI 켜고 끄는 함수; ChangeSettingUIType.ts에 파라미터 설명 있음
    const activateSettingUI = ((isActivated: boolean, itemData?: ItemData, setter?: (e: ItemData) => void, e?: React.MouseEvent): void => {
        if (isActivated && itemData !== undefined && setter !== undefined && e !== undefined) {
            setSettingUI(
                <SettingUI
                    itemsData={props.itemsData}
                    itemData={itemData}
                    setItemData={setter}
                    activateSettingUI={activateSettingUI}
                    position={[e.pageX, e.pageY]}
                />);
        } else {
            setSettingUI(<></>);
        }
    }) as ChangeSettingUIType;

    //아이템 비활성화로 표시할지 여부 함수; 해당 아이템이 하의고, 한벌옷 입고있으면 비활성화
    const isDisabled = (indexI: number, indexJ: number): boolean =>
        indexI === 4 && indexJ === 2 && props.itemsData[3][2]?.isOverall ? true : false;

    return (
        <div>
            {/* 장비창 */}
            <table className="equipments-container">
                <tbody>
                {props.itemsData.map((row, indexI) => //각 줄에 대해
                    <tr key={indexI}>
                    {row.map((itemData, indexJ) => //각 아이템에 대해
                        <td key={indexJ}>
                        {isItemData(itemData) //null이 아니면 <Item /> 렌더링
                            ? <Item
                                itemData={itemData}
                                setItemData={(e: ItemData) => {props.setItemsData(indexI, indexJ, e)}}
                                activateSettingUI={activateSettingUI}
                                disabled={isDisabled(indexI, indexJ)}
                            />
                            : null
                        }
                        </td>
                    )}
                    </tr>
                )}
                </tbody>
            </table>
            {/* SettingUI */}
            {settingUI}
        </div>
    );
}
