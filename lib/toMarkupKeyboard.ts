import { Markup } from "telegraf";

interface params {
  columns: number;
  data?: {
    nama: string;
    induk: number;
  }[];
  array?: string[];
}

export const toMarkupKeyboard = ({ columns, data, array }: params) => {
  // Transform the array into the desired shape
  const transformedArray = [];

  if (!array && data) {
    for (let i = 0; i < data.length; i += columns) {
      const row = data
        .slice(i, i + columns)
        .map((item) =>
          Markup.button.callback(item.nama, item.induk.toString())
        );
      transformedArray.push(row);
    }
  }

  if (array && !data) {
    for (let i = 0; i < array.length; i += columns) {
      const row = array
        .slice(i, i + columns)
        .map((item) => Markup.button.callback(item, item));
      transformedArray.push(row);
    }
  }

  return transformedArray;
};
