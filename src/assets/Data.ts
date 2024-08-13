/*
 * Data.ts
 * json파일들에 있는 데이터들 가공해서 export하는 모듈
 */

import eternalSetDataObj from '../data/setdata/ethernalSetData.json';
import arcanceShadeSetDataObj from '../data/setdata/arcaneShadeSetData.json';
import absolabsSetDataObj from '../data/setdata/absolabsSetData.json';
import rootAbyssSetDataObj from '../data/setdata/rootAbyssSetData.json';
import empressSetDataObj from '../data/setdata/empressSetData.json';
import royalVonLeonSetDataObj from '../data/setdata/royalVonLeonSetData.json';
import necroSetDataObj from '../data/setdata/necroSetData.json';
import radianceBossSetDataObj from '../data/setdata/radianceBossSetData.json';
import darkBossSetDataObj from '../data/setdata/darkBossSetData.json';
import dawnBossSetDataObj from '../data/setdata/dawnBossSetData.json';
import bossAccessorySetDataObj from '../data/setdata/bossAccessorySetData.json';
import kritiasSetDataObj from '../data/setdata/kritiasSetData.json';
import meisterSetDataObj from '../data/setdata/meisterSetData.json';
import chaosPinkbeanSet2DataObj from '../data/setdata/chaosPinkbeanSet2Data.json';
import sevenDaysSetDataObj from '../data/setdata/sevenDaysSetData.json';
import pensalirSetDataObj from '../data/setdata/pensalirSetData.json';
import muspellSetDataObj from '../data/setdata/muspellSetData.json';
import mapleTreasureSetDataObj from '../data/setdata/mapleTreasureSetData.json';
import mapleBlackSetDataObj from '../data/setdata/mapleBlackSetData.json';
import blackSetDataObj from '../data/setdata/blackSetData.json';
import luckyItemsArrayObj from '../data/luckyItemsData.json';
import nosetItmesArrayObj from '../data/nosetItemsData.json';
import { ItemData, SetData } from './Parts';

export const eternalSetData: SetData = eternalSetDataObj as SetData; //에테르넬 세트
export const arcaneShadeSetData: SetData = arcanceShadeSetDataObj as SetData; //아케인셰이드 세트
export const absolabsSetData: SetData = absolabsSetDataObj as SetData; //앱솔랩스 세트
export const rootAbyssSetData: SetData = rootAbyssSetDataObj as SetData; //루타비스 세트
export const empressSetData: SetData = empressSetDataObj as SetData; //여제 세트
export const royalVonLeonSetData: SetData = royalVonLeonSetDataObj as SetData; //로얄 반 레온 세트
export const necroSetData: SetData = necroSetDataObj as SetData; //네크로 세트; 미사용
export const radianceBossSetData: SetData = radianceBossSetDataObj as SetData; //광휘의 보스 세트
export const darkBossSetData: SetData = darkBossSetDataObj as SetData; //칠흑의 보스 세트
export const dawnBossSetData: SetData = dawnBossSetDataObj as SetData; //여명의 보스 세트
export const bossAccessorySetData: SetData = bossAccessorySetDataObj as SetData; //보스 장신구 세트
export const kritiasSetData: SetData = kritiasSetDataObj as SetData; //크리티아스 세트
export const meisterSetData: SetData = meisterSetDataObj as SetData; //마이스터 세트
export const chaosPinkbeanSet2Data: SetData = chaosPinkbeanSet2DataObj as SetData; //카오스 핑크빈 세트 II; 미사용
export const sevenDaysSetData: SetData = sevenDaysSetDataObj as SetData; //칠요 세트
export const pensalirSetData: SetData = pensalirSetDataObj as SetData; //펜살리르 세트
export const muspellSetData: SetData = muspellSetDataObj as SetData; //무스펠 세트
export const mapleTreasureSetData: SetData = mapleTreasureSetDataObj as SetData; //메이플 트레져 세트
export const mapleBlackSetData: SetData = mapleBlackSetDataObj as SetData; //메이플 블랙 세트
export const blackSetData: SetData = blackSetDataObj as SetData; //블랙 세트; 미사용
export const luckyItemsArray: ItemData[] = luckyItemsArrayObj as ItemData[]; //럭키아이템들
export const nosetItemsArray: ItemData[] = nosetItmesArrayObj as ItemData[]; //세트 없는 아이템들

//아이템들만 전부 있는 배열
export const itemsData: readonly ItemData[] = [
    ...eternalSetData.items, ...arcaneShadeSetData.items, ...absolabsSetData.items, ...rootAbyssSetData.items,
    ...empressSetData.items, ...royalVonLeonSetData.items,
    ...radianceBossSetData.items, ...darkBossSetData.items, ...dawnBossSetData.items, ...bossAccessorySetData.items,
    ...kritiasSetData.items, ...meisterSetData.items,
    ...sevenDaysSetData.items, ...pensalirSetData.items, ...muspellSetData.items,
    ...mapleTreasureSetData.items, ...mapleBlackSetData.items,
    ...luckyItemsArray, ...nosetItemsArray
];

//세트들만 전부 있는 배열
export const setsData: readonly SetData[] = [
    eternalSetData, arcaneShadeSetData, absolabsSetData, rootAbyssSetData,
    empressSetData, royalVonLeonSetData,
    radianceBossSetData, darkBossSetData, dawnBossSetData, bossAccessorySetData,
    kritiasSetData, meisterSetData,
    sevenDaysSetData, pensalirSetData, muspellSetData,
    mapleTreasureSetData, mapleBlackSetData,
];
