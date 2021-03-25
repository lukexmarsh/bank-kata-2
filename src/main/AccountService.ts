import { createDate } from "./date";
import { printer } from "./Printer";

interface AccountServiceInterface {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  printStatement(): void;
}

interface Transaction {
  date: Date;
  amount: number;
}

export class AccountService implements AccountServiceInterface {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  deposit(amount: number): void {
    this.transactions.push({
      date: createDate(),
      amount,
    });
  }

  printStatement(): void {
    const transactions = this.transactions.map((transaction) => {
      return `${transaction.date} || ${transaction.amount}`;
    });
    const template = `
        Date || Amount
        ${transactions}
      `;
    printer(template);
  }

  withdraw(amount: number): void {
    this.transactions.push({
      date: createDate(),
      amount,
    });
  }
}
