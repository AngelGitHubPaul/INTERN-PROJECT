// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';


contract FruityNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('FruityNFT', 'FN') {
        mintPrice = 0.00 ether;
        totalSupply = 0;
        maxSupply = 500;
        maxPerWallet = 1;
    }

    // sets the nft if it is mintable or not
    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner {
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    // returns the img file location (URL) of the nft
    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        // checks if the tokenId exists, then returns the nft's json resource identifier using baseTokenUri and tokenId (converted to string)
        require(_exists(_tokenId), 'Token does not exist');

        // then convert the json file name to its address on the blockchain (abi.encodePacked)
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), ".json"));
    }

    // function that checks if the withdraw is successful
    function withdraw() external onlyOwner {
        // the function first calls the [withdrawWallet] then calls the call() method, then passes the [value] as a parameter which is the amount of eth that is needed to send
        // then gets the transaction's snapshot and gets the [success] value
        (bool success, ) = withdrawWallet.call{value: address(this).balance}('');

        // then pass it on the require function
        require(success, "withdraw failed");
    }


    function mint(uint256 _quantity) public payable {
        // requires that the nft is mintable
        require(isPublicMintEnabled, 'minting not enabled');

        // checks if the value that will be transferred is equal to the total price of the nft (price * quantity)
        require(msg.value == _quantity * mintPrice, 'wrong mint value');

        // checks if there's still a supply for that nft
        require(totalSupply + _quantity <= maxSupply, 'sold out');

        // checks if the minting will exceed the nft count per wallet
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, 'you already reach the limit per wallet');

        // reiterates _safeMint function as many times as the quantity value
        for (uint256 i = 0; i < _quantity; i++) {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            // safemint is a function inside the ERC721 contract
            _safeMint(msg.sender, newTokenId);
        }
    }
}
