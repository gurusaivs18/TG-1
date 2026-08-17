import fs from "fs";
import path from "path";
import sharp from "sharp";

const folder = path.join(process.cwd(), "src/assets");

// Image formats that Sharp can convert to WebP
const allowedExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".tif",
  ".tiff",
  ".avif",
];

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
  console.log("🔍 Scanning assets folder...\n");

  const files = await getAllFiles(folder);

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const oldPath of files) {
    const ext = path.extname(oldPath).toLowerCase();

    // Already WebP → leave it alone
    if (ext === ".webp") {
      skipped++;
      continue;
    }

    // Not an image format we want to convert
    if (!allowedExtensions.includes(ext)) {
      continue;
    }

    const directory = path.dirname(oldPath);
    const filename = path.basename(oldPath, ext);

    const newPath = path.join(directory, `${filename}.webp`);

    try {
      console.log(`🔄 Converting: ${oldPath}`);

      await sharp(oldPath)
        .webp({
          quality: 85,
        })
        .toFile(newPath);

      // Only delete original after WebP was successfully created
      if (fs.existsSync(newPath)) {
        fs.unlinkSync(oldPath);

        converted++;

        console.log(`   ✓ Created: ${newPath}`);
        console.log(`   🗑 Deleted: ${oldPath}\n`);
      } else {
        failed++;

        console.error(`❌ WebP was not created, original kept: ${oldPath}\n`);
      }
    } catch (error) {
      failed++;

      console.error(`❌ Failed: ${oldPath}`);
      console.error(`   ${error.message}\n`);
    }
  }

  console.log("========================================");
  console.log("         IMAGE CONVERSION DONE");
  console.log("========================================");
  console.log(`✓ Converted : ${converted}`);
  console.log(`↷ WebP kept : ${skipped}`);
  console.log(`❌ Failed    : ${failed}`);
  console.log("========================================");
}

convertImages();
