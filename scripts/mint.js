const hre = require("hardhat");

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("PolyNFTDrop");
    const contract = await Contract.attach(
      "0xa7eB177cF1A3A39De3b1380d374437Bfe00b8dD7" // The deployed contract address
    );
    
    let overrides = {
      value: ethers.utils.parseEther((0).toString()),
    };
    const tx = await contract.mint("0xE0E6958F2C24043372F44070B518A5a3d5cB2aB4");
  
    console.log("Minted: ", tx);
  } catch (error) {
    console.log(error);
  }  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });