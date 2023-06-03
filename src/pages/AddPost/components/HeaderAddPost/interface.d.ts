export interface Photo {
  key: number;
  photo: string;
}

export interface UploadPostType {
  latitude?: number | undefined;
  longitude?: number | undefined;
  address?: string | null;
  category?: string | null;
  photo?: Photo[];
  content?: string;
}

export interface PostStateInterface {
  post: UploadPostType | null;
  setPost: React.Dispatch<React.SetStateAction<UploadPostType | null>>;
}
