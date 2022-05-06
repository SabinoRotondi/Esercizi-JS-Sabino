class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#amount += amount;
    } else {
      try {
        throw Error(`The amount cannot be negative.`)
      } catch (e) {
        console.log('Error:', e.message)
      }
    }
  }

  withdraw(amount) {
    if (amount < 0 || amount > this.#amount) {
      try {
        throw Error(`Cannot withdraw more than your balance or a negative amount.`)
      } catch (e) {
        console.log('Error:', e.message)
      }
    } else {
      this.#amount -= amount;
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();