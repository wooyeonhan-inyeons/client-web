import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { EnvState, FilterState, RangeType, UserState } from "../interface";

const { persistAtom } = recoilPersist();

export const userState = atom<UserState>({
  key: "userState",
  default: { role: "GUEST", id: 0, name: "", first: false },
  effects_UNSTABLE: [persistAtom],
});

export const envState = atom<EnvState>({
  key: "envState",
  default: {
    //밝기모드
    theme: "system",
  },
  effects_UNSTABLE: [persistAtom],
});

export const filterState = atom<FilterState>({
  key: "filterState",
  default: {
    //우연 찾기 거리
    searchRange: 100,
    //우연 찾기 관심 카테고리
    preferCategory: [
      "DAILY",
      "METTING",
      "COMMERCIAL",
      "INFORMATION",
      "EVENT",
      "GIFT",
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
