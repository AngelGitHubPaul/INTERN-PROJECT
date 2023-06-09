// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
// import '@openzeppelin/contracts-upgradeable/token/ERC721/ERC';
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// import "@openzeppelin/contracts/token/ERC721/";
contract FruityNFT is Initializable, ERC721Upgradeable, OwnableUpgradeable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    uint256 public currentSupply = 0;
    uint256 public maxSupply;
    uint256 public constant maxPerWallet = 1;
    mapping(address => uint256) public walletMints;

    // constructor() payable ERC721("FruityNFT", "FN") {}
    function initialized() public initializer {
        __ERC721_init("FruityNFT", "FN");
        __Ownable_init();
        maxSupply = 10;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://nftstorage.link/ipfs/bafybeieefnyr7cwxmmlmu742p2rshdge7uaogt34bvxmffrh5xmyldejne/";
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

    function safeMint(address to) external {
        require(walletMints[to] == 0, "Your wallet has already minted a Fruity");
        uint256 tokenId = _tokenIdCounter.current() + 1;
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        walletMints[to] = tokenId;
        currentSupply++;
        tokenURI(tokenId);
    }

    function safeBurn(address to, uint256 _tokenId) external {
        require(_exists(_tokenId), "This NFT does not exists");
        require(_ownerOf(_tokenId) == to, "You are not the owner of this nft, sus");
        _burn(_tokenId);
        _tokenIdCounter.decrement();
        walletMints[to] = 0;
        currentSupply--;
    }

    function showsupply() external pure returns (uint256) {
        return maxPerWallet;
    }

}
