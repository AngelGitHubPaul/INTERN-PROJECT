import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0xA42dD711802428A9ffA35eDdEe23651AC5d71171';
await window.ethereum.request({ method: 'eth_requestAccounts' })

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
export const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
export const userAddress = await signer.getAddress();