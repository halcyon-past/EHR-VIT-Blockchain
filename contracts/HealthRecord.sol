// contracts/HealthRecord.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthRecord {
    struct Record {
        string diagnosis;
        string treatment;
        uint256 timestamp;
    }

    mapping(address => Record[]) private records;
    mapping(address => bool) public authorizedDoctors;

    // Add a new health record for a patient
    event RecordAdded(address indexed patient, string diagnosis, string treatment, uint256 timestamp);

    function addRecord(address patient, string memory diagnosis, string memory treatment) public {
        require(authorizedDoctors[msg.sender], "Not authorized to add records");
        records[patient].push(Record(diagnosis, treatment, block.timestamp));
        emit RecordAdded(patient, diagnosis, treatment, block.timestamp); // Emit event
    }


    // View health records of the sender
    function getRecords() public view returns (Record[] memory) {
        return records[msg.sender];
    }

    // Authorize a doctor
    function authorizeDoctor(address doctor) public {
        authorizedDoctors[doctor] = true;
    }
}
