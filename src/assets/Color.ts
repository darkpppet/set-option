import type {ItemData} from "../types/Item.ts";
import type {SetName} from "../types/Set.ts";

//세트별 대표색깔
const SET_NAME_TO_COLOR: Record<SetName, string> = {
    "에테르넬 세트": "GhostWhite",
    "아케인셰이드 세트": 'DarkViolet',
    "앱솔랩스 세트": 'Crimson',
    "루타비스 세트": 'DeepSkyBlue',
    "여제 세트": 'IndianRed',
    "로얄 반 레온 세트": 'DarkGray',
    "네크로 세트": 'MidnightBlue',
    "광휘의 보스 세트": 'Yellow',
    "칠흑의 보스 세트": 'DarkRed',
    "여명의 보스 세트": 'DarkGray',
    "보스 장신구 세트": 'LightSkyBlue',
    "크리티아스 세트": 'LightGreen',
    "마이스터 세트": 'GoldenRod',
    "카오스 핑크빈 세트 II": "Pink",
    "8th 세트": 'DimGray',
    "7th 세트": 'HotPink',
    "칠요 세트": 'Orange',
    "메이플 트레져 세트": 'Purple',
    "메이플 블랙 세트": 'DimGray',
    "블랙 세트": 'DimGray',
    "도전자의 장비 세트": 'FireBrick',
}

export const getColor = (itemData: ItemData) => {
    if (itemData.isLuckyItem) {
        return 'Violet'
    }

    if (itemData.setName) {
        return SET_NAME_TO_COLOR[itemData.setName]
    }

    return 'LightGray';
}
