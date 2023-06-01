// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./FruityNFT.sol";

// import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
// import '@openzeppelin/contracts/access/Ownable.sol';

contract TransferFruityNFT is FruityNFT {
    // mapping (uint256 => address) fruityApprovals;

    modifier onlyOwnerOf(address _ownerAddress) {
        require(msg.sender == _ownerAddress, "Caller not authorized for fruity transfer.");
        _;
    }

    function _fruityApprovalListing(address _previousOwner, address _nextOwner, uint256 _fruityId) external onlyOwnerOf(_previousOwner){
        require(walletMints[_nextOwner] < maxPerWallet, "Max fruities per wallet has been reached");
       _approve(_nextOwner, _fruityId);
    }

    function _transferfruity(address _previousOwner, address _nextOwner, uint256 _fruityId) external payable{
        require(getApproved(_fruityId) == _nextOwner);
        _transfer(_previousOwner, _nextOwner, _fruityId);
    }
}