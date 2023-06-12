export interface NotificationInterface {
  notification_id: string;
  user_id: string;
  target_id: string;
  type: "COMMENT" | "EMOTION";
  content: string;
  viewed: string;
  hidden: string;
  created_at: string;
}
