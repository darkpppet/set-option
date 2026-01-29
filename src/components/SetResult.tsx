/*
 * SetResult.tsx
 * SetUI들 그리는 컴포넌트
 */

import type { NowSetData } from '../assets/checkSet'
import SetUI from './SetUI'
import './SetResult.css'

export default function SetResult(props: {
    setsData: NowSetData[] //적용중인 세트들 정보
}) {
    return (
        <div>
            <h2>현재 적용중인 세트옵션</h2>
            <div className="result-container">
            {props.setsData.map((setData, index) => ( //적용중인 세트들에 대해
                <SetUI setData={setData} key={index} />
            ))}
            </div>
        </div>
    );
}
