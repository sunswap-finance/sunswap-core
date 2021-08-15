const SunFactory = artifacts.require("SunFactory");
module.exports = function (deployer, network, accounts) {
  deployer.deploy(SunFactory, accounts[0])
};