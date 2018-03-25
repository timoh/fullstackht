import * as React from 'react';
import TransactionRowElement from './TransactionRowElement';

// tslint:disable: no-any
interface TransactionsProps { transactions: Array<any>; }

class Transactions extends React.Component<TransactionsProps, {}> {
  props: {
    // tslint:disable-next-line: no-any
    transactions: Array<any>
  };
  
  render() {
    return (
      <div className="Transactions">
        <table>
          <thead>
            <th>Hi</th>
            <th>There</th>
          </thead>
          <tbody>
            {this.props.transactions.map( (transaction: any) => 
              <TransactionRowElement key={transaction.id} transactionObject={transaction} /> ) }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Transactions;