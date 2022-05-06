class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      try {
        throw Error('The amount provided cannot be negative');
      } catch (e) {
        console.log('Error:', e.message)
      }
    }
    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      try {
        throw Error('The amount provided cannot be negative');
      } catch (e) {
        console.log('Error:', e.message)
      }
    }
    if (this.#amount < amount) {
      try {
        throw Error('You cannot withdraw more than account balance');
      } catch (e) {
        console.log('Error:', e.message)
      }
    }
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(1000);
bankAccount.view();