import { Markup } from "telegraf";

export const toMarkupKeyboard = (data: any[]) => {
  // Define the number of columns you want in each row
  const columns = 4;

  // Transform the array into the desired shape
  const transformedArray = [];
  for (let i = 0; i < data.length; i += columns) {
    const row = data
      .slice(i, i + columns)
      .map((name) => Markup.button.callback(name, name));
    transformedArray.push(row);
  }

  return transformedArray;
};
