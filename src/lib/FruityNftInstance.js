import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0x3dF34C7368A8AD1D3258d93a8e4Ba2b77f391EF7';
await window.ethereum.request({ method: 'eth_requestAccounts' })

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
export const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
export const userAddress = await signer.getAddress();