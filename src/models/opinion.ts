import { Rating } from "./enums";
import { IUser } from "./user";

export interface IOpinion {
  text: string;
  owner: IUser;
  rating: Rating;
  created_at: string;
  likes: number;
  dislikes: number;
}
