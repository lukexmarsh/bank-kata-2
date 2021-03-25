
interface AccountServiceInterface {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    printStatement(): void;
}

export class AccountService implements AccountServiceInterface {
    deposit(amount: number): void {
    }

    printStatement(): void {
    }

    withdraw(amount: number): void {
    }
}
