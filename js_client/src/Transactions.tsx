import * as React from 'react';
import './Transactions.css';
import TransactionRowElement from './TransactionRowElement';

// tslint:disable: no-any
interface TransactionsProps { transactions: Array<any>; }
interface TransactionRow { 
  id: string; 
  date: string;
  text: string; 
  amount: string; 
  balance: string; 
  row_id: number; 
  text_id: number; 
  digest: string; 
  created_at: string; 
  updated_at: string; 
  url: string; 
}

class Transactions extends React.Component<TransactionsProps, {}> {
  props: {
    // tslint:disable-next-line: no-any
    transactions: Array<TransactionRow>
  };
  
  render() {
    return (
      <div className="Transactions">
        <table>
          <thead>
            <th>Date</th>
            <th>Text</th>
            <th>Amount</th>
          </thead>
          <tbody>
            {this.props.transactions.slice(0, 49).map( (transaction: TransactionRow) => 
              <TransactionRowElement key={transaction.id} transactionObject={transaction} /> ) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Transactions;