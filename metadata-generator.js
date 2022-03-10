// -------------------------------------------------------------------
// Read the folder for pinata API
// -------------------------------------------------------------------
const fs = require('fs');
const imageDir = fs.readdirSync("./thankyounft");
imageDir.forEach(img => {
  const metadata = {
    name: `ThankyouNFT ${img.split(".")[0]}`,
    description: "A Thank You Collection",
    image: `ipfs://QmcwCqHHBbMA4PuezT4a6jSdbpoixJvnZgydwfkcs7iHdu/${img.split(".")[0]}.png`,
    attributes: []
  }
  fs.writeFileSync(`./metadata/${img.split(".")[0]}`, JSON.stringify(metadata))
});