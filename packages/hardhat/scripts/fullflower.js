import { ethers } from "hardhat";

async function main() {
    const contractFactory = await ethers.getContractFactory('BlossomNFT');
    const contract = await contractFactory.deploy();
    await contract.deployed();
    console.log(`Contract deployed at ${contract.address}`);

    console.log("Minting Flower #1...");
    let txn = await contract.mint("Magical Flower", "#5585b5", "#bbe4e9", "#ff6f3c"); // bg, font, seed
    await txn.wait();
    console.log("Minted!");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#a1dd70"); // p1
    await txn.wait();
    console.log("Done upgradeing! Pedal #1 Blossomed.");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#ffb5b5"); // p2
    await txn.wait();
    console.log("Done upgradeing! Pedal #2 Blossomed.");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#9896f1"); // p3
    await txn.wait();
    console.log("Done upgradeing! Pedal #3 Blossomed.");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#49beb7"); //p4
    await txn.wait();
    console.log("Done upgradeing! Pedal #4 Blossomed.");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#e46161"); // p5
    await txn.wait();
    console.log("Done upgradeing! Pedal #5 Blossomed.");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#cc376d"); // p6
    await txn.wait();
    console.log("Done upgradeing! Pedal #6 Blossomed.");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#59d4e8"); // p7
    await txn.wait();
    console.log("Done upgradeing! Pedal #7 Blossomed.");

    console.log("upgradeing Flower...");
    txn = await contract.upgrade(1, "#b485d8"); // p8
    await txn.wait();
    console.log("Done upgradeing! Pedal #8 Blossomed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});