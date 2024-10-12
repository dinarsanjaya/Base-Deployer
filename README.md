# Base Deployer

Base Deployer adalah sebuah tool yang digunakan untuk mendeply beberapa smart contract secara otomatis di jaringan Base Mainnet. Tool ini memudahkan developer untuk melakukan deploy dengan menginput jumlah kontrak yang ingin dideploy serta greeting message yang diinginkan.

## Fitur

- Deploy beberapa smart contract dalam satu kali run.
- Menggunakan Hardhat dan Ethers.js.
- Dapat dihubungkan dengan jaringan Base Mainnet.

## Prasyarat

Sebelum menggunakan Base Deployer, pastikan Anda telah memenuhi prasyarat berikut:

- Node.js (v14 atau lebih tinggi)
- NPM (Node Package Manager)

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan mengkonfigurasi project ini:

1. Clone repository ini ke dalam folder lokal Anda:

```
git clone https://github.com/username/Base-Deployer.git
cd Base-Deployer
```
```
npm install --save-dev hardhat
```
Inisialisasi Hardhat
```
npx hardhat
```
Instal Dependensi Tambahan
```
npm install --save dotenv @nomiclabs/hardhat-ethers ethers prompt-sync
```

Install dependensi yang diperlukan:
```
npm install
```
Buat file .env di root folder project dan tambahkan private key serta RPC URL:
```
PRIVATE_KEY=your_private_key_here
BASE_RPC_URL=https://base-mainnet.g.alchemy.com/v2/your_alchemy_api_key
```
Kompilasi dan Deploy
1. Kompilasi smart contract:
```
npx hardhat compile
```
2. Jalankan skrip deploy:
```
npx hardhat run scripts/deploy.js --network base
```
