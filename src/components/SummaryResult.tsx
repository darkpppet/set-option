/*
 * SummaryResult.tsx (미구현)
 * 적용중인 세트옵션 요약해서 보여주는 컴포넌트
 */

import { NowSetData } from '../assets/checkSet'

export default function SummaryResult(props: {
    setsData: NowSetData[];
}) {
    return (
        <div>
            <h2>요약</h2>
            {props.setsData.map(i => 
                <p>{i.setName}({i.itemCount})</p>
            )}
        </div>
    );
}
