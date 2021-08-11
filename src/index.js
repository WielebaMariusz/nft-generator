const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const layers = require("./config");

const canvas = createCanvas(500, 500);
const ctx = canvas.getContext("2d");
const edition = 10;

const saveLayer = (edition) => {
  fs.writeFileSync(
    `./src/output/${edition}set.png`,
    canvas.toBuffer("image/png")
  );
};

const drawLayer = async (layer, edition) => {
  let element =
    layer.elements[Math.floor(Math.random() * layer.elements.length)];
  const image = await loadImage(`${layer.location}/${element.fileName}`);
  ctx.drawImage(image, 0, 0, 500, 500);
  saveLayer(edition);
};
const assets = [];

for (let i = 1; i <= edition; i++) {
  layers.forEach((layer, index) => {
    drawLayer(layer, i);
  });
  console.log(i, "NFT item created! 🚀");
}

// for (let i = 1; i <= edition; i++) {
//   let assetId = "";

//   layers.forEach((layer, index) => {
//     // console.log("layer", layer);
//     const randomNumber = Math.floor(Math.random() * layer.elements.length);
//     assetId += randomNumber;
//   });
//   if (!assets.includes(assetId)) {
//     layer;
//     console.log("👀", assetId);
//     assets.push(assetId);
//     // drawLayer(layer, i);
//     console.log(i, "NFT item created! 🚀");
//   }
//   console.log("Fiish");
// }
