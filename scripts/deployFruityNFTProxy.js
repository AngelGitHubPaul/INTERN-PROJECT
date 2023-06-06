const { ethers, upgrades } = require("hardhat");

async function main(){
    const Fruity = await ethers.getContractFactory("FruityNFT");
    const fruity = await upgrades.deployProxy(Fruity, [42]);
    await fruity.deployed();
    console.log("FruityNFT contract deployed to: ", fruity.address);
}

main();