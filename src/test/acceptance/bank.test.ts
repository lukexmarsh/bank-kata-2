import { AccountService } from "../../main/AccountService";
import { createDate } from "../../main/date";
import { printer } from "../../main/Printer";

jest.mock("../../main/Printer");
jest.mock("../../main/date", () => ({
  createDate: jest.fn(),
}));

const setDate = (dateStr: string) => {
  const date = new Date(dateStr);
  (createDate as jest.Mock).mockReturnValue(date);
};

describe("Given a client makes a deposit of 1000 on 10-01-2012", () => {
  describe("And a deposit of 2000 on 13-01-2012", () => {
    describe("And a withdrawal of 500 on 14-01-2012", () => {
      describe("When they print their bank statement", () => {
        it("will print the bank statement", () => {
          const service = new AccountService();

          setDate("2012-01-10");
          service.deposit(1000);

          setDate("2012-01-13");
          service.deposit(2000);

          setDate("2012-01-14");
          service.withdraw(500);

          service.printStatement();


          // const expected = [
          //     `Date       || Amount || Balance`,
          //     `14/01/2012 || -500   || 2500`,
          //     `13/01/2012 || 2000   || 3000`,
          //     `10/01/2012 || 1000   || 1000`
          // ];

          const expected = ` 
            Date       || Amount || Balance
            14/01/2012 || -500   || 2500
            13/01/2012 || 2000   || 3000
            10/01/2012 || 1000   || 1000
          `;

          expect(printer).toHaveBeenCalledWith(expected);
        });
      });
    });
  });
});
