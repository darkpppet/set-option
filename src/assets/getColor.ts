/*
 * getColor.ts
 * 파라미터로 들어온 아이템의 세트 이름에 해당하는 색깔 이름 리턴하는 함수 getColor가 있는 모듈
 */

import { ItemData } from './Parts'

export default function getColor(itemData: ItemData): string {
    if (itemData.isLuckyItem) {
        return 'Violet';
    } else {
        switch (itemData.setName) {
            case "에테르넬 세트":
                return 'Silver';

            case "아케인셰이드 세트":
                return 'DarkViolet';

            case "앱솔랩스 세트": 
                return 'Crimson';

            case "루타비스 세트":
                return 'DeepSkyBlue';

            case "여제 세트":
                return 'IndianRed';

            case "로얄 반 레온 세트":
                return 'DarkGray';

            case "네크로 세트":
                return 'MidnightBlue';

            case "칠흑의 보스 세트":
                return 'DarkRed';

            case "여명의 보스 세트":
                return 'DarkGray';

            case "보스 장신구 세트":
                return 'LightSkyBlue';

            case "크리티아스 세트":
                return 'LightGreen';

            case "마이스터 세트":
                return 'GoldenRod';

            case "카오스 핑크빈 세트 II":
                return "Pink";

            case "8th 세트":
                return 'DimGray';

            case "7th 세트":
                return 'HotPink';

            case "칠요 세트":
                return 'Orange';

            case "메이플 트레져 세트":
                return 'Purple';
                
            case "메이플 블랙 세트":
                return 'DimGray';

            case "블랙 세트":
                return 'DimGray';

            default:
                return 'LightGray';
        }
    }
}
