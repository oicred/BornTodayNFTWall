const hre = require("hardhat");
const BASE_URI = "ipfs://QmeN87cUdzwAjCzc8kJ9zV4tETzG7Y4ZnT8eMbXfibY4Wz";
const TOKEN_NAME = "MyThankYOU";
const TOKEN_SYMBOL = "MYTHANKYOU";
const PRICE = "0" // 0.5 in WEI

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("PolyNFTDrop");
    const contract = await Contract.deploy(BASE_URI, PRICE, TOKEN_NAME, TOKEN_SYMBOL);
  
    await contract.deployed();
  
    console.log(`contract deployed at ${contract.address}`); 
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