import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import TransactionListItem from "components/TransactionListItem";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log("transactions", transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionListItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
