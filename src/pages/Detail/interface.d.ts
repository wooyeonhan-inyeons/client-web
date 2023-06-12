import { WooyeonsCategory } from "../../interface";

export interface DetailCarousel {
  // activeStep: number;
  // handleStepChange: (setp: number) => void;
  images: Array<imageObj> | undefined;
}

export interface CommentInterface {
  value: string;
  createAt: string;
}

export interface GetPostInterface {
  category: WooyeonsCategory;
  comment: GetCommentInterface[];
  comment_count: number;
  content: string;
  created_at: string;
  emotion_count: number;
  image: Array<{ img_id: string; img_name: string; img_url: string }>;
  latitude: number;
  longitude: number;
  own_emotion: boolean;
  post_id: string;
  user_id: string;
  viewCount: number;
}

export interface GetCommentInterface {
  // length: number;
  comment_id: string;
  content: string;
  created_at: string;
  post_id: string;
}
