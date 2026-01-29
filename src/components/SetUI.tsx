/*
 * SetUI.tsx
 * 장착한 아이템들로 적용되는 상세 세트옵션 하나 나타내는 컴포넌트
 */

import type { Option } from '../assets/Parts'
import type { NowSetData } from '../assets/checkSet'
import './SetUI.css'

export default function SetUI(props: {
    setData: NowSetData //적용중인 세트 정보
}) {
    //옵션 출력하는 함수
    const getOption = (optionName: Option, optionValue: number): string => {
        if (optionName.includes("^")) {
            return optionName.replace("^", "");
        } else if (optionName.includes("$")) {
            return `${optionName.replace("$", "")}: +${optionValue}%`;
        } else {
            return `${optionName}: +${optionValue}`; 
        }
    };

    return (
        <div className="set-container">
            {/* 머리 부분 */}
            <div>
                {/* 세트명(장착중인 아이템 개수) */}
                <h3 className="set-name">{props.setData.setName}({props.setData.itemCount})</h3>
                <div className="set-inner-container">
                {props.setData.setItems.map((setItem, indexJ) => ( //세트옵션의 아이템들에 대해
                    <p
                        className={"set-parts " + (props.setData.itemList.map(item => item.name).includes(setItem.name)
                            ? setItem.isLuckyItem
                            ? "lucky-aplied-set" //럭키아이템일 경우
                            : "aplied-set" //장착중일 경우
                            : "not-aplied-set" //장착중이 아닐 경우
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
            {Object.entries(props.setData.setOption).map((setOptionData, indexJ) => ( //세트옵션에 대해
                <div key={indexJ}>
                    {/* n세트효과 */}
                    <h4 className="how-much-set-effect">{setOptionData[0]}세트효과</h4>
                    {Object.entries(setOptionData[1]).map((setOption, indexK) => //세트옵션들에 대해
                        <p
                            className={parseInt(setOptionData[0]) <= props.setData.itemCount ? "aplied-set" : "not-aplied-set"} //적용중/미적용중일 경우
                            key={indexK}
                        >
                            {/* 옵션명[: 옵션수치[%]] */}
                            {getOption(setOption[0] as Option, setOption[1] as number)}
                        </p>
                    )}
                </div>
            ))}
            </div>
        </div>
    );
}
