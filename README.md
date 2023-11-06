# Week-2 Weekend Project

This document forms part of the week 2 weekend project for the Solidity Bootcamp. 

Members from Team 2 who worked on this project: Ignas Apšega, Lyle Davids, Wendwossen Dufera and Cameron Mcewan

For week 2, we developed and ran scripts for “Ballot.sol”  to give voting rights, casting votes, delegating votes and querying results. 

## Feedback

### Ignas Apšega
* **Deployment**: I deployed smart contract with proposal1 proposal2 proposal3 [TX Hash](https://sepolia.etherscan.io/tx/0xc4c1dcf8fcd78d0cda5194c0d2a14a7ee87a5de9b2cfcb0cb21763ac16fe546b)
* **Voting**: Voted for proposal2 [TX Hash](https://sepolia.etherscan.io/tx/0x986fabbe88970ae0310ea9ac83216d916d89641efe31d0d64ac6098648f4ede2)
* **Delegate**: I tried to delegate the vote to the same wallet adress I used to deploy the smart contract however I got reverted with "You already voted."
* **Right to vote**: I tried giving rights to Lyle and it succeeded [TX Hash](https://sepolia.etherscan.io/tx/0x6152b49ff5cb5003f145a1ecd8672bf7c3d5c26db960c404c525ba5d646af891)
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


I executed the deploy script successfully using ts-node to deploy to Sepolia testnet [here](https://sepolia.etherscan.io/address/0x13Deda0De125d768e795a6E4cAc0787955E90E99#readContract), with three dummy proposals (called Proposal1, Proposal2, Proposal3):
```
npx ts-node ./scripts/DeployWithEthers.ts Proposal1 Proposal2 Proposal3
```
Returned the following logs:

```
~~~~~~~~~~~~~ Deploying Ballot contract ~~~~~~~~~~~~~
Proposals: 
Proposal N. 1: Proposal1
Proposal N. 2: Proposal2
Proposal N. 3: Proposal3
Last block number was 4642649
Last block timestamp: 1699291332 (11/6/2023 5:22:12 PM)
Using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
Wallet balance 0.49765012497311584 ETH
Waiting for deployment...
Contract deployed to 0x13Deda0De125d768e795a6E4cAc0787955E90E99
{
  index: 0,
  name: 'Proposal1',
  proposal: Result(2) [
    '0x50726f706f73616c310000000000000000000000000000000000000000000000',
    0n
  ]
}
{
  index: 1,
  name: 'Proposal2',
  proposal: Result(2) [
    '0x50726f706f73616c320000000000000000000000000000000000000000000000',
    0n
  ]
}
{
  index: 2,
  name: 'Proposal3',
  proposal: Result(2) [
    '0x50726f706f73616c330000000000000000000000000000000000000000000000',
    0n
  ]
}
```

I executed the CastVote.ts script and successfully cast a vote on Proposal 2 (index 1)
```
npx ts-node ./scripts/CastVote.ts 0x13Deda0De125d768e795a6E4cAc0787955E90E99 1
```
Logs: 
```
Last block number: 4642694
Last block timestamp: 1699292016 (function toLocaleDateString() { [native code] })
Using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
Transaction completed 0x76ae8abffaf6664e7ffa9c2f6e333596aa1f8cd73583b63d2453f0175f5a816d
```

I then tried to vote again on the same contract, this time for Proposal3
```
npx ts-node ./scripts/CastVote.ts 0x13Deda0De125d768e795a6E4cAc0787955E90E99 2
```
Logs:
```
Last block number: 4642705
Last block timestamp: 1699292196 (function toLocaleDateString() { [native code] })
Using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
Error: execution reverted: "Already voted." (action="estimateGas", data="0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000e416c726561647920766f7465642e000000000000000000000000000000000000", reason="Already voted.", transaction={ "data": "0x0121b93f0000000000000000000000000000000000000000000000000000000000000002", "from": "0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF", "to": "0x13Deda0De125d768e795a6E4cAc0787955E90E99" }, invocation=null, revert={ "args": [ "Already voted." ], "name": "Error", "signature": "Error(string)" }, code=CALL_EXCEPTION, version=6.8.1)
    at makeError (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/utils/errors.ts:694:21)
    at getBuiltinCallException (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/abi/abi-coder.ts:118:21)
    at Function.getBuiltinCallException (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/abi/abi-coder.ts:230:16)
    at JsonRpcProvider.getRpcError (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/providers/provider-jsonrpc.ts:906:32)
    at /Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/providers/provider-jsonrpc.ts:526:45
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'CALL_EXCEPTION',
  action: 'estimateGas',
  data: '0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000e416c726561647920766f7465642e000000000000000000000000000000000000',
  reason: 'Already voted.',
  transaction: {
    to: '0x13Deda0De125d768e795a6E4cAc0787955E90E99',
    data: '0x0121b93f0000000000000000000000000000000000000000000000000000000000000002',
    from: '0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF'
  },
  invocation: null,
  revert: {
    signature: 'Error(string)',
    name: 'Error',
    args: [ 'Already voted.' ]
  },
  shortMessage: 'execution reverted: "Already voted."',
  info: {
    error: {
      code: 3,
      message: 'execution reverted: Already voted.',
      data: '0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000e416c726561647920766f7465642e000000000000000000000000000000000000'
    },
    payload: {
      method: 'eth_estimateGas',
      params: [Array],
      id: 8,
      jsonrpc: '2.0'
    }
  }
}
```




Next I try to vote on the same proposal with a new contract address used in the .env variables (0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1), but it gets reverted because this address has no right to vote:
```
npx ts-node ./scripts/CastVote.ts 0x13Deda0De125d768e795a6E4cAc0787955E90E99 1
```
Logs:
```
Last block number: 4642747
Last block timestamp: 1699292868 (function toLocaleDateString() { [native code] })
Using address 0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1
Error: execution reverted: "Has no right to vote" (action="estimateGas", data="0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000014486173206e6f20726967687420746f20766f7465000000000000000000000000", reason="Has no right to vote", transaction={ "data": "0x0121b93f0000000000000000000000000000000000000000000000000000000000000001", "from": "0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1", "to": "0x13Deda0De125d768e795a6E4cAc0787955E90E99" }, invocation=null, revert={ "args": [ "Has no right to vote" ], "name": "Error", "signature": "Error(string)" }, code=CALL_EXCEPTION, version=6.8.1)
    at makeError (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/utils/errors.ts:694:21)
    at getBuiltinCallException (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/abi/abi-coder.ts:118:21)
    at Function.getBuiltinCallException (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/abi/abi-coder.ts:230:16)
    at JsonRpcProvider.getRpcError (/Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/providers/provider-jsonrpc.ts:906:32)
    at /Users/Cam/Documents/Projects/Solidity-bootcamp/Team 2 Organisation/Week 2 Homework/Ballot.sol-scripts/node_modules/ethers/src.ts/providers/provider-jsonrpc.ts:526:45
    at processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'CALL_EXCEPTION',
  action: 'estimateGas',
  data: '0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000014486173206e6f20726967687420746f20766f7465000000000000000000000000',
  reason: 'Has no right to vote',
  transaction: {
    to: '0x13Deda0De125d768e795a6E4cAc0787955E90E99',
    data: '0x0121b93f0000000000000000000000000000000000000000000000000000000000000001',
    from: '0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1'
  },
  invocation: null,
  revert: {
    signature: 'Error(string)',
    name: 'Error',
    args: [ 'Has no right to vote' ]
  },
  shortMessage: 'execution reverted: "Has no right to vote"',
  info: {
    error: {
      code: 3,
      message: 'execution reverted: Has no right to vote',
      data: '0x08c379a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000014486173206e6f20726967687420746f20766f7465000000000000000000000000'
    },
    payload: {
      method: 'eth_estimateGas',
      params: [Array],
      id: 8,
      jsonrpc: '2.0'
    }
  }
}
```
Successfully granted voting rights to another wallet (0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1):
```
npx ts-node ./scripts/GiveVotingRights.ts 0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1
```

Logs:
```
Using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
Wallet balance 0.49642851396174964 ETH
Voting rights granted to 0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1
```


Successfully voted with this address (0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1):
```
npx ts-node ./scripts/CastVote.ts 0x13Deda0De125d768e795a6E4cAc0787955E90E99 1
```
Logs:
```
Last block number: 4642782
Last block timestamp: 1699293408 (function toLocaleDateString() { [native code] })
Using address 0x939E0985CC8135E527e2Ab6FC3DDD6201C2196F1
Transaction completed 0x879e06ff6b55002d42d376597f540450cffccb6bd3e78f2387d01dac5cbbfa1c
```

Next I give voting rights to a new wallet using the chairperson address:
```
npx ts-node ./scripts/GiveVotingRights.ts 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21
```

Logs:
```
Using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
Wallet balance 0.49637985696131176 ETH
Voting rights granted to 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21
```

Then I successfully delegate the vote of this address (0x190EFd7Def4010138509A2AAFD1d1357Fd235D21), by updating the .env variables, to the chairperson wallet (0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF):
```
npx ts-node ./scripts/DelegateVotes.ts 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
```
Logs:
```
Using address 0x190EFd7Def4010138509A2AAFD1d1357Fd235D21
Wallet balance 0.5 ETH
Vote delegated to 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
```

Finally, I query the results of the vote using QueryResults.ts:
```
npx ts-node ./scripts/QueryResults.ts 0x13Deda0De125d768e795a6E4cAc0787955E90E99
```
Logs:
```
Using address 0xFC3Cda653CB188618DEb61dc4Fa0c8391e4754eF
Wallet balance 0.49633119996082514 ETH
Winning Proposal Index: 1
Winner Name: Proposal2
```






