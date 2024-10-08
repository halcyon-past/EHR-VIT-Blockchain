const HealthRecord = artifacts.require("HealthRecord");

module.exports = async function(deployer) {
    await deployer.deploy(HealthRecord, {
        gas: 3000000,
        gasPrice: '20000000000' // Set this to match your Ganache gas price
    });
};
