# Week-2 Weekend Project

This document forms part of the week 2 weekend project for the Solidity Bootcamp. 

Members from Team 2 who worked on this project: Ignas Apšega, Lyle Davids, Wendwossen Dufera and Cameron Mcewan

For week 2, we developed and ran scripts for “Ballot.sol”  to give voting rights, casting votes, delegating votes and querying results. 

## Feedback

### Ignas Apšega
* **Deployment**: I deployed smart contract with proposal1 proposal2 proposal3 [TX Hash](https://sepolia.etherscan.io/tx/0xc4c1dcf8fcd78d0cda5194c0d2a14a7ee87a5de9b2cfcb0cb21763ac16fe546b)
* **Voting**: Voted for Proposal 2 [TX Hash](https://sepolia.etherscan.io/tx/0x986fabbe88970ae0310ea9ac83216d916d89641efe31d0d64ac6098648f4ede2)
* **Delegate**: I tried to delegate the vote to the same wallet adress I used to deploy the smart contract however I got reverted with "You already voted."
* **Right to vote**: I tried giving rights to Lyle but got reverted and it succeeded [TX Hash](https://sepolia.etherscan.io/tx/0x6152b49ff5cb5003f145a1ecd8672bf7c3d5c26db960c404c525ba5d646af891)
* **Winning Proposal**: proposal2 was the winning vote

### Lyle Davids
* **Deployment**: Deployed to Sepolia Testnet [TX Hash](https://sepolia.etherscan.io/tx/0x1bb3af11b16cb3ed3b05d633cd0e4b8cc3c8b0f726c1c76701d3401262b2651d)
* **Voting**: Successfully voted for Proposal 1, the first proposal in the index[0] [TX Hash](https://sepolia.etherscan.io/tx/0x724009f96cbdb1d77ea187e94c69d5b794ff3e4e36beb8582b0dddd3e8a3a8d2), Tried to vote again but this was reverted because I already voted
* **Delegate**: Tried to delegate my vote to a second address but transaction was reverted because I already voted
* **Right to vote**: As a deployer, I was also the chairperson. Gave voting rights to Wendwossen [TX Hash](https://sepolia.etherscan.io/tx/0x79c9f36abe05e1912eae4acbecc657e2694de76763a6f1f5e4489158dd0448ef)
* **Winning Proposal**: At the time of writing Proposal 1 was the winning vote

### Wendwossen Dufera
I [deployed](https://sepolia.etherscan.io/tx/0xe9d30b7f1a079bedccc1beec13496f4cc62606f344decba2d66ca7900fe5f060) the Ballot smart contract and interacted with the following functions:


- **vote**: I successfully voted for proposals at index 1, which is "Proposal1." I deployed the Ballot contract by passing three proposals, namely, "Proposal1," "Proposal2," and "Proposal3." The transaction hash for this operation is [Transaction Hash](https://sepolia.etherscan.io/tx/0x533f3e3a9a4770ea66590f04e9741ef622f945c2405c1b1d3ba17aa216100cb3).

- **giveRightToVote**: I successfully granted the right to vote to Lyle Davids. As the chairperson in the contract (because I was the one who deployed it), I had the authority to give voting rights. The transaction hash for this operation is [Transaction Hash](https://sepolia.etherscan.io/tx/0xf5651e7f5cb0287ac9814a714484f1c588d2baa2e58d64293b5aab338d4d64f6).

- **delegate**: When I attempted to delegate my vote, I received a reversion with the message "You already voted," as I had already voted for "Proposal2" and did not have any vote count that I could delegate to another voter.

- **winnerName**: I was successful in obtaining the name of the winning proposal by the time I made the request. At that time, "Proposal2" was the winner.

### Cameron McEwan
