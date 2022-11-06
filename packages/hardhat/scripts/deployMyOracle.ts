
import { ethers } from "hardhat";

async function main() {
  const MyOracle = await ethers.getContractFactory("MyOracle");
  const myOracle = await MyOracle.deploy(
    "0x8bB539897994476bc99f4F33C267AAEE4cf4325B", // Oracle address on Optimism testnet
    [
      // ethers.utils.hexZeroPad("0x47454d494e49", 32), // represents "GEMINI"
      // ethers.utils.hexZeroPad("0x4249545354414d5", 32)  // represents "BITSTAMP"
      "0x000000000000000000000000000000000000000000000000000047454d494e49",  // represents "GEMINI"
      "0x00000000000000000000000000000000000000000000000004249545354414d5"  // represents "BITSTAMP"
    ]
  );
  console.log(`MyOracle was deployed to ${myOracle.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});