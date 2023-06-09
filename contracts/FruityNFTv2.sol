// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
// import '@openzeppelin/contracts-upgradeable/token/ERC721/ERC';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// import "@openzeppelin/contracts/token/ERC721/";
contract FruityNFTv2 is Initializable, ERC721Upgradeable, OwnableUpgradeable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    uint256 public maxSupply;
    uint256 public constant maxPerWallet = 1;
    mapping(address => uint256) public walletMints;

    // constructor() payable ERC721("FruityNFT", "FN") {}
    function initialized() public initializer {
        __ERC721_init("FruityNFT", "FN");
        __Ownable_init();
        maxSupply = 20;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://nftstorage.link/ipfs/bafybeibmzuf32cgb7rbai7hkr4hwew7vdildb6sjnoivgcq5aod4n423mi/";
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        // checks if the tokenId exists
        require(_exists(_tokenId), 'Token does not exist');
        
        // Convert the tokenId to a string
        string memory tokenIdStr = _tokenId.toString();

        // Concatenate the base URL, tokenId, and ".json" extension
        string memory tokenUri = string(abi.encodePacked(_baseURI(), tokenIdStr, ".json"));

        return tokenUri;
    }

    function safemint(address to) public {
        uint256 tokenId = _tokenIdCounter.current() + 1;
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        tokenURI(tokenId);
    }

    function showsupply() public view returns (uint256) {
        return maxSupply;
    }
}
