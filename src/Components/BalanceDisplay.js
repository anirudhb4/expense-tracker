import React, {useContext} from 'react';

import { GlobalContext } from "../Context/GlobalState";


export const BalanceDisplay = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <div className='balance-display'>
      <h3>YOUR BALANCE</h3>
      <h2>Rs.{total}</h2>
    </div>
  )
}
