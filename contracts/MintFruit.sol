// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

abstract contract MintFruit is ERC721, Ownable{

    struct Fruity {
        uint fruityDna;
        uint fruityIndex;
        string originalOwnerEmail;
        address currentOwnerWallet;
    }

    Fruity[] public fruities;
    mapping(address => uint) public fruitsToOwner;

    function setFruityDna(string memory _emailAddress) private pure returns(uint){
        uint fruitDna = uint(keccak256(abi.encodePacked(_emailAddress)));
        return fruitDna;
    }

    function generateFruity(address _walletAddress, string memory _emailAddress) public {
        fruities.push(Fruity(setFruityDna(_emailAddress), fruities.length + 1, _emailAddress, _walletAddress));
    }
}