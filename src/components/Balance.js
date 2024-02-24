import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); //通过useContext来获取全局状态
  const [ balance, setBalance ] = useState(0);

  useEffect(() => {
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const totalAmounts = amounts.reduce((acc, item) => (acc += item), 0)
    setBalance(totalAmounts);
  },[transactions]);
  

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </div>
  )
}