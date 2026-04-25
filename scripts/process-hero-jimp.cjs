const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const input = path.resolve(__dirname, '../src/assets/images/hero/fierros-hero.jpg');
const outJpg = path.resolve(__dirname, '../src/assets/images/hero/fierros-hero-1600.jpg');
const outWebp = path.resolve(__dirname, '../src/assets/images/hero/fierros-hero-1600.webp');

(async () => {
  if (!fs.existsSync(input)) {
    console.error('input not found', input);
    process.exit(1);
  }
  try {
    const image = await Jimp.read(input);
    image.resize(1600, Jimp.AUTO).quality(85).write(outJpg);

    // Jimp doesn't write WebP directly in some builds; instead, convert via buffer
    const webpBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);
    fs.writeFileSync(outWebp, webpBuffer);

    console.log('processed', outJpg, outWebp);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
