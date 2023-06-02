// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FruityNFT is ERC721URIStorage, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    // address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('FruityNFT', 'FN') {
        mintPrice = 0.00 ether;
        totalSupply = 0;
        maxSupply = 500;
        maxPerWallet = 1;
        baseTokenUri = "https://ipfs.io/ipfs/bafybeiabmqfka5hric53a7yxapqklhuhou22vhdlchfnvy6padxuxmapyy/;";
    }

    // sets the nft if it is mintable or not
    // function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner {
    //     isPublicMintEnabled = _isPublicMintEnabled;
    // }

    // sets the base uri of the nft
    // function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
    //     baseTokenUri = "https://ipfs.io/ipfs/bafybeiabmqfka5hric53a7yxapqklhuhou22vhdlchfnvy6padxuxmapyy/;";
    // }
    // this is the url that the opensea will call for the image of nft, we override it so that we can assign the baseTokenUri to this function
    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        // checks if the tokenId exists
        require(_exists(_tokenId), 'Token does not exist');
        // then convert the json file name to its address on the blockchain (abi.encodePacked)
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), ".json"));
    }

    // function that checks if the withdraw is successful
    // function withdraw() external onlyOwner {
    //     // the function first calls the [withdrawWallet] then calls the call() method, then passes the [value] as a parameter which is the amount of eth that is needed to send
    //     // then gets the transaction's snapshot and gets the [success] value
    //     (bool success, ) = withdrawWallet.call{value: address(this).balance}('');

    //     // then pass it on the require function
    //     require(success, "withdraw failed");
    // }


    function mint(uint256 _quantity) public payable {
        // requires that the nft is mintable
        // require(isPublicMintEnabled, 'minting not enabled');

        // checks if the value that will be transferred is equal to the total price of the nft (price * quantity)
        // require(msg.value == _quantity * mintPrice, 'wrong mint value');

        // checks if there's still a supply for that nft
        require(totalSupply + _quantity <= maxSupply, 'sold out');

        // checks if the minting will exceed the mint limit count per wallet
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, 'you already reach the limit per wallet');


        uint256 newTokenId = totalSupply + 1;
        // safemint is a function inside the ERC721 contract
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI(newTokenId));
        totalSupply++;
        walletMints[msg.sender]++;
        
    }
}
