import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const src = path.join(root, "public", "images", "menttion.png");
const outDir = path.join(root, "public");

async function main() {
  if (!fs.existsSync(src)) {
    console.error("Source logo not found:", src);
    process.exit(1);
  }

  const sizes = [
    { name: "favicon-16x16.png", width: 16, height: 16 },
    { name: "favicon-32x32.png", width: 32, height: 32 },
    { name: "apple-touch-icon.png", width: 180, height: 180 },
    { name: "android-chrome-192x192.png", width: 192, height: 192 },
    { name: "android-chrome-512x512.png", width: 512, height: 512 },
  ];

  for (const s of sizes) {
    const outPath = path.join(outDir, s.name);
    await sharp(src)
      .resize(s.width, s.height, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(outPath);
    console.log("Created:", outPath);
  }

  const icoPath = path.join(outDir, "favicon.ico");
  try {
    const pngToIco = (await import("png-to-ico")).default;
    if (pngToIco) {
      const buf16 = await sharp(src)
        .resize(16, 16, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .png()
        .toBuffer();
      const buf32 = await sharp(src)
        .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .png()
        .toBuffer();
      const icoBuffer = await pngToIco([buf16, buf32]);
      fs.writeFileSync(icoPath, icoBuffer);
      console.log("Created:", icoPath);
    } else {
      console.warn("png-to-ico not available, skipping favicon.ico");
    }
  } catch (err) {
    console.warn("Skipping favicon.ico:", err.message);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
