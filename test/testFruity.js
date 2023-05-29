const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Mint Contract", function () {
    async function deployFruityNFT() {
        const FruityNFT = await ethers.getContractFactory("FruityNFT");
        const [owner,addr1, addr2] = await ethers.getSigners();
        const fruityNFT = await FruityNFT.deploy();
        await fruityNFT.deployed();
        return {FruityNFT, fruityNFT, owner, addr1, addr2};
    }

    describe("Test", function() {
        it("Should set the right owner", async function(){
            const { fruityNFT, owner } = await loadFixture(deployFruityNFT);
            expect(await fruityNFT.owner()).to.equal(owner.address);
        });
        it("Should assign the total supply of nft to the owner", async function () {
            const {fruityNFT, owner } = await loadFixture(deployFruityNFT);
            const ownerBalance = await fruityNFT.balanceOf(owner.address);
            expect(await fruityNFT.totalSupply()).to.equal(ownerBalance);
        });
    });
});