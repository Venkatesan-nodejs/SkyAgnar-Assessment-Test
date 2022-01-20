describe('Test cases to Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month', () => {

    const accountBalanceHistory1 = [
      {
        monthNumber: 0, // current month
        account: {
          balance: { amount: 150 },
        },
      },
      {
        monthNumber: 1, // last month
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 2, // two months ago
        account: {
          balance: { amount: 200 },
        },
      }
    ]
  
    it('should be of account Type A', () =>{
      assert.equal(accountTypeChecker(accountBalanceHistory1), 'A');
    })
  
  
    const accountBalanceHistory2 = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 20 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 150 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 300 },
          },
        }
      ];
    it('should be of account Type A', () =>{
      assert.equal(accountTypeChecker(accountBalanceHistory2), 'A');
    })
  
    const accountBalanceHistory3 = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 200 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 300 },
          },
        }
      ];
    it('should be not equal of account Type A', () =>{
      assert.notEqual(accountTypeChecker(accountBalanceHistory3), 'A')
    })
  });
  
  describe('Test cases to Type 🅱 is one where the balance amount changes by the same amount each month', () => {
  
    const accountBalanceHistory1 = [
      {
        monthNumber: 0, // current month
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1, // last month
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 2, // two months ago
        account: {
          balance: { amount: 200 },
        },
      }
    ]
  
    it('should be of account Type B', () =>{
      assert.equal(accountTypeChecker(accountBalanceHistory1), 'B');
    })
  
  
    const accountBalanceHistory2 = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 20 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 120 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 300 },
          },
        }
      ];
    it('should not be of account Type B', () =>{
      assert.notEqual(accountTypeChecker(accountBalanceHistoryA), 'B')
    });
  });