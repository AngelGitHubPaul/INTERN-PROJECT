import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0xefcEEC978F205D0B8448Ac11021B7F4Ba6f8e02d';
export let contract;
export let userAddress;
export let isConnected = false;

export async function signInToMetamask() {
    try {
        const metamaskAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Metamask login address: " + metamaskAccount);
        isConnected = true;
    } catch (err) {
        if (err.code === 4001) {
            alert("Please Connect to MetaMask");
        } else {
            console.log(err.code, err.message);
        }
    }
}


export async function setContractInstance() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
    userAddress = await signer.getAddress();
    console.log("signer address" + userAddress);
}