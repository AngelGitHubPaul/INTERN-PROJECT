// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./FruityNFT.sol";
// import { ethers } from "ethers";
import "hardhat/console.sol";

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import '@openzeppelin/contracts/utils/Address.sol';

contract FruityShop is FruityNFT {
    using Address for address payable;
    using SafeMath for uint256;

    mapping (uint256 => uint256) fruityTransferPricings;
    mapping (uint256 => address) fruityOwnerListing;

    // mapping (uint256 => address) fruityApprovals;

    constructor() payable {}

    modifier onlyOwnerOf(address _ownerAddress) {
        require(msg.sender == _ownerAddress, "Caller not authorized for this transaction.");
        _;
    }

    function fruityListing(uint256 _fruityId, uint256 _fruityPrice) external {
        require(ownerOf(_fruityId) == msg.sender, "Unauthorized Owner");
        require(_fruityPrice > 0, "Fruity's price cannot be zero");

        uint256 fruityPrice = 0.000 ether;
        fruityPrice += _fruityPrice;

        fruityTransferPricings[_fruityId] = fruityPrice;
        fruityOwnerListing[_fruityId] = msg.sender;
    }

    function buyFruity(uint256 _fruityId) external {
        require(_exists(_fruityId), "This Fruity does not exist!");
        require(msg.sender != fruityOwnerListing[_fruityId], "Owner cannot buy his own Fruity on the listing");
        require(fruityOwnerListing[_fruityId] != address(0), "This Fruity is not in \"for sale\" listing right now");
        require((msg.sender.balance / 1e18) >= fruityTransferPricings[_fruityId], "Insufficient wallet balance");
        require(walletMints[msg.sender] < maxPerWallet, "Maximum Fruity per wallet has been reached");

        approve(msg.sender, _fruityId);
        transferFruityWithETH(_fruityId);
    }

    // this will be called by the next owner of the fruity nft
    function transferFruityWithETH(uint256 _fruityId) public payable {
        uint256 fruityPrice = fruityTransferPricings[_fruityId];
        address payable owner = payable(fruityOwnerListing[_fruityId]);
        require(fruityOwnerListing[_fruityId] != address(0), "This fruity is not on the listing");
        require(getApproved(_fruityId) == msg.sender, "Token approval not found");
        require(msg.sender !=  owner, "Your wallet address is the recipient, you cannot send ETH to yourself");
        require((msg.sender.balance / 1e18) >= fruityPrice, "Insufficient Balance");

        bool success = owner.send(fruityPrice);
        require(success, "Transaction failed, please try again");
        transferFrom(owner, msg.sender, _fruityId);
    }

    function giftFruity(address _nextOwner, uint256 _fruityId) external payable onlyOwner {
        require(ownerOf(_fruityId) == msg.sender, "NFTTransfer: Invalid owner");

        transferFrom(msg.sender, _nextOwner, _fruityId);
    }
}



    // function _requestFruityTransfer(uint256 _fruityId) external {
    //     require(msg.sender != fruityOwnerListing[_fruityId], "Owner cannot request on his own Fruity Listing");
    //     require(walletMints[msg.sender] < maxPerWallet, "Max NFT per wallet has been reached");
    //     require((msg.sender.balance / 1e18) >= fruityTransferPricings[_fruityId], "Insufficient Wallet Balance");

    //     fruityApprovals[_fruityId] = msg.sender;
    // }

    // function approveFruityTransfer(address _nextOwner, uint256 _fruityId) external {
    //     require(ERC721.ownerOf(_fruityId) == msg.sender, "ERC721: Unauthorized Fruity Transfer Approval");
    //     require(fruityApprovals[_fruityId] == _nextOwner, "Address does not exist in the approved listing");
    //     require(walletMints[_nextOwner] < maxPerWallet, "Requester's max Fruity per wallet has been reached");

    //     approve(fruityApprovals[_fruityId], _fruityId);
    // }