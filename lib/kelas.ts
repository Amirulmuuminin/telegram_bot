import { Markup } from "telegraf";

export const getAllKelas = () => {
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

  // Define the number of columns you want in each row
  const columns = 4;

  // Transform the array into the desired shape
  const transformedArray = [];
  for (let i = 0; i < kelas.length; i += columns) {
    const row = kelas
      .slice(i, i + columns)
      .map((name) => Markup.button.callback(name, name));
    transformedArray.push(row);
  }

  return transformedArray;
};
