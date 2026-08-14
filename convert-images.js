import fs from "fs";
import path from "path";
import sharp from "sharp";

const folder = path.join(process.cwd(), "src/assets");

const allowedExtensions = [".jpg", ".jpeg", ".png"];

async function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertImages() {
  const files = await getAllFiles(folder);

  let converted = 0;

  for (const oldPath of files) {
    const ext = path.extname(oldPath).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      continue;
    }

    const newPath =
      path.join(path.dirname(oldPath), path.basename(oldPath, ext)) + ".webp";

    try {
      console.log(`Converting: ${oldPath}`);

      await sharp(oldPath).webp({ quality: 85 }).toFile(newPath);

      if (fs.existsSync(newPath)) {
        fs.unlinkSync(oldPath);
        converted++;

        console.log(`✓ Converted: ${oldPath}`);
      }
    } catch (error) {
      console.error(`❌ Failed: ${oldPath}`);
      console.error(error.message);
    }
  }

  console.log(`\nFinished! ${converted} images converted to WebP.`);
}

convertImages();
