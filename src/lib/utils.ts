import { Rating } from "@/models/enums";
import { IProduct } from "@/models/product";
var sanitizeHtml = require("sanitize-html");
import { DateTime } from "luxon";

export const ALL_RATINGS_VALUES = [1, 2, 3, 4, 5];

export function formatPrice(price: number | null) {
  if (!price) return "0";
  return price.toLocaleString();
}

export function formatDate(date: string) {
  const date_time = DateTime.fromISO(date);
  return date_time.toLocaleString(DateTime.DATE_MED);
}

export function renderHtml(content: string) {
  return sanitizeHtml(content);
}

export function getAverageRating(product: IProduct | null) {
  if (!product) return 0;

  let allRatings = product.opinions.map((op) => getRatingNumber(op.rating));
  let sumAllRatings = allRatings.reduce((acc, act) => acc + act, 0);

  return sumAllRatings / allRatings.length;
}

export function getRatingNumber(rating: Rating) {
  if (rating == Rating.VERY_BAD) return 1;
  if (rating == Rating.BAD) return 2;
  if (rating == Rating.REGULAR) return 3;
  if (rating == Rating.GOOD) return 4;
  if (rating == Rating.VERY_GOOD) return 5;

  return 3;
}
