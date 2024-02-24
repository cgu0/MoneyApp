import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)
  const [ incomeExpense, setIncomeExpense ] = useState({income: 0, expense: 0})
  useEffect(() => {
    const amounts = transactions.map(transaction => transaction.amount);
    const income  = amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    setIncomeExpense({income, expense});
  },[transactions]);

  return (
    <div className ='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className="money plus">${incomeExpense.income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${incomeExpense.expense}</p>
      </div>
    </div>
  )
}
