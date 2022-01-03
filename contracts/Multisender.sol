//SPDX-License-Identifier: GPL3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Multisender is Ownable {
    uint16 public maxSendPerTxn = 200;

    event Multisend(address token, uint256 total);
    event TokenRedeem(address token, uint256 amount, address payable to);

    modifier isNotExceed(uint16 numParticipants) {
        require(numParticipants <= maxSendPerTxn, "Transaction exceed maximum");
        _;
    }

    function multisend(address[] memory participants, uint256[] memory amounts) external payable isNotExceed(uint16(participants.length)) {
        require(participants.length == amounts.length, "Invalid parameters");
        uint256 value = msg.value;
        uint256 total = 0;
        for(uint16 i=0; i<participants.length; i++) {
            require(value >= amounts[i], "Insufficient balance");
            payable(participants[i]).transfer(amounts[i]);
            value -= amounts[i];
            total += amounts[i];
        }
        emit Multisend(0x0000000000000000000000000000000000000000, total);
    }

    function multisend(address tokenAddress, address[] memory participants, uint256[] memory amounts) external isNotExceed(uint16(participants.length)) {
        require(participants.length == amounts.length, "Invalid parameters");
        uint256 total = 0;
        IERC20 token = IERC20(tokenAddress);
        for(uint16 i=0; i<participants.length; i++) {
            SafeERC20.safeTransferFrom(token, msg.sender, participants[i], amounts[i]);
            total += amounts[i];
        }
        emit Multisend(tokenAddress, total);
    }

    function redeem(address payable recipient) external onlyOwner {
        uint256 balance = address(this).balance;
        recipient.transfer(balance);
        emit TokenRedeem(0x0000000000000000000000000000000000000000, balance, recipient);
    }

    function redeem(address tokenAddress, address payable recipient) external onlyOwner {
        IERC20 token = IERC20(tokenAddress);
        uint256 balance = token.balanceOf(address(this));
        SafeERC20.safeTransfer(token, recipient, balance);
        emit TokenRedeem(tokenAddress, balance, recipient);
    }

    function setMaxSendPerTxn(uint16 _maxSendPerTxn) external {
        maxSendPerTxn = _maxSendPerTxn;
    }
}
