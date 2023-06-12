import { WooyeonsCategory } from "../../interface";

export interface UserInfo {
  statusCode?: number;
  user_id: string;
  name: string;
  email: string;
  category: WooyeonsCategory[];
  role: "USER" | "GUEST" | "ADMIN";
  create_at: string;
  message: string;
}
