import "server-only";
const dictionaries = {
  ua: () => import("./dictionaries/ua.json").then((r) => r.default),
  en: () => import("./dictionaries/en.json").then((r) => r.default),
};

export const getDictionary = async (lang) => dictionaries[lang]();
