import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";
import { TransactionHandle } from "./TransactionHandle";

export const History = () => {
  const {transactions} = useContext(GlobalContext);
 



  return (
    <div className="history-container">
      <div className="history">
        <h3>History</h3>
      </div>
      <ul id="list" className="list">
        {transactions.map(transaction => (<TransactionHandle key={transaction.id} transaction={transaction}/>))}
        
      </ul>
    </div>
  );
};
