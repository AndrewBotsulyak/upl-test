export interface IUslugaItem {
  id: string;
  url: string;
  description: string;
  title: string;
  imgSrc: string;
}


export interface ICategory {
  id: string;
  url: string;
  title: string;
  uslugi?: IUslugaItem[];
}
