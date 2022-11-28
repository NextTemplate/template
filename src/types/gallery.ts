export type Gallery = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  gallery_id: number;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  subTitle: string;
  tag: string;
  profile: string;
  body: string;
  // url: string;
  img1: {
    url: string;
    height: number;
    width: number;
  };
  img2: {
    url: string;
    height: number;
    width: number;
  };
  img3: {
    url: string;
    height: number;
    width: number;
  };
  description: string;
  keyword: string;
};
