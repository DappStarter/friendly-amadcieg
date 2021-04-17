require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid nation flock system egg develop remain color gesture cart surge slice'; 
let testAccounts = [
"0xd4d737ea5a3186673587d5613401b1a0b87d0fa17f4b2a034346dd9aade7c876",
"0xbacb340648cf4b3dd4ce1d240256cfa3cfaed8fdd8aed68999545489155ac8bb",
"0x7750c69265e9628bcec84f678903edd9b412790fdcec1cab19697e5439fd723a",
"0x77257bf372783b21590e452a4ec34a53dbd985e2a99754c0a0a1c797145c7bd6",
"0x479c861860cf732131d9c80ae30282a3b12a61771fb4b9c04a110e5203d5fd10",
"0x35c30dd792c76d8d2691133197ab3a50ee37ec9a7c2cb59785e4aecb570d99f2",
"0x748227ee0047908b54cc621d3781b85361804895209ea1de2400e49b8f41a26b",
"0x14d7638eb881fea7e2868d71e6c051edfbb42e642c8a634f211634929e9db398",
"0xdb013889cd0571b0b9ed4a32ec07d515b3c8ff754b4b92c55b1ca98072d7a4a2",
"0xb37df688a0e73f5ad71682925d8ba258cef2ee97e598ae123b7a39b378eab67e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

