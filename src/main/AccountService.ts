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
    const transactions = this.transactions.reverse().map(({date, amount}) => {
      const formattedDate =
          `${date.getDate()}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
      return `${formattedDate} || ${amount}`;
    });
    const template = `
        Date || Amount
        ${transactions.join('\n')}
      `;
    printer(template);
  }

  withdraw(amount: number): void {
    this.transactions.push({
      date: createDate(),
      amount: -amount,
    });
  }
}
