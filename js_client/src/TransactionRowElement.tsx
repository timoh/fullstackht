import * as React from 'react';
import './Transactions.css';

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

class TransactionRowElement extends React.Component {
  props: {
    key: string;
    transactionObject: TransactionRow;
  };
  
  // id, date, text, amount, balance, row_id, text_id, digest, created_at, updated_at, url
  render() {
    return (
      <tr className="TransactionRowElement">
        <td>
          {this.props.transactionObject.date}
        </td>
        <td>
          {this.props.transactionObject.text}
        </td>
        <td>
          {this.props.transactionObject.amount} €
        </td>
      </tr>
    );
  }
}

export default TransactionRowElement;
