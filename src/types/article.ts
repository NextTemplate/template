export type Article = {
  id: string;
  totalCount: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  subTitle: string;
  body: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  tag: string;
  description: string;
  keyword: string;
  url: string;
};
  