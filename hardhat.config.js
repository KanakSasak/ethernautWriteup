require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
	compilers: [
		{
			version: "0.4.23",
		  },
		{
		  version: "0.6.0",
		},
		{
			version: "0.8.0",
		},
		{
		  version: "0.8.6",
		},
		{
			version: "0.8.13",
		}, 
	  ]
	},  
	networks: {
		hardhat: {
			mining: {
				auto: true,
				interval: 0,
				mempool: {
					order: "priority",
				},
			},
		},
		hardhatx: {
			url: "http://127.0.0.1:8545",
			accounts: [
				`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`,
			],
		},
		htb: {
			url: "http://167.172.61.89:32496/rpc",
			accounts: [
				`0xda0fc7edfed90ae7b0c11845564fb006f0df0573e55c6b298e8abc01eb7f3ec3`,
			],
		},
		mumbai: {
			url: "https://polygon-mumbai.g.alchemy.com/v2/vZF-bLS5x-6QJAXdpq-LNZ4S2_TZi2_P",
			accounts: [
				`0xc7e1504b88e4427aa61ca1e3d2bedd49c40b2c051a3288331366ed7100d72989`,
			],
			allowUnlimitedContractSize: true,
		},
	},
};
