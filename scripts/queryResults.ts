import { ethers } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config();
import { Ballot__factory, Ballot } from "../typechain-types";  // Adjust the import as per your project structure.

async function main() {
    const contractAddress = process.env.BALLOT_CONTRACT_ADDRESS;  // Replace with your contract address

    if (!contractAddress) {
        throw new Error("Contract address not defined in the environment variables.");
    }

    const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    console.log(`Using address ${wallet.address}`);
    const balanceBN = await provider.getBalance(wallet.address);
    const balance = Number(ethers.formatUnits(balanceBN));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }

    const ballotFactory = new Ballot__factory(wallet);
    const ballotContract = ballotFactory.attach(contractAddress) as Ballot;

    const winningProposal = await ballotContract.winningProposal();
    const winnerName = await ballotContract.winnerName();
    const decodedwinnerName = ethers.decodeBytes32String(winnerName);
    console.log(`Winning Proposal Index: ${winningProposal}`);
    console.log(`Winner Name: ${decodedwinnerName}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
