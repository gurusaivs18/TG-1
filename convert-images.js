import fs from "fs";
import path from "path";
import sharp from "sharp";

const folder = path.join(process.cwd(), "src/assets/brandsPageLogos");

const allowedExtensions = [".jpg", ".jpeg", ".png"];

async function convertImages() {
  const files = fs.readdirSync(folder);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    // Skip webp files
    if (!allowedExtensions.includes(ext)) {
      continue;
    }

    const oldPath = path.join(folder, file);

    const newName = path.basename(file, ext) + ".webp";

    const newPath = path.join(folder, newName);

    try {
      console.log(`Converting: ${file}`);

      await sharp(oldPath)
        .webp({
          quality: 85,
        })
        .toFile(newPath);

      // Check conversion success
      if (fs.existsSync(newPath)) {
        fs.unlinkSync(oldPath);

        console.log(`✓ Converted and deleted: ${file}`);
      }
    } catch (error) {
      console.log(`❌ Failed: ${file}`, error.message);
    }
  }

  console.log("Finished");
}

convertImages();
