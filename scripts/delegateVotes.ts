import { ethers } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config();
import { Ballot__factory, Ballot } from "../typechain-types";  // Adjust the import as per your project structure.

async function main() {
    const parameters = process.argv.slice(2);
    if (!parameters || parameters.length < 1)
        throw new Error("Delegate address not provided");

    const addressToDelegate = parameters[0];
    const contractAddress = process.env.BALLOT_CONTRACT_ADDRESS;  

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

    const tx = await ballotContract.delegate(addressToDelegate);
    await tx.wait();
    console.log(`Vote delegated to ${addressToDelegate}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
