const prompt = require('prompt-sync')();

async function main() {
  // Ambil input dari user untuk jumlah contract yang akan dideploy
  const numberOfContracts = parseInt(prompt("How many contracts would you like to deploy? "));
  if (isNaN(numberOfContracts) || numberOfContracts <= 0) {
    console.log("Invalid input. Please enter a valid number.");
    return;
  }

  const contractName = prompt("Enter the contract name (e.g., 'psyduck'): ");
  const initialGreeting = prompt("Enter the initial greeting message: ");

  const ContractFactory = await ethers.getContractFactory("Psyduck");

  // Loop untuk deploy beberapa contract
  for (let i = 1; i <= numberOfContracts; i++) {
    console.log(`Deploying contract #${i}...`);

    // Deploy contract dengan greeting yang diinputkan
    const contract = await ContractFactory.deploy(initialGreeting + ` #${i}`);
    
    // Tunggu hingga contract selesai dideploy
    await contract.deployed();

    console.log(`${contractName} #${i} deployed to:`, contract.address);
  }

  console.log(`${numberOfContracts} contracts have been deployed successfully.`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
