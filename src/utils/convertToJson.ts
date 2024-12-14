import csv from 'csvtojson';
import fs from 'fs/promises';
import { v4 } from 'uuid';

const csvPath = 'src/data/data.csv';
const jsonPath = 'src/data/data.json';

async function convertToJson() {
  try {
    const fileHandle: fs.FileHandle = await fs.open(jsonPath, 'wx');

    const data = await csv().fromFile(csvPath);
    const jsonArray = data.map((item) => {
      const { name, abv, ibu, type, country } = item;

      return {
        id: v4(),
        name,
        abv,
        ibu,
        type: type.replace(/_/g, ' '),
        country,
      };
    });

    await fileHandle.write(JSON.stringify(jsonArray, null, 2));
    await fileHandle?.close();
  } catch (error) {
    console.error('Ошибка при работе с файлом:', error);
  }
}

convertToJson();
