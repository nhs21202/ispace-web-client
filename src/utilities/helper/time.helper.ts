import dayjs, { Dayjs } from "dayjs";

export const formatDate = (
  date: Date | Dayjs | string | undefined | null,
  format = "YYYY-MM-DD",
) => {
  try {
    if (!date) return "";

    return dayjs(date).format(format) || "";
  } catch {
    return "";
  }
};

export const isoDateString = (
  date: Date | Dayjs | string | undefined | null,
) => {
  try {
    if (!date) return "";

    return dayjs(date).toISOString() || "";
  } catch {
    return "";
  }
};
