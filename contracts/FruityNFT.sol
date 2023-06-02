// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';


contract FruityNFT is ERC721URIStorage, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('FruityNFT', 'FN') {
        mintPrice = 0.00 ether;
        totalSupply = 0;
        maxSupply = 500;
        maxPerWallet = 1;
        baseTokenUri = "https://ipfs.io/ipfs/bafybeiabmqfka5hric53a7yxapqklhuhou22vhdlchfnvy6padxuxmapyy/";
    }

    // this is the url that the opensea will call for the image of nft, we override it so that we can assign the baseTokenUri to this function
    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        // checks if the tokenId exists
        require(_exists(_tokenId), 'Token does not exist');
        // then convert the json file name to its address on the blockchain (abi.encodePacked)
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), ".json"));
    }

    function mint(uint256 _quantity) public payable {
        require(totalSupply + _quantity <= maxSupply, 'sold out');

        // checks if the minting will exceed the mint limit count per wallet
        require(walletMints[msg.sender] < maxPerWallet, 'you already reach the limit per wallet');

        uint256 newTokenId = totalSupply + 1;
        // safemint is a function inside the ERC721 contract
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI(newTokenId));
        totalSupply++;
        walletMints[msg.sender]++;
    }
}
