import { ethers } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config();
import { Ballot, Ballot__factory } from "../typechain-types";


async function main() 
{ 
    // Receiving the parameters
    const parameters = process.argv.slice(2);
    if (!parameters || parameters.length < 2)
    throw new Error("Parameters not provided");
    const contractAddress = parameters[0];
    const myOtherParameter = parameters[1];

    // Configuring the wallet
    const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    console.log(`Using address ${wallet.address}`);
    const balanceBN = await provider.getBalance(wallet.address);
    const balance = Number(ethers.formatUnits(balanceBN));
    console.log(`Wallet balance ${balance} ETH`);
    if (balance < 0.01) {
        throw new Error("Not enough ether");
    }

    // Attaching the smart contract using Typechain
    const ballotFactory = new Ballot__factory(wallet);
    const ballotContract = await ballotFactory.attach(contractAddress) as Ballot;
    const tx = ballotContract.vote(myOtherParameter);
    const receipt = await (await tx).wait();
    console.log(`Transaction completed ${receipt?.hash}`)
          // TODO
}

main().catch((error) => {
    console.error(error); 
    process.exitCode = 1;
});