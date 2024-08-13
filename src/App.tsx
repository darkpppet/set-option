/*
 * App.tsx
 * 가장 메인 페이지
 */

import { useState } from 'react'
import { ItemData, isItemData } from './assets/Parts'
import checkSet, { NowSetData } from './assets/checkSet';
import equipmentsObj from './data/defaultEquipmentsData.json';
import Equipments from './components/Equipments'
import SetResult from './components/SetResult'
import SummaryResult from './components/SummaryResult'
import './App.css';

export default function App() {
    //끼고있는 아이템들 데이터
    const [itemsData, setItemsData]: [(ItemData | null)[][], React.Dispatch<React.SetStateAction<(ItemData | null)[][]>>]
        = useState((equipmentsObj as (ItemData | {})[][]).map(row => row.map(itemData => isItemData(itemData) ? itemData : null)));

    //적용중인 세트 정보
    const [setsData, setSetsData]: [NowSetData[], React.Dispatch<React.SetStateAction<NowSetData[]>>]
        = useState(checkSet(itemsData));

    //itemsData setter; setsData도 함께 업데이트; i, j: index
    const setItemsDataWithIndex = (idnexI: number, indexJ: number, itemData: ItemData): void => {
        const tempItemsData = [...itemsData.map(x => [...x])]
        tempItemsData[idnexI][indexJ] = itemData;
        setItemsData(tempItemsData);
        setSetsData(checkSet(tempItemsData));
    };

    return (
        <div className="App">
            <h1>세트 맞춰보세요</h1>
            <div className="main-container">
                <div className="main-top-container">
                    {/* 장비창 */}
                    <Equipments itemsData={itemsData} setItemsData={setItemsDataWithIndex} />
                    {/* 적용중인 세트옵션 (요약) */}
                    {/*<SummaryResult setsData={setsData} />*/}
                </div>
                {/* 적용중인 세트옵션 (상세) */}
                <SetResult setsData={setsData} />
            </div>
        </div>
    );
}
