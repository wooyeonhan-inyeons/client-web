export interface Photo {
  key: number;
  photo: string;
}

export interface AddPost {
  latitude?: number | undefined;
  longitude?: number | undefined;
  address?: string | null;
  category?: string | null;
  photo?: Photo[];
  title?: string;
  content?: string;
}

type SetPostType = React.Dispatch<React.SetStateAction<AddPost>>;
export interface PostInterface {
  setPost: SetPostType;
}
