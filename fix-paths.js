import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'dist/index.html');

async function fixPaths() {
  try {
    const data = await readFile(filePath, 'utf8');

    const result = data.replace(/\/assets\//g, './assets/');

    await writeFile(filePath, result, 'utf8');
    console.log('Successfully updated index.html paths!');
  } catch (err) {
    console.error('Error processing index.html:', err);
  }
}

fixPaths();
