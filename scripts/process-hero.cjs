const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.resolve(__dirname, '../src/assets/images/hero/fierros-hero.jpg');
const outJpg = path.resolve(__dirname, '../src/assets/images/hero/fierros-hero-1600.jpg');
const outWebp = path.resolve(__dirname, '../src/assets/images/hero/fierros-hero-1600.webp');

(async () => {
  if (!fs.existsSync(input)) {
    console.error('input not found', input);
    process.exit(1);
  }
  try {
    await sharp(input)
      .resize({ width: 1600 })
      .jpeg({ quality: 85 })
      .toFile(outJpg);

    await sharp(input)
      .resize({ width: 1600 })
      .webp({ quality: 80 })
      .toFile(outWebp);

    console.log('processed', outJpg, outWebp);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
