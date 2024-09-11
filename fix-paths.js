import { readFile, writeFile } from 'fs/promises'
import path from 'path'

const filePath = path.join(process.cwd(), 'dist/index.html')

// Wrap everything in an async function
async function fixPaths() {
  try {
    const data = await readFile(filePath, 'utf8')

    // Replace absolute paths with relative paths
    const result = data.replace(/\/assets\//g, './assets/')

    // Write the updated index.html back to the dist folder
    await writeFile(filePath, result, 'utf8')
    console.log('Successfully updated index.html paths!')
  } catch (err) {
    console.error('Error processing index.html:', err)
  }
}

// Call the async function
fixPaths()
