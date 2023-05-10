import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { EnvState, UserState } from "../interface";

const { persistAtom } = recoilPersist();

export const userState = atom<UserState>({
  key: "userState",
  default: { role: "GUEST", id: 0, name: "", first: false },
  effects_UNSTABLE: [persistAtom],
});

export const envState = atom<EnvState>({
  key: "envState",
  default: { theme: true },
  effects_UNSTABLE: [persistAtom],
});
