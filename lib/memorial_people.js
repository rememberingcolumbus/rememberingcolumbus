import fs from 'fs';
import path from 'path';


const memorialPeopleFilePath = path.join(process.cwd(), 'lib/memorial_people.json');

export function getMemorialPeople() {
  return JSON.parse(fs.readFileSync(memorialPeopleFilePath, 'utf8'));
}


