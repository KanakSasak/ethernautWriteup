const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  // Assuming you have a contract named "MyContract" already deployed
  const contractAddress = "0x0caeDaeb3dA30c68f3a1BD91D45B6959a4383DC4";
  const MyContract = await ethers.getContractFactory("Instance");
  const contractInstance = MyContract.attach(contractAddress);

  const resp1 = await contractInstance.info();
  console.log(resp1);
  const resp2 = await contractInstance.info1();
  console.log(resp2);
  const resp3 = await contractInstance.info2("hello");
  console.log(resp3);
  const resp4 = await contractInstance.infoNum();
  console.log(resp4);
  const resp5 = await contractInstance.info42();
  console.log(resp5);
  const resp6 = await contractInstance.theMethodName();
  console.log(resp6);
  const resp7 = await contractInstance.method7123949();
  console.log(resp7);
  const resp8 = await contractInstance.password();
  console.log(resp8);
  const resp9 = await contractInstance.authenticate("ethernaut0");
  console.log(resp9);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
