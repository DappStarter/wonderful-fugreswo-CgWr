require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'jazz kiwi october slab chapter deny radar proud install describe off trap'; 
let testAccounts = [
"0xf28945f700650c2163b786d67806d79335d18f4ebda174e8c97c221b3645cbdb",
"0x1d36e14432ff3110c7ddbe4d574cc995ccaa412c1ea3787dc809352ff01b0b02",
"0x56190fbb49a023cba4a66a28d82691f2b637a2d91377ce2e5408778d3d1eb146",
"0x47d69cffa815a134e3589e2f15de50e8836eb9854c9bf101b9c574f23a159020",
"0x53e6a18e2cc2a23296a5c73b5b60a7b39b71040eee4fed9064290cf7aa05039c",
"0x7f5e046fed396f68b61adebbca4c09b17ef7e98d79f7e6eeca428fa4045ced0e",
"0xd407e5402fdb80a94b55671c684615d192a3b47e03d0f7c48a99a6ddb948353c",
"0x9100197a0c084e882fbeb3a324c443199d987d68911caf7fcc3d24abeaad1a60",
"0x1208ed7aec1264438d1b604cefd5a984c0c108dd7c5318e302386788f47e9d78",
"0xa08fd233f5faeee1030691075c1d73b62a237835942a565a6c26f6445c295f9b"
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
            version: '^0.8.0'
        }
    }
};


