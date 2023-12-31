import { ethers } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config();
import { Ballot__factory } from "../typechain-types";


async function main() { 
  // Receiving parameters
  const proposals = process.argv.slice(2);
  if (!proposals || proposals.length < 1)
    throw new Error("Proposals not provided");
  console.log("~~~~~~~~~~~~~ Deploying Ballot contract ~~~~~~~~~~~~~");
  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });

  // Configuring the provider
  // Can connect to any blockchain using the default provider with the line below
  // const provider = ethers.getDefaultProvider("sepolia") 
  const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
  const lastBlock = await provider.getBlock('latest');
  const lastBlockNumber = lastBlock?.number;
  console.log(`Last block number was ${lastBlockNumber}`);
  const lastBlockTimestamp = lastBlock?.timestamp ?? 0;
  const lastBlockDate = new Date(lastBlockTimestamp * 1000);
  console.log(`Last block timestamp: ${lastBlockTimestamp} (${lastBlockDate.toLocaleDateString()} ${lastBlockDate.toLocaleTimeString()})`);

  // Configuring the wallet
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider)
  console.log(`Using address ${wallet.address}`);
  const balanceBN = await provider.getBalance(wallet.address);
  const balance = Number(ethers.formatUnits(balanceBN));
  console.log(`Wallet balance ${balance} ETH`);
  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }

  // Deploying the smart contract using Typechain
  const ballotFactory = new Ballot__factory(wallet);
  const ballotContract = await ballotFactory.deploy(
    proposals.map(ethers.encodeBytes32String)
  );
  console.log('Waiting for deployment...')
  await ballotContract.waitForDeployment();
  console.log(`Contract deployed to ${ballotContract.target}`);
  for (let index = 0; index < proposals.length; index++) {
    const proposal = await ballotContract.proposals(index);
    const name = ethers.decodeBytes32String(proposal.name);
    console.log({ index, name, proposal });
  }
}

main().catch((error) => {
    console.error(error); 
    process.exitCode = 1;
});