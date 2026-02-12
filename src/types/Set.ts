
//세트 이름
export const SET_NAMES = [
    "에테르넬 세트", "아케인셰이드 세트", "앱솔랩스 세트", "루타비스 세트",
    "여제 세트", "로얄 반 레온 세트", "네크로 세트",
    "광휘의 보스 세트", "칠흑의 보스 세트", "여명의 보스 세트", "보스 장신구 세트",
    "크리티아스 세트", "마이스터 세트", "카오스 핑크빈 세트 II",
    "8th 세트", "7th 세트", "칠요 세트",
    "메이플 트레져 세트", "메이플 블랙 세트", "블랙 세트", "도전자의 장비 세트"
] as const;
export type SetName = typeof SET_NAMES[number];

//옵션들; $로 시작: %옵션, ^로 시작: 수치 무시
export const SET_OPTIONS = [
    "올스탯", "공격력", "공격력 / 마력", "최대 HP", "최대 HP / 최대 MP", "$최대 HP / 최대 MP", "방어력",
    "$보스 몬스터 데미지", "$몬스터 방어율 무시", "$크리티컬 데미지", "주스탯 / 부스탯",
    "$일반 몬스터 공격 시 데미지", "$데미지",
    "상태 이상 내성", "^모든 스킬 레벨: +2(5차 스킬 제외, 스킬의 마스터 레벨까지만 증가)",
    "이동속도", "점프력", "^공격 시 5% 확률로 2레벨 빙결효과 적용"
] as const;
export type SetOption = typeof SET_OPTIONS[number];

//옵션 문자열 생성하는 함수
export const getOption = (optionName: SetOption, optionValue: number): string => {
    //^로시작: 수치 무시
    if (optionName.includes("^")) {
        return optionName.replace("^", "");
    }

    //$로시작: %옵션
    if (optionName.includes("$")) {
        return `${optionName.replace("$", "")}: +${optionValue}%`;
    }

    return `${optionName}: +${optionValue}`;
};