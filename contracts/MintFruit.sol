// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

abstract contract MintFruit is ERC721, Ownable{

    struct Fruit {
        uint fruitDna;
        uint fruitIndex;
        string originalOwnerEmail;
        address currentOwnerWallet;
    }

    Fruit[] public fruits;
    mapping(address => uint) public fruitsToOwner;

    function setFruitDna(string memory _emailAddress) private pure returns(uint){
        uint fruitDna = uint(keccak256(abi.encodePacked(_emailAddress)));
        return fruitDna;
    }

    function generateFruit(address _walletAddress, string memory _emailAddress) public {
        fruits.push(Fruit(setFruitDna(_emailAddress), fruits.length + 1, _emailAddress, _walletAddress));
    }
}