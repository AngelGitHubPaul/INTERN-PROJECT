import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0x76272fce85921aE96F09e43C9015Cc975a7c0f5F';
await window.ethereum.request({ method: 'eth_requestAccounts' })

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
export const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
export const userAddress = await signer.getAddress();