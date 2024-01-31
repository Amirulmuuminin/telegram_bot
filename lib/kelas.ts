import { toMarkupKeyboard } from "./toMarkupKeyboard";

const kelas = [
  "Abdullah",
  "Aisyah",
  "Fathimah",
  "Khadijah",
  "Ubay",
  "Utsman",
  "Abu Bakr",
  "Shafiyyah",
  "Umar",
  "Zainab",
  "Ali",
  "Ruqayyah",
  "Sa'ad",
  "Ummu Kultsum",
  "Maimunah",
  "Maryam",
  "Thalhah",
  "Zubair",
  "Asma'",
  "Muadz",
  "Khansa'",
  "Mush'ab",
  "Khalid",
  "Ummu Salamah",
  "Bilal",
  "Sarah",
];

export const getAllKelas = () => {
  const transfromToMarkup = toMarkupKeyboard(kelas, 4);
  return transfromToMarkup;
};
