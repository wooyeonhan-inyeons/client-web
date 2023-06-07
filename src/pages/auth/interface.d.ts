import { WooyeonsCategory } from "../../interface";

export interface UserInfo {
  user_id: string;
  name: string;
  email: string;
  category: WooyeonsCategory[];
  role: "USER" | "GUEST" | "ADMIN";
  create_at: string;
  message: string;
}
