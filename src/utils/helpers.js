import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const getToday = function (options = {}) {
  const today = new Date();
  if (options.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));
