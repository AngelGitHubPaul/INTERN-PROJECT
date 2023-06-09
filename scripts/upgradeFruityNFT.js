const { ethers, upgrades } = require("hardhat");

async function main() {
    const FruityNFTv2 = await ethers.getContractFactory('FruityNFTv2');
    await upgrades.upgradeProxy('0xc6e7DF5E7b4f2A278906862b61205850344D4e7d', FruityNFTv2);
    console.log('Contract upgraded');
}

main();