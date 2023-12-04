import fs from 'fs';
import csv from 'csv-parser';
import Compound from './models.js';

async function importData() {
  try {
    // Read data from CSV file
    const csvFilePath = './data/compound.csv';
    const csvStream = fs.createReadStream(csvFilePath).pipe(csv());
    
    const data = [];
    for await(const row of csvStream) {
        data.push(row)
      }
      await Compound.bulkCreate(data)

    console.log('Data import completed');
    process.exit(0);
  } catch (error) {
    console.error(error,);
    process.exit(1);
  }
}

importData();

