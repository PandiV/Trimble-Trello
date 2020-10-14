import { DATE_FORMAT_TYPES } from "static";

export const dateFormatOptions = {
  year: DATE_FORMAT_TYPES.numeric,
  month: DATE_FORMAT_TYPES.short,
  day: DATE_FORMAT_TYPES.twoDigit,
  hour: DATE_FORMAT_TYPES.numeric,
  minute: DATE_FORMAT_TYPES.numeric,
  hour12: true,
};
