import React, {useContext} from 'react'
import { GlobalContext } from "../Context/GlobalState";


export const IncomeExpenseDisplay = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

 
  return (
    <div className='income-expense-display'>
      <div className='income'>
        <h3>INCOME</h3>
        <h2>Rs {income}</h2>
      </div>
      <div className='expense'>
        <h3>EXPENSE</h3>
        <h2>Rs {expense}</h2>
      </div>
    </div>
  )
}
