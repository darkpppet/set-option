/* 
 * Parts.ts
 * 아이템 관련 여러 인터페이스 등이 있는 모듈
 */

//부위들
export type PartsType = "반지" | "모자" | "엠블렘" | "펜던트" | "얼굴장식" |
    "뱃지" | "눈장식" | "귀고리" | "훈장" | "무기" |
    "상의" | "어깨장식" | "보조무기" | "포켓 아이템" | "벨트" |
    "하의" | "장갑" | "망토" | "신발" | "안드로이드 " | "기계심장";

//옵션들; $로 시작: %옵션, ^로 시작: 수치 없음
export type Option =  "올스탯" | "공격력" | "공격력 / 마력" | "최대 HP" | "최대 HP / 최대 MP" | "$최대 HP / 최대 MP" | "방어력" |
    "$보스 몬스터 공격 시 데미지" | "$몬스터 방어율 무시" | "$크리티컬 데미지" | "주스탯 / 부스탯" |
    "$일반 몬스터 공격 시 데미지" | "$데미지" |
    "상태 이상 내성" | "^모든 스킬 레벨: +2(5차 스킬 제외, 스킬의 마스터 레벨까지만 증가)" | "이동속도" | "점프력" | "^공격 시 5% 확률로 2레벨 빙결효과 적용";

//아이템 정보
export interface ItemData {
    readonly imgSrc: string, //이미지 경로
    readonly name: string, //이름
    readonly partsType: PartsType, //부위
    readonly setName?: string, //세트 이름
    readonly isOnlyOneEquipped?: true, //고유아이템 여부
    readonly isLuckyItem?: true, //럭키아이템 여부
    readonly luckyItemPriority?: number, //럭키아이템 우선도(높은게 먼저)
    readonly isOverall?: true, //한벌옷 여부
}

//ItemData타입인지 체크하는 함수
export function isItemData(o: any): o is ItemData {
    return o !== null
        && (o as ItemData).imgSrc !== undefined 
        && (o as ItemData).name !== undefined
        && (o as ItemData).partsType !== undefined;
}

//세트 정보
export interface SetData {
    readonly name: string, //세트이름
    readonly option: SetOption, //세트옵션
    readonly items: readonly ItemData[], //세트 아이템들
}

//옵션 정보
export interface SetOption {
    readonly [key: number]: { //몇세트
        readonly [key in Option]?: number //옵션들
    }
}

//두 옵션 합하는 함수(미구현)
function addSetOption(setOption1: { readonly [key in Option]?: number }, setOption2: { readonly [key in Option]?: number }) {

}
