

const hre = require("hardhat");
const fs = require("fs");

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
  const wallet = (process.env.MNEMONIC && process.env.MNEMONIC.length > 0) ? 
  ethers.Wallet.fromMnemonic(process.env.MNEMONIC) : 
  new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  console.log(`Using address ${wallet.address}`);

  const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    process.env.MUMBAI_ALCHEMY_KEY
  );

  const signer = wallet.connect(provider);

  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));
  console.log(`Wallet balance ${balance}`);

  if (balance < 0.01) {
    throw new Error("Not enough Matic");
  }

  const contractFactory = await hre.ethers.getContractFactory("LovelaceNFT");
  
  const contract = await contractFactory.deploy();

  console.log("Deploying contract...");
  console.log("Awaiting confirmations");

  await contract.deployed();

  fs.writeFileSync(
    "../next-app/utils/contractAddress.js",
    `export const contractAddress = "${contract.address}"`
  );

  console.log("Address: ", contract.address);
  console.log("Contract address saved in ../next-app/utils/contractAddress.js");

  console.log("Minting Flower #1...");
  let txn = await contract.mint("H.E.R. DAO LATAM", "#5585b5", "#bbe4e9", "#ff6f3c"); // bg, font, seed
  await txn.wait();
  console.log("Minted!");

  console.log("Upgrading Flower...");
  txn = await contract.upgrade(1, "#a1dd70", {gasLimit: 100000});
  await txn.wait();
  console.log("Done! Pedal #1 Blossomed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });