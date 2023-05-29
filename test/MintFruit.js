
const { time, loadFixture, } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Token contract", function () {
    // it("Deployment should assign the total supply of tokens to the owner", async function () {
    //   const [owner] = await ethers.getSigners();
  
    //   const Token = await ethers.getContractFactory("Token");
  
    //   const hardhatToken = await Token.deploy();
  
    //   const ownerBalance = await hardhatToken.balanceOf(owner.address);
    //   expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    // });
    async function deployTokenFixture(){
        const MintFruity = await ethers.getContractFactory("MintFruity");
        const mintingDeployment = await MintFruity.deploy();
        const [ owner, addr1] = await ethers.getSigners();
        await mintingDeployment.deployed();
        return {mintingDeployment, owner, addr1};
    }
    it("Should mint a new Fruity ", async function() {
        const { mintingDeployment } = await loadFixture(deployTokenFixture);
        await mintingDeployment.setFruityDna("emmanuelcalaycay17@gmail.com");
        expect( await mintingDeployment.fruities().length).to.equal(1);
    })
});
  

