class BankAccount{
    #balance;

    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.#balance = 0;
    }

    // Public method - Visible to users

    deposit(amount){
        if (amount > 0){
            this.#balance += amount;
            console.log('Deposited ₹${amount}');
        }else{
            console.log("Invalid deposit amount");
        }
    }

    // Public method - visible to users
    withdraw(amount){
        if (amount <= this.#balance){
            this.#balance -= amount;
            console.log(`withdrawn ₹${amount}`);
        }else{
            console.log("Insufficient balance");
        }
    }

    // Public method to show limited detail
    checkBalance(){
        console.log(`Current balance: ₹${this.#balance}`);
    }
}

//  Create an account
const account = new BankAccount("Nilesh");

// Interact using abstracted methods 
account.deposit(1000);
account.withdraw(400);
account.checkBalance();

console.log('~ account:', account);