import { IFeature } from "./feature";
import { IOpinion } from "./opinion";
import { IQuestion } from "./question";
import { ISeller } from "./seller";

export interface IProduct {
  name: string;
  descripion: string;
  images: string[];
  price: number;
  stock: number;
  features: IFeature[];
  basicFeatures: string[];
  seller: ISeller;
  questions: IQuestion[];
  opinions: IOpinion[];
}
