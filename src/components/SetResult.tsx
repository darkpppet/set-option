/*
 * SetResult.tsx
 * SetUI들 그리는 컴포넌트
 */

import {useMemo} from "react";
import './SetResult.css'
import SetUI from './SetUI.tsx'
import {useEquipmentsStore, getSets} from "../store/EquipmentsStore.ts";

export default function SetResult() {
    const state = useEquipmentsStore();
    const sets = useMemo(() => getSets(state), [state]);

    return (
        <div>
            <h2>현재 적용중인 세트옵션</h2>
            <div className="result-container">
                {sets.map((data, index) => ( //적용중인 세트들에 대해
                    <SetUI setData={data.setData} items={data.items} key={index}/>
                ))}
            </div>
        </div>
    );
}
