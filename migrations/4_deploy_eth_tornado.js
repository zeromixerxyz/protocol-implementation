/* global artifacts */
require('dotenv').config({ path: '../.env' })
const ETHZeroMixer = artifacts.require('ETHZeroMixer')
const Verifier = artifacts.require('Verifier')
const Hasher = artifacts.require('Hasher')

module.exports = function (deployer) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, ETH_AMOUNT } = process.env
    const verifier = await Verifier.deployed()
    const hasher = await Hasher.deployed()
    const ZeroMixer = await deployer.deploy(
      ETHZeroMixer,
      verifier.address,
      hasher.address,
      ETH_AMOUNT,
      MERKLE_TREE_HEIGHT,
    )
    console.log('ETHZeroMixer address', ZeroMixer.address)
  })
}
