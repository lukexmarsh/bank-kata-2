describe("Given a client makes a deposit of 1000 on 10-01-2012", () => {
  describe("And a deposit of 2000 on 13-01-2012", () => {
    describe("And a withdrawal of 500 on 14-01-2012", () => {
      describe("When they print their bank statement", () => {
        it("will print the bank statement", () => {
          const service = new AccountService();
          service.deposit(1000);
          service.withdraw(500);
          expect(service.printStatement()).toEqual(`
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
