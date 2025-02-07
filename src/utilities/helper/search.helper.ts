type Compare =
  | "="
  | "!="
  | ">"
  | ">="
  | "<"
  | "<="
  | "<>"
  | "@>"
  | "like"
  | "not_start_with";
const qsCompare = (
  key: string,
  value: string | undefined | null,
  compare: Compare,
) => {
  if (value === null) return "";
  if (value === undefined) return "";

  const text = value.toString().trim();
  if (text === "") return "";

  if (compare === "like") {
    return `${key}:ilike:%${text}%`;
  }
  if (compare === "not_start_with") {
    return `${key}:not ilike:${text}%`;
  }
  return `${key}:${compare}:${text}`;
};

const qsOrder = (key: string, direction: "ASC" | "DESC") => {
  if (key && direction) return `${key}:${direction}`;
};

const qsAnd = (params: (string | undefined | null)[]) => {
  const searchString = params.filter((i) => !!i?.trim()).join(";");
  if (!searchString) return "";
  return "[" + searchString + "]";
};

const qsOr = (params: (string | undefined | null)[]) => {
  const searchString = params.filter((i) => !!i?.trim()).join("|");
  if (!searchString) return "";
  return "[" + searchString + "]";
};

export const qs = {
  and: qsAnd,
  or: qsOr,
  compare: qsCompare,
  order: qsOrder,
};
