import type {ItemData} from "./Item.ts";
import type {SetOption} from "./Set.ts";

//세트효과들 정보
export interface SetEffects {
    readonly [key: number]: { //몇세트
        readonly [key in SetOption]?: number //옵션들
    }
}

//세트 정보
export interface SetData {
    readonly name: string, //세트이름
    readonly effects: SetEffects, //세트효과
    readonly items: readonly ItemData[], //세트 아이템들
}
