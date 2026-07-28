import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const src = path.join(root, "public", "images", "download.png");
const out = path.join(root, "src", "app", "icon.png");

async function main() {
  const source = sharp(src);
  const meta = await source.metadata();
  console.log("Source image:", meta.width, "x", meta.height);

  const trimmed = await source
    .trim()
    .png()
    .toBuffer();

  const trimmedImg = sharp(trimmed);
  const trimmedMeta = await trimmedImg.metadata();
  console.log("Trimmed image:", trimmedMeta.width, "x", trimmedMeta.height);

  const targetSize = 512;
  const marginPercent = 0.05;
  const maxLogoSize = Math.floor(targetSize * (1 - marginPercent * 2));

  const aspectRatio = trimmedMeta.width / trimmedMeta.height;
  let resizeWidth, resizeHeight;

  if (aspectRatio > 1) {
    resizeWidth = Math.min(trimmedMeta.width, maxLogoSize);
    resizeHeight = Math.round(resizeWidth / aspectRatio);
    if (resizeHeight > maxLogoSize) {
      resizeHeight = maxLogoSize;
      resizeWidth = Math.round(resizeHeight * aspectRatio);
    }
  } else {
    resizeHeight = Math.min(trimmedMeta.height, maxLogoSize);
    resizeWidth = Math.round(resizeHeight * aspectRatio);
    if (resizeWidth > maxLogoSize) {
      resizeWidth = maxLogoSize;
      resizeHeight = Math.round(resizeWidth / aspectRatio);
    }
  }

  console.log("Resizing to:", resizeWidth, "x", resizeHeight);

  const resized = await trimmedImg
    .resize(resizeWidth, resizeHeight, { fit: "inside" })
    .png()
    .toBuffer();

  const left = Math.floor((targetSize - resizeWidth) / 2);
  const top = Math.floor((targetSize - resizeHeight) / 2);

  await sharp({
    create: {
      width: targetSize,
      height: targetSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, left, top }])
    .png()
    .toFile(out);

  console.log("Created optimized favicon:", out);
  const finalMeta = await sharp(out).metadata();
  console.log("Final size:", finalMeta.width, "x", finalMeta.height);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
