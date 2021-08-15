const MasterChef = artifacts.require("MasterChef");
const SunSwapToken = artifacts.require("SunSwapToken");

module.exports = function (deployer,network,accounts) {
  deployer.deploy(MasterChef,SunSwapToken.address,accounts[0],accounts[0],'10000000000000');
};
