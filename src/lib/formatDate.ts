import { format as formatFn } from "date-fns-tz";

export const formatDate = (
  date: Date | string,
  format: string = "dd.MM.yyyy",
): string => {
  return formatFn(new Date(date), format);
};
