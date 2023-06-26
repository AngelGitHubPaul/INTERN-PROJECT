import { ethers } from 'ethers';
import contractABI from '../FruityNFT.json';
import swal from 'sweetalert';

const contractAddress = '0x9008EAFEccd99D48509F59511C73177Ca69cCdd7';
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
            swal("Please Connect to MetaMask", "", "warning");
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