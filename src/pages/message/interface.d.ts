export interface chatListInterface {
  group_id: string;
  recent_chat: string;
}

export interface chatItemInterface {
  chat_id: string;
  is_own: boolean;
  content: string;
  created_at: string;
}
