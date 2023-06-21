import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';

const contractAddress = '0x9008EAFEccd99D48509F59511C73177Ca69cCdd7';
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
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
    userAddress = await signer.getAddress();
    console.log("signer address" + userAddress);
}