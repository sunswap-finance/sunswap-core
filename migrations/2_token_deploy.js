const SunSwapToken = artifacts.require("SunSwapToken");

module.exports = function (deployer) {
  deployer.deploy(SunSwapToken);
};
