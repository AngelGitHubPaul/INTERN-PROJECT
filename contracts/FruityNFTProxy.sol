// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';

contract FruityNFTProxy is Initializable, UUPSUpgradeable {
    address private _admin;
    address private _implementation;

    event ContractUpgraded(address indexed newImplementation);

    function initialize(address admin, address implementation) public initializer {
        _admin = admin;
        _implementation = implementation;
    }

    modifier onlyAdmin() {
        require(msg.sender == _admin, "FruityNFT Proxy: Unauthorized access to this function");
        _;
    }

    function implementations() public view returns (address) {
        return _implementation;
    }

    function changeAdmin(address newAdmin) public onlyAdmin {
        _admin = newAdmin;
    }

    function upgradeTo(address newImplementation) public override onlyAdmin {
        require(newImplementation != address(0), "Fruity Proxy: New contract address cannot be empty");
        require(newImplementation != _implementation, "FruityNFT Proxy: New Contract address is the same as the current contract address");
        _implementation = newImplementation;
        emit ContractUpgraded(newImplementation);
    }

    function _authorizeUpgrade(address) internal override onlyAdmin {}

    uint256[50] private __gap;
}
