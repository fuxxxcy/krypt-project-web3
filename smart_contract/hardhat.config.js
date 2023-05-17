require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/XeSDhIJSoiIP2og4KSqQBq3XoKmrcul-',
      accounts: ['1046955fa54e965ecc393e3d33911b26ed6917b7af5e16f85fdb11adf85b4c85']
    }
  }
}