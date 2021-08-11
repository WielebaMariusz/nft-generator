const fs = require('fs');

const dir = __dirname;
const deafultPosition = { x: 0, y: 0 };
const width = 500;
const height = 500;

const getFileName = fileName => {
  return fileName.replace(/.png/g, '');
};

const getraRity = fileName => {
  const regx = /rare-/g;
  return regx.test(fileName);
};

const getElements = path => {
  return fs
    .readdirSync(path)
    .filter(item => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((item, index) => {
      return {
        id: index + 1,
        fileName: item,
        name: getFileName(item),
        rarity: getraRity(item)
      };
    });
};

const layers = [
  {
    id: 1,
    name: 'background',
    location: `${dir}/assets/backgrounds`,
    position: deafultPosition,
    elements: getElements(`${dir}/assets/backgrounds`)
  },
  {
    id: 2,
    name: 'body',
    location: `${dir}/assets/body`,
    position: deafultPosition,
    elements: getElements(`${dir}/assets/body`)
  },
  {
    id: 3,
    name: 'clothes',
    location: `${dir}/assets/clothes`,
    position: deafultPosition,
    elements: getElements(`${dir}/assets/clothes`)
  },
  {
    id: 4,
    name: 'eyes',
    location: `${dir}/assets/eyes`,
    position: deafultPosition,
    elements: getElements(`${dir}/assets/eyes`)
  },
  {
    id: 5,
    name: 'mouth',
    location: `${dir}/assets/mouths`,
    position: deafultPosition,
    elements: getElements(`${dir}/assets/mouths`)
  },
  {
    id: 6,
    name: 'materialGoods',
    location: `${dir}/assets/materialGoods`,
    position: deafultPosition,
    elements: getElements(`${dir}/assets/materialGoods`)
  }
];

module.exports = layers;
