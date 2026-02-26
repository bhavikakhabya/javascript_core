const prompt = require("prompt-sync")();

let accounts = [];

// Create Account
function createAccount() {
    let name = prompt("Enter account holder name: ");
    let deposit = Number(prompt("Enter initial deposit: "));

    if (deposit < 0) {
        console.log("Invalid amount");
        return;
    }

    let accNumber = accounts.length + 1;

    let account = {
        number: accNumber,
        name: name,
        balance: deposit
    };

    accounts.push(account);

    console.log("Account created successfully");
    console.log("Account Number:", accNumber);
}

// Find Account
function findAccount(accNumber) {
    return accounts.find(acc => acc.number === accNumber);
}

// Deposit
function deposit() {
    let num = Number(prompt("Enter account number: "));
    let amount = Number(prompt("Enter deposit amount: "));

    let acc = findAccount(num);

    if (!acc) {
        console.log("Account not found");
        return;
    }

    if (amount <= 0) {
        console.log("Invalid amount");
        return;
    }

    acc.balance += amount;
    console.log("Deposit successful");
    console.log("New Balance:", acc.balance);
}

// Withdraw
function withdraw() {
    let num = Number(prompt("Enter account number: "));
    let amount = Number(prompt("Enter withdraw amount: "));

    let acc = findAccount(num);

    if (!acc) {
        console.log("Account not found");
        return;
    }

    if (amount > acc.balance) {
        console.log("Insufficient balance");
        return;
    }

    acc.balance -= amount;
    console.log("Withdrawal successful");
    console.log("Remaining Balance:", acc.balance);
}

// Check Balance
function checkBalance() {
    let num = Number(prompt("Enter account number: "));
    let acc = findAccount(num);

    if (!acc) {
        console.log("Account not found");
        return;
    }

    console.log("Account Holder:", acc.name);
    console.log("Balance:", acc.balance);
}

// Menu
while (true) {
    console.log("\n===== BANK MENU =====");
    console.log("1. Create Account");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Check Balance");
    console.log("5. Exit");

    let choice = Number(prompt("Enter choice: "));

    switch (choice) {
        case 1:
            createAccount();
            break;
        case 2:
            deposit();
            break;
        case 3:
            withdraw();
            break;
        case 4:
            checkBalance();
            break;
        case 5:
            console.log("Thank you for using bank");
            process.exit();
        default:
            console.log("Invalid choice");
    }
}