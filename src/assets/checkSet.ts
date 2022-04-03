/*
 * checkSet.ts
 * 입력으로 들어온 장착 아이템들 정보에 따라 세트옵션 계산해주는 함수 checkSet이 있는 모듈
 */

import { ItemData, isItemData, SetOption } from './Parts'
import { setsData } from './Data'

//세트옵션 결과 인터페이스
export interface NowSetData {
    readonly setName: string, //세트 이름
    readonly setOption: SetOption, //세트 옵션
    readonly setItems: readonly ItemData[] //세트에 해당되는 아이템들
    readonly itemCount: number, //세트에 해당되는 아이템 중 끼고있는 아이템들의 개수
    readonly itemList: readonly ItemData[], //세트에 해당되는 아이템 중 끼고있는 아이템들
}

//세트옵션 계산해주는 함수
export default function checkSet(itemsData: readonly (ItemData | null)[][]): NowSetData[] {
    const tempItemsData = [...itemsData.map(x => [...x])] //파라미터 DeepCopy

    if (tempItemsData[3][2]?.isOverall) { //한벌옷 입고 있을 경우 하의는 계산에서 제외
        tempItemsData[4][2] = null;
    }

    let result: NowSetData[] = []; //리턴값

    //럭키아이템: 럭키아이템 중 우선도 제일 높은거 한개(없으면 null)
    const luckyItem
        = tempItemsData.flat().find(i => i?.luckyItemPriority === Math.max(...itemsData.flat().filter(j => j?.isLuckyItem).map(j => j?.luckyItemPriority as number)));
    
    //세트마다 순회
    setsData.forEach(i => {
        let count = 0; //세트 적용 템 개수
        let list: ItemData[] = []; //세트 적용 템들

        //지금 끼고있는 템들 순회
        tempItemsData.flat().forEach(j => {
            if (isItemData(j) && i.name === j.setName) { //세트에 들어가는 템이면
                count++; //세트 적용 템 개수 증가
                list.push(j); //세트 적용 템에 추가
            }
        });
        
        //럭키아이템 관련
        let setItems = [...i.items]; //세트에 있는 템들: 럭키아이템 적용되면 그템으로 바꿔버릴거임
        if (luckyItem && //럭키아이템이 있고
            count >= 3 && //3개 이상 끼고 있고
            i.items.map(j => j.partsType).includes(luckyItem.partsType) && //세트에 럭키아이템에 해당되는 부위가 있고
            i.items.filter(j => j.partsType === luckyItem.partsType).some(j => !list.map(k => k.name).includes(j.name))) { //그 부위에 빈자리가 있을 때
                count++; //세트 적용 템 개수 증가
                setItems.splice(setItems.findIndex(j => (j.partsType === luckyItem.partsType && !list.map(k => k.name).includes(j.name))), 1, luckyItem); //세트의 템을 럭키아이템으로 바꿔버림
                list.push(luckyItem); //세트 적용 템에 추가
        }

        if (count >= Math.min(...(Object.keys(i.option).map(j => parseInt(j))))) { //세트 적용 템 개수가 최소 세트 수보다 크면 리턴값에 추가
            result.push({
                setName: i.name,
                setOption: i.option,
                setItems: setItems,
                itemCount: count,
                itemList: list
            });
        }
    });

    return result;
}
