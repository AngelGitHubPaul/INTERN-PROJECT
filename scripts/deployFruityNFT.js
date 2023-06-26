
const { ethers } = require("hardhat");

async function main() {

  const FruityNFT = await ethers.getContractFactory("FruityNFTv2");
  const fruityNFT = await FruityNFT.deploy();

  await fruityNFT.deployed();

  console.log("FruityNFT deployed to: ", fruityNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
