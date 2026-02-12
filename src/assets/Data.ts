import eternalSetDataObj from '../data/setData/ethernalSetData.json';
import arcaneShadeSetDataObj from '../data/setData/arcaneShadeSetData.json';
import absolabsSetDataObj from '../data/setData/absolabsSetData.json';
import rootAbyssSetDataObj from '../data/setData/rootAbyssSetData.json';
import empressSetDataObj from '../data/setData/empressSetData.json';
import royalVonLeonSetDataObj from '../data/setData/royalVonLeonSetData.json';
import necroSetDataObj from '../data/setData/necroSetData.json';
import radianceBossSetDataObj from '../data/setData/radianceBossSetData.json';
import darkBossSetDataObj from '../data/setData/darkBossSetData.json';
import dawnBossSetDataObj from '../data/setData/dawnBossSetData.json';
import bossAccessorySetDataObj from '../data/setData/bossAccessorySetData.json';
import kritiasSetDataObj from '../data/setData/kritiasSetData.json';
import meisterSetDataObj from '../data/setData/meisterSetData.json';
import chaosPinkbeanSet2DataObj from '../data/setData/chaosPinkbeanSet2Data.json';
import sevenDaysSetDataObj from '../data/setData/sevenDaysSetData.json';
import pensalirSetDataObj from '../data/setData/pensalirSetData.json';
import muspellSetDataObj from '../data/setData/muspellSetData.json';
import mapleTreasureSetDataObj from '../data/setData/mapleTreasureSetData.json';
import mapleBlackSetDataObj from '../data/setData/mapleBlackSetData.json';
import blackSetDataObj from '../data/setData/blackSetData.json';
import challengerSetDataObj from '../data/setData/challengerSetData.json';
import luckyItemsObj from '../data/itemsData/luckyItemsData.json';
import noSetItemsObj from '../data/itemsData/noSetItemsData.json';
import {unusedSets} from '../assets/config.json';
import {type ItemData, PARTS_TYPES, type PartsType} from "../types/Item.ts";
import {SET_NAMES, type SetName} from '../types/Set.ts';
import type {SetData} from '../types/SetEffects.ts';

export const SET_NAME_TO_SET_DATA: Record<SetName, SetData> = {
    '에테르넬 세트': eternalSetDataObj as SetData,
    '아케인셰이드 세트': arcaneShadeSetDataObj as SetData,
    '앱솔랩스 세트': absolabsSetDataObj as SetData,
    '루타비스 세트': rootAbyssSetDataObj as SetData,
    '여제 세트': empressSetDataObj as SetData,
    '로얄 반 레온 세트': royalVonLeonSetDataObj as SetData,
    '네크로 세트': necroSetDataObj as SetData,
    '광휘의 보스 세트': radianceBossSetDataObj as SetData,
    '칠흑의 보스 세트': darkBossSetDataObj as SetData,
    '여명의 보스 세트': dawnBossSetDataObj as SetData,
    '보스 장신구 세트': bossAccessorySetDataObj as SetData,
    '크리티아스 세트': kritiasSetDataObj as SetData,
    '마이스터 세트': meisterSetDataObj as SetData,
    '카오스 핑크빈 세트 II': chaosPinkbeanSet2DataObj as SetData,
    '8th 세트': sevenDaysSetDataObj as SetData,
    '7th 세트': pensalirSetDataObj as SetData,
    '칠요 세트': muspellSetDataObj as SetData,
    '메이플 트레져 세트': mapleTreasureSetDataObj as SetData,
    '메이플 블랙 세트': mapleBlackSetDataObj as SetData,
    '블랙 세트': blackSetDataObj as SetData,
    '도전자의 장비 세트': challengerSetDataObj as SetData,
} as const;

export const luckyItems = luckyItemsObj as readonly ItemData[];
export const noSetItems = noSetItemsObj as readonly ItemData[];

// 전체 아이템들 들어있는 배열
export const itemsData: readonly ItemData[] = (() => {
    const data: ItemData[] = [];
    for (const name of SET_NAMES) {
        if (unusedSets.includes(name)) {
            continue;
        }
        data.push(...SET_NAME_TO_SET_DATA[name].items);
    }
    data.push(...luckyItems);
    data.push(...noSetItems);
    return data;
})();

//아이템들 부위별로
export const itemsDataGroupedByPartsType: Record<PartsType, readonly ItemData[]> = (() => {
    const data = {} as Record<PartsType, ItemData[]>;

    for (const partsType of PARTS_TYPES) {
        data[partsType] = [];
    }

    for (const itemData of itemsData) {
        data[itemData.partsType].push(itemData);

        //상의랑 한벌옷은 같이
        if (itemData.partsType === '상의') {
            data['한벌옷'].push(itemData);
        }
        if (itemData.partsType === '한벌옷') {
            data['상의'].push(itemData);
        }
    }

    return data;
})();







