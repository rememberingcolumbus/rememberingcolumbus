import fs from 'fs';
import path from 'path';

const funeralHomesFilePath = path.join(process.cwd(), 'lib/funeral_homes.json');

export function getFuneralHomes() {
  return JSON.parse(fs.readFileSync(funeralHomesFilePath, 'utf8'));
}
