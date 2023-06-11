import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { EnvState, FilterState, UserState } from "../interface";

const { persistAtom } = recoilPersist();

export const userState = atom<UserState>({
  key: "userState",
  default: {
    role: "GUEST",
    user_id: "",
    name: "",
    create_at: "",
    first: false,
    email: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const envState = atom<EnvState>({
  key: "envState",
  default: {
    //밝기모드
    theme: "system",
    backNoti: true,
  },
  effects_UNSTABLE: [persistAtom],
});

export const filterState = atom<FilterState>({
  key: "filterState",
  default: {
    //우연 찾기 거리
    searchRange: 100,
    //우연 찾기 관심 카테고리
    // INFO, PRESENT, GROUP, EVENT, DAILY, ADS
    preferCategory: ["DAILY", "GROUP", "ADS", "INFO", "EVENT", "PRESENT"],
  },
  effects_UNSTABLE: [persistAtom],
});
