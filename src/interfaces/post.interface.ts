
export interface IPosts {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPostData {
  posts: IPosts[]
}

export interface IPostSingle {
  post: IPosts[]
}
