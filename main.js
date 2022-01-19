const accountBalanceHistory = [
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
    },
   
  ];
  
  const accountTypeChecker = (accountBalanceHistory) => {
    let result;
  
    let difference = accountBalanceHistory[1].account.balance.amount - accountBalanceHistory[0].account.balance.amount;
  
    for (let i = 0; i < accountBalanceHistory.length-1 ; i++) {
      if (    
          accountBalanceHistory[i + 1].account.balance.amount -  accountBalanceHistory[i].account.balance.amount ==
        difference
      ) {
        result = false;
      } else {
        result = true;
      }
    }
  
    return result ? 'A' : 'B';
  };
  
  accountTypeChecker(accountBalanceHistory);
  
    