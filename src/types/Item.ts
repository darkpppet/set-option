import type {SetName} from "./Set.ts";

//부위
export const PARTS_TYPES = [
    "반지", "모자", "엠블렘", "펜던트", "얼굴장식",
    "뱃지", "눈장식", "귀고리", "훈장", "무기",
    "한벌옷", "상의", "어깨장식", "보조무기", "포켓 아이템", "벨트",
    "하의", "장갑", "망토", "신발", "안드로이드", "기계심장",
] as const;
export type PartsType = typeof PARTS_TYPES[number];

//아이템 하나 정보
export interface ItemData {
    readonly imgSrc: string, //이미지 경로
    readonly name: string, //이름
    readonly partsType: PartsType, //부위
    readonly setName?: SetName, //세트 이름
    readonly isOnlyOneEquipped?: true, //고유아이템 여부
    readonly isLuckyItem?: true, //럭키아이템 여부
    readonly luckyItemPriority?: number, //럭키아이템 우선도(높은게 먼저)
    readonly isOverall?: true, //한벌옷 여부
}