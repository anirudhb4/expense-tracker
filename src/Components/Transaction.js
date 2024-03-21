import React from "react";
import { useState, useContext } from "react";

import { GlobalContext } from "../Context/GlobalState";

export const Transaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="transaction">
      <div className="transaction-title">
        <h3>Add new transaction</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
