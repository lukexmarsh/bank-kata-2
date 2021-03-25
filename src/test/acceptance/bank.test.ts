import { AccountService } from '../../main/AccountService';
import { printer } from '../../main/Printer';

jest.mock('../../main/Printer');

describe("Given a client makes a deposit of 1000 on 10-01-2012", () => {
  describe("And a deposit of 2000 on 13-01-2012", () => {
    describe("And a withdrawal of 500 on 14-01-2012", () => {
      describe("When they print their bank statement", () => {
        it("will print the bank statement", () => {
          const service = new AccountService();
          //10-01-2012
          service.deposit(1000);
          //13-01-2012
          service.deposit(2000);
          //14-01-2012
          service.withdraw(500);
          service.printStatement();

          expect(printer).toHaveBeenCalledWith(`
                        Date       || Amount || Balance
                        14/01/2012 || -500   || 2500
                        13/01/2012 || 2000   || 3000
                        10/01/2012 || 1000   || 1000
                    `);
        });
      });
    });
  });
});
