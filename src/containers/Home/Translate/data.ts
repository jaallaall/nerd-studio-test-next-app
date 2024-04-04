import { GroupBase, SingleValue } from "react-select";

type Option = {
  value?: string;
  label?: string;
};

export const defaultLang = ["English", "Persian"];

export const options: readonly any[] = [
  { value: "Persian", label: "فارسی" },
  { value: "English", label: "English" },
  { value: "Indonesian", label: "Bahasa Indonesia" },
  { value: "Malay", label: "Bahasa Melayu" },
  { value: "Catalan", label: "Català" },
  { value: "Czech", label: "Čeština" },
  { value: "Danish", label: "Dansk" },
  { value: "German", label: "Deutsch" },
  { value: "Spanish", label: "Español" },
  {
    value: "Latin American Spanish",
    label: "Español (Latinoamérica y el Caribe)",
  },
  { value: "Greek", label: "Ελληνικά" },
  { value: "French", label: "Français" },
  { value: "Croatian", label: "Hrvatski" },
  { value: "Italian", label: "Italiano" },
  { value: "Hungarian", label: "Magyar" },
  { value: "Dutch", label: "Nederlands" },
  { value: "Norwegian", label: "Norsk" },
  { value: "Portuguese", label: "Português(BR)" },
  { value: "European Portuguese", label: "Português(PT)" },
  { value: "Russian", label: "Русский" },
  { value: "Polish", label: "Polski" },
  { value: "Romanian", label: "Română" },
  { value: "Slovak", label: "Slovenčina" },
  { value: "Swedish", label: "Svenska" },
  { value: "Finnish", label: "Suomi" },
  { value: "Turkish", label: "Türkçe" },
  { value: "Vietnamese", label: "Tiếng Việt" },
  { value: "Ukrainian", label: "Українська" },
  { value: "Chinese (Simplified)", label: "中文（简体）" },
  { value: "Chinese (Taiwan)", label: "繁體中文（台灣）" },
  { value: "Chinese (Hong Kong)", label: "繁體中文（香港）" },
  { value: "Japanese", label: "日本語" },
  { value: "Korean", label: "한국어" },
  { value: "Arabic", label: "العربية" },
  { value: "Hebrew", label: "עברית" },
  { value: "Hindi", label: "हिन्दी" },
  { value: "Thai", label: "ภาษาไทย" },
  { value: "Bangla", label: "বাংলা" },
];
