/*
 * ChangeSettingUIType.ts
 * Euipments.tsx의 SettingUI 켜고 끄는 함수(activateSettingUI)의 타입 ChangeSettingUIType이 있는 모듈
 */

import type { ItemData } from './Parts'

//Euipments.tsx의 SettingUI 켜고 끄는 함수(activateSettingUI)의 타입
export type ChangeSettingUIType =
    ((isActivated: true, itemData: ItemData, setter: (e: ItemData) => void, e: React.MouseEvent) => void) //changeSettingUI(true, itemData, changeSettingUI, MouseEvent)
    & ((isActivated: false) => void); //changeSettingUI(false)


