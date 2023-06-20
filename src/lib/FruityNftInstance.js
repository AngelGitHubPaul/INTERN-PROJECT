import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0x3dF34C7368A8AD1D3258d93a8e4Ba2b77f391EF7';
export let contract;
export let userAddress;

export async function signInToMetamask() {
    const metamaskAccount = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((err)=>{
        if(err.code === 4001){
            console.log("Please Connect to metamask")
        } else {
            console.log(err.code, err.message)
        }
    })
    console.log("metamask log in address" + metamaskAccount)
}

export async function setContractInstance() {
    if (typeof window.ethereum === 'undefined') {
        signInToMetamask();
    } else {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
        userAddress = await signer.getAddress();
        console.log("signer address" + userAddress);
        return { contract, userAddress };
    }
}