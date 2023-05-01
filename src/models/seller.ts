import { Rating } from "./enums";

export interface ISeller {
  name: string;
  reputation: Rating;
  location: string;
  timeShipping: Rating;
}
