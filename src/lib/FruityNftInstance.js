import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0x2BC84E9783384ED4425B7d916F965f3d322bBE33';
await window.ethereum.request({ method: 'eth_requestAccounts' })

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
export const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
export const userAddress = await signer.getAddress();