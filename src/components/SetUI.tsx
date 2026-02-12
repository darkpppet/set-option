/*
 * SetUI.tsx
 * 장착한 아이템들로 적용되는 상세 세트옵션 하나 나타내는 컴포넌트
 */

import './SetUI.css'
import type {ItemData} from "../types/Item.ts";
import {type SetOption, getOption} from "../types/Set.ts";
import type {SetData} from "../types/SetEffects.ts";

export default function SetUI(props: {
    setData: SetData, //적용중인 세트 정보
    items: readonly ItemData[] //세트중에 장착중인 아이템들
}) {
    return (
        <div className="set-container">
            {/* 머리 부분 */}
            <div>
                {/* 세트명(장착중인 아이템 개수) */}
                <h3 className="set-name">{props.setData.name}({props.items.length})</h3>
                <div className="set-inner-container">
                    {props.setData.items.map((setItem, indexJ) => ( //세트옵션의 아이템들에 대해
                        <p
                            className={"set-parts " + (props.items.map(item => item.name).includes(setItem.name)
                                    ? setItem.isLuckyItem
                                        ? "lucky-applied-set" //럭키아이템일 경우
                                        : "applied-set" //장착중일 경우
                                    : "not-applied-set" //장착중이 아닐 경우
                            )}
                            key={indexJ}
                        >
                            {/* 아이템명 */}
                            <span>{setItem.name}</span>
                            {/* 부위명 */}
                            <span>({setItem.partsType})</span>
                        </p>
                    ))}
                </div>
            </div>
            <hr/>
            {/* 몸통 부분 */}
            <div className="set-inner-container">
                {Object.entries(props.setData.effects).map((setOptionData, indexJ) => ( //세트옵션에 대해
                    <div key={indexJ}>
                        {/* n세트효과 */}
                        <h4 className="how-much-set-effect">{setOptionData[0]}세트효과</h4>
                        {Object.entries(setOptionData[1]).map((setOption, indexK) => //세트옵션들에 대해
                            <p
                                className={parseInt(setOptionData[0]) <= props.items.length ? "applied-set" : "not-applied-set"} //적용중/미적용중일 경우
                                key={indexK}
                            >
                                {/* 옵션명[: 옵션수치[%]] */}
                                {getOption(setOption[0] as SetOption, setOption[1] as number)}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
