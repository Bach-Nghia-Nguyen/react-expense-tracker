import React, { useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import TransactionListItem from "components/TransactionListItem";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      {transactions.length > 0 ? (
        <ul className="list">
          {transactions.map((transaction) => (
            <TransactionListItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </ul>
      ) : (
        <small>There is no transaction record</small>
      )}
    </>
  );
};

export default TransactionList;
