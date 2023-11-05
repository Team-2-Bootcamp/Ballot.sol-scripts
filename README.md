# Week-2 Weekend Project

This document forms part of the week 2 weekend project for the Solidity Bootcamp. 

Members from Team 2 who worked on this project: Ignas Apšega, Lyle Davids, Wendwossen Dufera and Cameron Mcewan

For week 2, we developed and ran scripts for “Ballot.sol”  to give voting rights, casting votes, delegating votes and querying results. 

## Feedback

### Ignas Apšega

### Lyle Davids

### Wendwossen Dufera
I deployed(the transaction hash for this operation is [0xe9d30b7f1a079bedccc1beec13496f4cc62606f344decba2d66ca7900fe5f060]) the Ballot smart contract and interacted with the following functions:

- **vote**: I successfully voted for proposals at index 1, which is "Proposal1." I deployed the Ballot contract by passing three proposals, namely, "Proposal1," "Proposal2," and "Proposal3." The transaction hash for this operation is [0x533f3e3a9a4770ea66590f04e9741ef622f945c2405c1b1d3ba17aa216100cb3].

- **giveRightToVote**: I successfully granted the right to vote to Lyle Davids. As the chairperson in the contract (because I was the one who deployed it), I had the authority to give voting rights. The transaction hash for this operation is [0xf5651e7f5cb0287ac9814a714484f1c588d2baa2e58d64293b5aab338d4d64f6].

- **delegate**: When I attempted to delegate my vote, I received a reversion with the message "You already voted," as I had already voted for "Proposal2" and did not have any vote count that I could delegate to another voter.

- **winnerName**: I was successful in obtaining the name of the winning proposal by the time I made the request. At that time, "Proposal2" was the winner.

### Cameron McEwan
