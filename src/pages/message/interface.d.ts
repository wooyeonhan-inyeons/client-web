export interface chatListInterface {
  group_id: string;
  is_own: string;
}

export interface chatItemInterface {
  chat_id: string;
  is_own: boolean;
  content: string;
  created_at: string;
}
