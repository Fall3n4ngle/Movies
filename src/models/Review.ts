interface AuthorDetails {
  name?: string;
  username?: string;
  avatar_path?: string | null;
  rating?: number;
}

export interface IReview {
  id: string;
  author?: string;
  author_details?: AuthorDetails;
  content?: string;
  created_at?: string;
  updated_at?: string;
  url?: string;
}
