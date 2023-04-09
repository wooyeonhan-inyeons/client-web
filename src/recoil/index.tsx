import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserState } from "../interface";

const { persistAtom } = recoilPersist();

const userState = atom<UserState>({
  key: "userState",
  default: { role: "GUEST", id: 0, name: "" },
  effects_UNSTABLE: [persistAtom],
});
export default userState;
