// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
// import '@openzeppelin/contracts/access/Ownable.sol';

contract MintFruity {
    // Fruity data / metadata
    struct Fruity {
        uint fruityDna;
        uint fruityIndex;
        string originalOwnerEmail;
        address currentOwnerWallet;
    }
    // array of fruities that are minted on blockchain
    Fruity[] public fruities;
    // mapping of fruityDna related on their owner's address
    mapping(address => uint) public fruitsToOwner;

    // function on generating fruityDna
    function setFruityDna(string memory _emailAddress) public pure returns(uint){
        uint fruitDna = uint(keccak256(abi.encodePacked(_emailAddress)));
        return fruitDna;
    }

    // generating fruity by pushing a fruit struct on the fruities variable
    function generateFruity(address _walletAddress, string memory _emailAddress) public {
        fruities.push(Fruity(setFruityDna(_emailAddress), fruities.length + 1, _emailAddress, _walletAddress));
    }
}
