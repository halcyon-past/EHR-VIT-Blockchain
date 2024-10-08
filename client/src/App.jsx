import React, { useEffect, useState } from "react";
import Web3 from "web3";
import HealthRecord from "./HealthRecord.json";

const App = () => {
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        // Initialize Web3
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
  
        // Set the contract instance
        const networkId = await web3.eth.net.getId();
        console.log("Network ID:", networkId); // Debugging line
        const deployedNetwork = HealthRecord.networks["5777"]; // Use the correct network ID
        console.log("Deployed Network:", deployedNetwork); // Debugging line
  
        if (deployedNetwork) {
          const contractInstance = new web3.eth.Contract(
            HealthRecord.abi,
            deployedNetwork.address
          );
          setContract(contractInstance);
        } else {
          console.error("Contract not deployed on the current network.");
        }
      } catch (error) {
        console.error("Error initializing Web3", error);
      }
    };
  
    initWeb3();
  }, []);
  

  // Add your function to interact with the contract
  const fetchRecords = async () => {
    if (contract) {
        try {
            // Use the first account from the accounts array as the patient address
            const patientAddress = accounts[0]; 
            console.log("Patient Address:", patientAddress); // Debugging line
            const records = await contract.methods.getRecords().call({
                from: patientAddress, // Specify the account from which to call
                gas: 6721975 // Adjust the gas limit as needed
            });

            if (records.length === 0) {
                console.log("No records found for this address.");
            } else {
                console.log("Fetched records:", records);
            }
        } catch (error) {
            console.error("Error fetching records", error);
        }
    } else {
        console.error("Contract is not initialized.");
    }
};


  

  return (
    <div className="home">
      <h1>Electronic Health Records</h1>
      <button onClick={fetchRecords}>Fetch Records</button>
    </div>
  );
};

export default App;
