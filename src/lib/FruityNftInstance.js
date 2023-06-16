import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0x94B88E88093033AB2B8FD1107f9722C81D82eCA1';
await window.ethereum.request({ method: 'eth_requestAccounts' })

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
export const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
export const userAddress = await signer.getAddress();