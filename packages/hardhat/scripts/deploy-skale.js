
const hre = require("hardhat");

async function main() {


  const LovelaceNFT = await hre.ethers.getContractFactory("LovelaceNFT");
  const lovelaceNFT = await LovelaceNFT.deploy();

  await lovelaceNFT.deployed();

  console.log("Lovelace.sol deployed to:", lovelaceNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });