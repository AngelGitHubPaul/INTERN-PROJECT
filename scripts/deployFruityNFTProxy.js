const { ethers, upgrades } = require("hardhat");

async function main(){
    const FruityNFT = await ethers.getContractFactory("FruityNFT");
    const fruity = await upgrades.deployProxy(FruityNFT);
    await fruity.deployed();
    console.log("FruityNFT contract deployed to: ", fruity.address);
}

main();